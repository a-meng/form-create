import { createApp } from 'vue'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import FormCreate from '@form-create/element-ui'
import './style.css'
import App from './App.vue'


createApp(App)
    .use(elementPlus)
    .use(FormCreate)
    .mount('#app')
