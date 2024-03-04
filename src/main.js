import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes';
import SvgIcon from "@jamescoyle/vue-icon"
import { i18n } from './locale/i18n';
import vueClickOutsideElement from 'vue-click-outside-element'



import Flicking from "../node_modules/@egjs/vue3-flicking/dist/flicking.esm";
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";

const app = createApp(App)
app.use(vueClickOutsideElement);
app.use(router);
app.use(i18n);
app.component("Flicking", Flicking);
app.component("svg-icon",SvgIcon);
app.mount('#app');