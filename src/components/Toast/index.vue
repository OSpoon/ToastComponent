<template>
  <transition name="toast">
    <div class="toast" v-if="visible">
      <div class="toast-content">{{ message }}</div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  setup(props) {
    const visible = ref(false)
    
    watch(visible, (value) => {
      if (value) {
        setTimeout(() => {
          visible.value = false
        }, props.duration)
      }
    })
    
    return {
      visible
    }
  }
})
</script>

<style>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  z-index: 9999;
}

.toast-content {
  display: inline-block;
  margin-right: 10px;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.5s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
</style>