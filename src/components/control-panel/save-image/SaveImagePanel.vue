<template>
  <div class="save-image-panel--outer flex-1">
    <custom-image-name></custom-image-name>
  </div>
</template>

<script>
import CustomImageName from './CustomImageName';

export default {
  components: {
    'custom-image-name': CustomImageName,
  }
}
</script>

<style>
.save-image-panel--outer {
  min-height: 8rem;
  border-top: 3px solid var(--navbarBlack);
}
</style>

