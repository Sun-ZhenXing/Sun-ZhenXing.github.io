<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  id: string
}>()

const expr = ref('x')
const error = ref('')
const exprInputId = computed(() => `${props.id}-expr`)

const updateExpr = () => {
  const width = 600
  const height = 400

  const exprString = expr.value;
  setTimeout(() => {
    if (!exprString) {
      error.value = '请输入函数表达式'
      return
    }
    try {
      (window as any).functionPlot && (window as any).functionPlot({
        target: `#${props.id}`,
        width,
        height,
        grid: true,
        data: [{
          fn: exprString,
        }]
      })
      error.value = ''
    } catch (e) {
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
  <component is="script" src="https://unpkg.com/function-plot/dist/function-plot.js"></component>
  <label :for="exprInputId">函数表达式</label>
  <input type="text" :id="exprInputId" autocomplete="off" v-model="expr" placeholder="如 x^2">
  <div class="plot-area" :id="props.id" v-if="expr"></div>
  <div class="plot-error" v-show="error">{{ error }}</div>
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
