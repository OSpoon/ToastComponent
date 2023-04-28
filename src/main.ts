import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '94-toast/style.css'
import { ToastPlugin } from '94-toast';

createApp(App)
  .use(ToastPlugin)
  .mount('#app')
