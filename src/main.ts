import '@fontsource-variable/instrument-sans/wdth.css'
import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { contentByLocale } from './content'
import { resolveLocale } from './content/locale'
import { sectionLinks } from './content/navigation'

const content = contentByLocale[resolveLocale(document.documentElement.lang)]
// Las anclas del otro idioma permiten que el cambio de idioma conserve la sección
const alternateSections = sectionLinks(contentByLocale[content.ui.alternateLanguage.lang])

createApp(App, { content, alternateSections }).mount('#app')
