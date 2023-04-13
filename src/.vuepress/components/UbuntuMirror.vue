<script setup lang="ts">
type SoftwareItem = {
  name: string
  software: string[]
  src: boolean
}

type MirrorItem = {
  provider: string
  version: string
  url: string
  scheme: string[],
  last_sync: string | null
  status: string
  support_all: boolean
  list: SoftwareItem[] | null
}

type ProviderItem = {
  name: string
  title: string
  url: string
  country: string
  priority: number
  remark: string
};
</script>

<template></template>

<style lang="scss" scoped></style>
