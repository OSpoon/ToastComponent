import { ComponentPublicInstance, createApp } from 'vue';
import Toast from './index.vue';

type ToastComponentInstance = ComponentPublicInstance & {
  visible: boolean
};

const createToast = (options:
  { message: string, duration?: number }
) => {
  const app = createApp(Toast, {
    message: options.message,
    duration: options.duration,
  });

  const instance = app.mount(document.createElement('div'));
  (instance as ToastComponentInstance).visible = true;

  document.body.appendChild(instance.$el);
}

export const ToastPlugin = {
  install(app: any) {
    app.config.globalProperties.$toast = {
      show: (message: string, duration?: number) => createToast({ message, duration }),
    }
  }
}