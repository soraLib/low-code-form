import { computed, defineComponent, h } from 'vue'
import RadioSpecific from './radio/radio'
import CheckboxSpecific from './checkbox/checkbox'
import TableSpecific from './table/table'
import type { Component, PropType } from 'vue'
import type { PcElement } from '@/SaForm/PcForm/element'
import type { PcGraph } from '@/SaForm/PcForm/graph'
import { ElementType } from '@/SaForm/element'

const SpecificComponentMap: Partial<Record<ElementType, Component>> = {
  [ElementType.Radio]: RadioSpecific,
  [ElementType.Checkbox]: CheckboxSpecific,
  [ElementType.Table]: TableSpecific,
}
export default defineComponent({
  name: 'ElementRendererSpecifics',
  props: {
    graph: {
      required: true,
      type: Object as PropType<PcGraph>,
    },
    element: {
      required: true,
      type: Object as PropType<PcElement>,
    },
  },

  setup(props) {
    const type = computed(() => props.element.attrs.type)

    return () => {
      const SpecificComponent = SpecificComponentMap[type.value]
      if (SpecificComponent) return h(SpecificComponent, props)

      return <span> {props.element.parent && props.element.attrs.name}</span>
    }
  },
})
