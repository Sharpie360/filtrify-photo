<template>
  <div class="save-image-panel--outer flex-1">
    <custom-image-name></custom-image-name>
    <div class="image-options--outer flexbox">
      <image-format></image-format>
      <download-button></download-button>
    </div>
  </div>
</template>

<script>
import CustomImageName from './CustomImageName.vue';
import ImageFormat from './ImageFormat.vue';
import DownloadButton from './DownloadButton.vue';

export default {
  components: {
    'custom-image-name': CustomImageName,
    'image-format': ImageFormat,
    'download-button': DownloadButton,
  },
};
</script>

<style>
.save-image-panel--outer {
  min-height: 8rem;
  border-top: 3px solid var(--navbarBlack);
}
.image-options--outer {
  padding: 0 1rem;
}
</style>
