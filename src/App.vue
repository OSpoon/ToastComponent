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

<!-- <script setup lang="ts">
import { getCurrentInstance } from 'vue';
const global = getCurrentInstance()?.appContext.config.globalProperties;

const toast = () => {
  global?.$toast.show('Hello Vuejs')
}
</script> -->

<!-- <script lang="ts">
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
</script> -->

<template>
  <div>
    <button @click="toast">Toast一下</button>
    <p>点击↑↑↑按钮查看</p>
    <p>PS：README包含详细的Toast组件开发流程</p>
    <img style="width: 80%;" src="https://temp-files-20221205.oss-cn-hangzhou.aliyuncs.com/picgo/202304250904804.png" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
