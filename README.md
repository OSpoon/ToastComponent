# 94Toast

## 安装

```bash
npm i 94-toast
```

## 导入

```bash
// main.ts

import '94-toast/style.css'
import { ToastPlugin } from '94-toast';

const app = createApp(App);
app.use(ToastPlugin);
app.mount('#app');
```

## 使用

```typescript
<script lang="ts">
export default {
  name: "App",
  methods: {
    toast() {
      this.$toast.show('Hello Vuejs')
    }
  }
}
</script>
```

```typescript
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const global = getCurrentInstance()?.appContext.config.globalProperties;

const toast = () => {
  global?.$toast.show('Hello Vuejs')
}
</script>
```

```typescript
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
export default defineComponent({
  name: "App",
  setup() {

   const global = getCurrentInstance()?.appContext.config.globalProperties;

    const toast = () => {
      global?.$toast.show('Hello Vuejs')
    }

    return {
      toast,
    }
  }
})
</script>
```