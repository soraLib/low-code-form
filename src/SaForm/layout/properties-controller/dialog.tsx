import { ElButton, ElDialog, ElInput } from 'element-plus'
import { cloneDeep, isEqual } from 'lodash-es'
import { computed, DefineComponent, defineComponent, h, nextTick, PropType, Ref, ref, shallowRef, watch } from 'vue'
import { SaController } from '../../config'
import { BasicGraph } from '../../graph'
import { SaPlugin } from '../../plugin'
import { getPluginValue } from '../../utils/plugin'

export default defineComponent({
  name: 'SaFormControllerDialogLayout',
  props: {
    plugin: {
      required: true,
      type: Object as PropType<SaPlugin>
    },
    graph: {
      required: true,
      type: Object as PropType<BasicGraph>
    },
    controller: {
      required: true,
      type: Object as PropType<SaController>
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    let asyncCompoGetter: undefined | (() => Promise<any>)

    if (props.plugin.dialog) {
      const rName = /\.\/.+\/(.+)\/index.tsx/i

      for (const path of Object.keys(props.controller.components)) {
        const name = path.match(rName)?.[1]

        if (name && name === props.plugin.dialog.component) {
          // eslint-disable-next-line vue/no-setup-props-destructure
          asyncCompoGetter = props.controller.components[path]
        }
      }
    }

    const asyncCompo: Ref<undefined | DefineComponent> = shallowRef()

    init()

    async function init() {
      if (asyncCompoGetter) {
        const res = await asyncCompoGetter()
        asyncCompo.value = res.default
      }
    }

    const child = computed(() => asyncCompo.value ?
      h(asyncCompo.value, { graph: props.graph, plugin: props.plugin })
      : '')

    function handleConfirm() {
      const childExpose = (child.value as any)?.component.exposed

      if (!childExpose?.update) {
        console.error(`[Sa error]: Plugin ${props.plugin.dialog?.component} doesn't have expose update function.`)

        return
      }

      const { update } = childExpose
      try {
        const value = update()

        /** create record when value update */
        if (!isEqual(value, getPluginValue(props.graph, props.plugin))) {
          props.graph.updateElemData(props.graph.selected[0], {
            [props.plugin.attr]: cloneDeep(value)
          })
        }
      } catch (err) {
        console.error(err)
      }

      dialogVisible.value = false
    }

    return () => (
      <div class="dialog-container">
        { props.plugin?.filter ?
          <ElInput modelValue={
            props.plugin.filter(getPluginValue(props.graph, props.plugin))} disabled /> : '' }

        <ElButton onClick={() => dialogVisible.value = true}>set</ElButton>

        <div v-dialog-drag>
          {
            <ElDialog
              title={props.plugin.dialog?.title ?? props.plugin.label}
              modelValue={dialogVisible.value}
              closeOnClickModal={false}
              onClose={() => dialogVisible.value = false}
              modal={false}

              v-slots={{
                footer: () => (
                  <div>
                    <ElButton type="default" onClick={() => dialogVisible.value = false}>cancel</ElButton>
                    <ElButton type="primary" onClick={handleConfirm}>submit</ElButton>
                  </div>
                )
              }}
            >
              { child.value }
            </ElDialog>
          }
        </div>

      </div>
    )
  }
})