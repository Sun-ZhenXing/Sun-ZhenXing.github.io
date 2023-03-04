<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const bin = ref('')
const hex = ref('')
const real = ref(0)

const float32_to_uint32 = (f: number): number => {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setFloat32(0, f, true)
  return view.getUint32(0, true)
}

const uint32_to_float32 = (i: number): number => {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setUint32(0, i, true)
  return view.getFloat32(0, true)
}

const uint_to_hex = (i: number, bit_length: number = 32): string => {
  const str = i.toString(16)
  return '0'.repeat(bit_length / 4 - str.length) + str
}

const uint_to_bin = (i: number, bit_length: number = 32): string => {
  const str = i.toString(2)
  return '0'.repeat(bit_length - str.length) + str
}

const hex_to_uint = (s: string, bit_length: number = 32): number => {
  return parseInt(s, 16) & (2 ** bit_length - 1)
}

const bin_to_uint = (s: string, bit_length: number = 32): number => {
  return parseInt(s, 2) & (2 ** bit_length - 1)
}

const text_changed = () => {
  const f = parseFloat(text.value)
  if (isNaN(f)) {
    bin.value = ''
    hex.value = ''
    real.value = 0
    return
  }
  const u = float32_to_uint32(f)
  bin.value = uint_to_bin(u)
  hex.value = uint_to_hex(u)
  real.value = uint32_to_float32(u)
}
</script>

<template>
  <div class="ieee-input-area">
    <label for="input-text">输入值</label>
    <input type="text" id="input-text" autocomplete="off" style="font-family: var(--font-family-code);font-size: 1rem;"
      @input="text_changed" v-model="text" placeholder="输入浮点数">

    <label for="input-bin">二进制表示</label>
    <input type="text" id="input-bin" autocomplete="off" readonly
      style="font-family: var(--font-family-code);font-size: 1rem;" v-model="bin" placeholder="二进制">

    <label for="input-hex">十六进制表示</label>
    <input type="text" id="input-hex" autocomplete="off" readonly
      style="font-family: var(--font-family-code);font-size: 1rem;" v-model="hex" placeholder="十六进制">

    <label for="input-real">原始值</label>
    <input type="text" id="input-real" autocomplete="off" readonly
      style="font-family: var(--font-family-code);font-size: 1rem;" v-model="real" placeholder="原始值">
  </div>
</template>

<style lang="scss" scoped>
.ieee-input-area {
  label {
    display: block;
    line-height: 1.2rem;
    padding: .3rem 0;
  }

  input {
    appearance: none;
    border: .05rem solid var(--note-border-color);
    border-radius: .1rem;
    color: var(--text-color);
    display: block;
    font-size: .8rem;
    height: 1.8rem;
    line-height: 1.2rem;
    padding: .25rem .4rem;
    outline: 0;
    transition: border .2s, box-shadow .2s, color .2s;
    width: 100%;

    &:focus {
      border-color: var(--theme-color);
      box-shadow: 0 0 0 0.1rem rgb(87 85 217 / 20%);
    }
  }
}
</style>