import { Transition, computed, defineComponent, ref, watch } from 'vue'
import { NIcon, NInput, NPopover, NScrollbar, NSwitch, NTree } from 'naive-ui'
import { ChevronBack, Funnel, Layers } from '@vicons/ionicons5'
import { useStorage } from '@vueuse/core'
import { ElementType } from '../../element'
import { isContainerType } from '../../PcForm/element'
import { createElementTreeData } from '../../PcForm/utils/tree'
import type { ElementTreeDataOption } from '../../PcForm/utils/tree'
import type { PropType } from 'vue'
import type { BasicGraph } from '../../graph'

import './index.scss'
import { pcStencilIcons } from '@/SaForm/PcForm/layout/stencil/stencil'
import { useClazs } from '@/SaForm/utils/class'

export default defineComponent({
  name: 'SaFormLayoutLayer',

  props: {
    graph: {
      required: true,
      type: Object as PropType<BasicGraph>,
    },
  },

  setup(props) {
    const visible = computed(() => props.graph.layout.layer)
    const treeData = computed(() =>
      createElementTreeData(props.graph.canvas.children)
    )
    const selectedKeys = computed(() =>
      props.graph.selected.map(({ attrs }) => attrs.id)
    )
    const onUpdateSelectedKeys = (keys: string[]) => {
      const selected = props.graph.setSelected(keys)
      if (selected) props.graph.scrollIntoView(selected[0])
    }

    // filter
    const pattern = ref('')
    const hideIrrelevantNodes = useStorage('hide-irrelevant-nodes', true)

    return () => (
      <Transition name="collapse-x-transition">
        {visible.value && (
          <div class="sa-form-layer sa-bg p-2">
            <div class="title flex items-center text-base font-medium">
              <NIcon class="mr-2" size={20}>
                <Layers />
              </NIcon>
              <span class="mr-auto">Layer</span>
              <NPopover
                trigger="click"
                placement="right-start"
                width={200}
                v-slots={{
                  trigger: () => (
                    <div
                      title="Filter"
                      class={useClazs(
                        'flex',
                        'items-center',
                        'p-1.5',
                        'cursor-pointer',
                        { 'is-filtered': pattern.value !== '' }
                      )}
                    >
                      <NIcon size={16}>
                        <Funnel />
                      </NIcon>
                    </div>
                  ),
                }}
              >
                <div class="flex justify-between">
                  <span>Hide irrelevant nodes</span>
                  <NSwitch
                    value={hideIrrelevantNodes.value}
                    onUpdate:value={(v: boolean) =>
                      (hideIrrelevantNodes.value = v)
                    }
                  ></NSwitch>
                </div>
                <NInput
                  class="my-2"
                  size="small"
                  placeholder="Search by id or name"
                  clearable
                  value={pattern.value}
                  onUpdate:value={(v) => (pattern.value = v)}
                ></NInput>
              </NPopover>

              <div
                class="layer-close-button rounded-full cursor-pointer flex items-center p-1.5"
                title="Close Layer"
                onClick={() => props.graph.setLayout({ layer: false })}
              >
                <NIcon size={20} {...{}}>
                  <ChevronBack />
                </NIcon>
              </div>
            </div>

            <NScrollbar class="my-2 pr-3">
              <NTree
                keyField="value"
                block-line
                block-node
                showIrrelevantNodes={!hideIrrelevantNodes.value}
                data={treeData.value}
                pattern={pattern.value}
                filter={(pattern, node: any) =>
                  node.value == pattern || node.label.includes(pattern)
                }
                node-props={({ option }: { option: ElementTreeDataOption }) => {
                  const index = props.graph.selected.findIndex(
                    (elem) => elem.attrs.id === option.value
                  )
                  return {
                    'is-empty':
                      isContainerType(option.type) && !option.children?.length,
                    'layer-tree-status':
                      index === -1
                        ? 'not-selected'
                        : index === 0 && props.graph.selected.length > 1
                        ? 'is-reference'
                        : index === 0 && props.graph.selected.length === 1
                        ? 'is-only-selection'
                        : 'is-selected',
                  }
                }}
                selectedKeys={selectedKeys.value}
                render-label={({
                  option,
                }: {
                  option: ElementTreeDataOption
                }) => (
                  <div
                    title={`${ElementType[option.type]}: ${option.label}`}
                    class="text-left w-full overflow-hidden whitespace-nowrap text-ellipsis"
                  >
                    {option.label}
                  </div>
                )}
                render-prefix={({
                  option,
                }: {
                  option: ElementTreeDataOption
                }) => <i class={`iconfont ${pcStencilIcons[option.type]}`} />}
                onUpdate:selectedKeys={onUpdateSelectedKeys}
              ></NTree>
            </NScrollbar>
          </div>
        )}
      </Transition>
    )
  },
})
