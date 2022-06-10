import { defineComponent } from 'vue'

import './index.scss'

export default defineComponent({
  name: 'SaHeader',
  setup() {

    return () => (
      <header class="nav-bar" >
        <a
          class="nav-bar-title"
          href="/sa-form/"
          aria-label="Sa Form, back to home`"
        >
          <span class="title">Sa Form</span>
        </a>

        <div class="flex-grow" />

        <div class="nav-icons">
          <div class="item">
            <a class="icon-button" href="https://github.com/soraLib/sa-form" target="_blank" rel="noopener" aria-label="View GitHub Repo">
              <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" width="1.2em" height="1.2em" data-v-3b0ebed8=""><path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"></path></svg>
            </a>
          </div>

          <div class="item">
            {/* TODO: */}
            {/* <dark-mode-switch /> */}
          </div>
        </div>
      </header>
    )
  }
})
