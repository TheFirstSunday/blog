import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import {
  ElButton,
  ElSelect,
  ElBacktop,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElImage,
  ElTooltip,
  ElTag,
  ElLink,
  ElIcon
} from 'element-plus'
import App from './App.vue'
import './index.less'

const app = createApp(App)
app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)
app.component(ElBacktop.name, ElBacktop)
app.component(ElMenu.name, ElMenu)
app.component(ElSubmenu.name, ElSubmenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElImage.name, ElImage)
app.component(ElTooltip.name, ElTooltip)
app.component(ElTag.name, ElTag)
app.component(ElLink.name, ElLink)
app.component(ElIcon.name, ElIcon)

/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */

app.use(store, key)
app.use(router)
app.mount('#app')
