/** sa-form entry */

import { defineComponent, PropType } from 'vue';
import { DrawerType } from './drawer';

import { LAYOUTS } from './config';

import SaFormHeader from './layout/header';
import SaFormSidebar from './layout/sidebar';

import { ElScrollbar } from 'element-plus';

export default defineComponent({
  props: {
    type: {
      required: true,
      type: String as PropType<DrawerType>
    },
    id: {
      required: true,
      type: String
    }
  },
  setup(props, ctx) {
    // TODO: return dynamic sa-form component

    const layout = LAYOUTS[props.type]();

    return () => (
      <section class="flex flex-col">
        <h1 class="font-bold text-lg py-4">Sa Form</h1>

        <header>
          <ElScrollbar>
            <SaFormHeader options={layout.header} drawer={layout.drawer} class="bg-slate-500" />
          </ElScrollbar>
        </header>

        <main class="mt-1 flex flex-grow">
          <aside>
            <SaFormSidebar options={layout.side} drawer={layout.drawer} class="bg-slate-500 h-full" />
          </aside>

          <main class="flex-grow justify-center bg-slate-500 mx-1">workspace</main>

          <aside class="w-48 bg-slate-500">
            properties controller
          </aside>
        </main>
      </section>
    );
  }
});