<script setup lang="ts">
interface SoftwareItem {
  name: string
  software: string[]
  src: boolean
}

export interface MirrorItem {
  last_sync: null | string
  list: SoftwareItem[] | null
  provider: string
  scheme: string[]
  status: string
  support_all: boolean
  url: string
  version: string
}

export interface ProviderItem {
  country: string
  name: string
  priority: number
  remark: string
  title: string
  url: string
}
</script>

<template>
  <h2>镜像</h2>
</template>

<style lang="scss" scoped></style>
