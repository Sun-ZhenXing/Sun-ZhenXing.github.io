<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const bin = ref('')
const hex = ref('')
const real = ref(0)

function float32_to_uint32(f: number): number {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setFloat32(0, f, true)
  return view.getUint32(0, true)
}

function uint32_to_float32(i: number): number {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setUint32(0, i, true)
  return view.getFloat32(0, true)
}

function uint_to_hex(i: number, bit_length: number = 32): string {
  const str = i.toString(16)
  return '0'.repeat(bit_length / 4 - str.length) + str
}

function uint_to_bin(i: number, bit_length: number = 32): string {
  const str = i.toString(2)
  return '0'.repeat(bit_length - str.length) + str
}

/*
const hex_to_uint = (s: string, bit_length: number = 32): number => {
  return parseInt(s, 16) & (2 ** bit_length - 1)
}

const bin_to_uint = (s: string, bit_length: number = 32): number => {
  return parseInt(s, 2) & (2 ** bit_length - 1)
}
*/

function text_changed() {
  const f = Number.parseFloat(text.value)
  if (Number.isNaN(f)) {
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
  <label for="input-text">输入值</label>
  <input
    id="input-text" v-model="text" autocomplete="off" placeholder="输入浮点数"
    style="font-family: var(--font-family-code);" type="text" @input="text_changed"
  >

  <label for="input-bin">二进制表示</label>
  <input
    id="input-bin" v-model="bin" autocomplete="off" placeholder="二进制" readonly
    style="font-family: var(--font-family-code);" type="text"
  >

  <label for="input-hex">十六进制表示</label>
  <input
    id="input-hex" v-model="hex" autocomplete="off" placeholder="十六进制" readonly
    style="font-family: var(--font-family-code);" type="text"
  >

  <label for="input-real">原始值</label>
  <input
    id="input-real" v-model="real" autocomplete="off" placeholder="原始值" readonly
    style="font-family: var(--font-family-code);" type="text"
  >
</template>

<style lang="scss" scoped>
@import './shared-style/input.scss';
</style>
