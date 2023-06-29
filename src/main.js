import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* pinia系 */
import { createPinia } from 'pinia'
import { createPersistedState } from "pinia-plugin-persistedstate";
 /* Element-plus系 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



const app = createApp(App)

// $httpプロパティを追加
app.config.globalProperties.$http = (url, opts) => fetch(url, opts);

const pinia = createPinia(); // 追加
pinia.use(createPersistedState()); // 追加

app.use(router) // vue-router
app.use(pinia) // pinia
app.use(ElementPlus)  // Element-plus
app.mount('#app')
