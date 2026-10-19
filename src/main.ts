import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { resolveLocale } from './content/locale'

const locale = resolveLocale(document.documentElement.lang)

createApp(App, { locale }).mount('#app')
