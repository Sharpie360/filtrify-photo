<template>
  <div class="control-panel flex-1 flexbox flexdir-col">
    <image-loader></image-loader>
    <filter-panel></filter-panel>
    <save-image-panel></save-image-panel>
  </div>
</template>

<script>
import ImageLoader from './ImageLoader';
import FilterPanel from './filter-panel/FilterPanel';
import SaveImagePanel from './save-image/SaveImagePanel';

export default {
  components: {
    'image-loader': ImageLoader,
    'filter-panel': FilterPanel,
    'save-image-panel': SaveImagePanel
  }
}
</script>

<style scoped>
.control-panel {
  border-right: 3px solid var(--navbarBlack);
  background-color: var(--lightGreen);
}
</style>
