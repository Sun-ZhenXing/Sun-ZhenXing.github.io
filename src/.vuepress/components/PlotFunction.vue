<script setup lang="ts">
/* eslint-disable vue/require-component-is */
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  id: string
}>()

const expr = ref('x')
const error = ref('')
const exprInputId = computed(() => `${props.id}-expr`)

function updateExpr() {
  const width = 600
  const height = 400

  const exprString = expr.value
  setTimeout(() => {
    if (!exprString) {
      error.value = '请输入函数表达式'
      return
    }
    try {
      (window as any).functionPlot && (window as any).functionPlot({
        data: [{
          fn: exprString,
        }],
        grid: true,
        height,
        target: `#${props.id}`,
        width,
      })
      error.value = ''
    }
    catch (e) {
      error.value = e.message
    }
  }, 100)
}

onMounted(() => {
  setTimeout(() => {
    updateExpr()
  }, 1000)
})

watch(() => expr.value, () => {
  updateExpr()
})
</script>

<template>
  <component is="script" src="https://unpkg.com/function-plot/dist/function-plot.js" />
  <label :for="exprInputId">函数表达式</label>
  <input :id="exprInputId" v-model="expr" autocomplete="off" placeholder="如 x^2" type="text">
  <div v-if="expr" :id="props.id" class="plot-area" />
  <div v-show="error" class="plot-error">
    {{ error }}
  </div>
</template>

<style lang="scss" scoped>
@import './shared-style/input.scss';

input {
  font-family: $mono-font-family;
}

.plot-area {
  width: 600px;
  height: 400px;
}

.plot-error {
  color: var(--danger-border-color);
}
</style>
