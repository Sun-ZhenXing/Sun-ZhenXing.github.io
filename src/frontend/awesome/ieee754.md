---
title: IEEE 754 浮点数交互式演示
date: 2020-12-10
category:
  - 前端
  - Awesome
tag:
  - 前端
  - IEEE754
---

IEEE 754 浮点数的交互式演示。

<!-- more -->

# IEEE 754 浮点数交互式演示

<div class="my-input">
  <label for="input-text">输入值</label>
  <input type="text" id="input-text" autocomplete="off"
    style="font-family: var(--font-family-code);font-size: 1rem;"
    @input="text_changed" v-model="text" placeholder="输入浮点数">

  <label for="input-bin">二进制表示</label>
  <input type="text" id="input-bin" autocomplete="off" readonly
    style="font-family: var(--font-family-code);font-size: 1rem;"
    v-model="bin" placeholder="二进制">

  <label for="input-hex">十六进制表示</label>
  <input type="text" id="input-hex" autocomplete="off" readonly
    style="font-family: var(--font-family-code);font-size: 1rem;"
    v-model="hex" placeholder="十六进制">

  <label for="input-real">原始值</label>
  <input type="text" id="input-real" autocomplete="off" readonly
    style="font-family: var(--font-family-code);font-size: 1rem;"
    v-model="real" placeholder="原始值">
</div>

*@TODO* 需要输入二进制和十六进制，并友好显示二进制表示。

## 原理

使用 ES6 新特性 `ArrayBuffer` 和 `DataView` 来读取和设置二进制数组：

```ts
const float32_to_uint32 = (f: number): number => {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setFloat32(0, f, true);
  return view.getUint32(0, true);
}
```

点击在 GitHub 上编辑此页来查看源代码。

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const bin = ref('')
const hex = ref('')
const real = ref(0)

const float32_to_uint32 = (f: number): number => {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setFloat32(0, f, true);
  return view.getUint32(0, true);
}

const uint32_to_float32 = (i: number): number => {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setUint32(0, i, true);
  return view.getFloat32(0, true);
}

const uint_to_hex = (i: number, bit_length: number = 32): string => {
  const str = i.toString(16);
  return '0'.repeat(bit_length / 4 - str.length) + str;
}

const uint_to_bin = (i: number, bit_length: number = 32): string => {
  const str = i.toString(2);
  return '0'.repeat(bit_length - str.length) + str;
}

const hex_to_uint = (s: string, bit_length: number = 32): number => {
  return parseInt(s, 16) & (2 ** bit_length - 1);
}

const bin_to_uint = (s: string, bit_length: number = 32): number => {
  return parseInt(s, 2) & (2 ** bit_length - 1);
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
  real.value = f
}
</script>
