<template>
  <div class="control-panel flex-1 flexbox flexdir-col">
    <image-loader></image-loader>
    <filter-panel></filter-panel>
  </div>
</template>

<script>
import ImageLoader from './ImageLoader';
import FilterPanel from './filter-panel/FilterPanel';

export default {
  components: {
    'image-loader': ImageLoader,
    'filter-panel': FilterPanel,
  }
}
</script>

<style scoped>
.control-panel {
  border-right: 3px solid var(--navbarBlack);
  background-color: var(--lightGreen);
}
</style>
