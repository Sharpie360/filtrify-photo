<template>
  <div class="control-panel flex-1 flexbox flexdir-col">
    <image-loader></image-loader>
    <filter-panel></filter-panel>
  </div>
</template>

<script>
import ImageLoader from './ImageLoader';
import FilterPanel from './FilterPanel';

export default {
  components: {
    'image-loader': ImageLoader,
    'filter-panel': FilterPanel,
  }
}
</script>

<style>
.control-panel {
  border-right: 3px solid #f7f7f7;
}
</style>
