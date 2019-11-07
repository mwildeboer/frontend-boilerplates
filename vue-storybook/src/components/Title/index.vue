<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.title {
  color: $black;
  font-size: 48px;
  margin: 0;
  padding: 0;
}
</style>