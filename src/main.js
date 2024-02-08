import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes';
import SvgIcon from "@jamescoyle/vue-icon"
import { i18n } from './locale/i18n';


const app = createApp(App)

app.use(router);
app.use(i18n);
app.component("svg-icon",SvgIcon);
app.mount('#app');