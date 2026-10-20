import '@fontsource-variable/instrument-sans/wdth.css'
import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { contentByLocale } from './content'
import { resolveLocale } from './content/locale'

const content = contentByLocale[resolveLocale(document.documentElement.lang)]

createApp(App, { content }).mount('#app')
