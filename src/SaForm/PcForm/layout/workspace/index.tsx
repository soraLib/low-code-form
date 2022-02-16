import { Cell, JQuery } from '@antv/x6';
import { computed, defineComponent, h, onMounted, PropType, Ref, ref, ShallowRef, shallowRef } from 'vue';
import { PcDrawer } from '../../drawer';
import { createMockPcCanvas } from './mock';
import { PcCell } from './utils';

import { DeleteFilled } from '@element-plus/icons-vue';
import { copyNodes, cutNodes, pasteNodes, removeNodes } from './graph';
import { createX6Graph } from './graph/x6';

export default defineComponent({
  name: 'SaPcFormRender',
  props: {
    drawer: {
      required: true,
      type: Object as PropType<PcDrawer>
    }
  },

  setup(props) {
    const workspace: Ref<HTMLDivElement | null> = ref(null);
    // TODO: contentmenu type
    const contextmenu: Ref<any | null> = ref(null);
    const selectedCells: Ref<PcCell[]> = ref([]);
    const contextmenuEvent: ShallowRef<JQuery.ContextMenuEvent | undefined> = shallowRef();
    const parent: ShallowRef<Cell | undefined> = shallowRef();

    onMounted(() => {
      if (workspace.value) {
        const canvas = createMockPcCanvas();

        console.log('create graph', canvas);

        createX6Graph(workspace.value, canvas, props.drawer);
      }
    });

    const graphContextmenu = computed(() => {
      if (selectedCells.value.length) { // TODO:
        return (
          <>
            <v-contextmenu-item onClick={() => copyNodes(props.drawer)}>
              copy
            </v-contextmenu-item>
            <v-contextmenu-item onClick={() => cutNodes(props.drawer)}>
              cut
            </v-contextmenu-item>
            <v-contextmenu-item onClick={() => pasteNodes(contextmenuEvent.value, parent.value, props.drawer)}>
              paste
            </v-contextmenu-item>
            <v-contextmenu-item type="danger" icon={<DeleteFilled />} onClick={() => removeNodes(props.drawer)}>
              delete
            </v-contextmenu-item>
          </>
        );
      }

      return (
        <v-contextmenu-item onClick={() => pasteNodes(contextmenuEvent.value, undefined, props.drawer)}>
          paste
        </v-contextmenu-item>
      );
    });

    return {
      workspace,
      contextmenu,
      selectedCells,
      graphContextmenu
    };
  },

  render() {
    return (
      <div>
        <div ref="workspace"></div>

        <v-contextmenu ref="contextmenu">
          {this.graphContextmenu}
        </v-contextmenu>
      </div>
    );
  }
});