import { createApp } from 'vue'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import FormCreate from '@form-create/element-ui'
//@ts-ignore
import FcDesigner from '@form-create/designer'
import './style.css'
import App from './App.vue'

// 给FormCreate设置全局配置


createApp(App)
    .use(elementPlus)
    .use(FormCreate)
    .use(FcDesigner)
    .mount('#app')
