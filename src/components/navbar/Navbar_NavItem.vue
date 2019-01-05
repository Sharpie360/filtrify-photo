<template>
  <div class="nav-item flexbox flex-center">
    <span class="nav-item--text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style>
.nav-item {
  width: 10rem;
  border-left: 1px solid #f7f7f7;
}
</style>
