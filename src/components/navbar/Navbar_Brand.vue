<template>
  <div class="navbar-brand flex-1 flexbox flex-align-center">
    <h2 class="navbar-brand--text">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.navbar-brand {
  padding-left: 1rem;
}
.navbar-brand--text {
  letter-spacing: .5px;
}
</style>
