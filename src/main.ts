import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import { ElButton, ElSelect, ElBacktop } from 'element-plus'
import App from './App.vue'
import './index.less'

const app = createApp(App)
app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)
app.component(ElBacktop.name, ElBacktop)

/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */

app.use(store, key)
app.use(router)
app.mount('#app')
