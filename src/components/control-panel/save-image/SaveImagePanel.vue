<template>
  <div class="save-image-panel--outer flex-1">
    <custom-image-name></custom-image-name>
    <download-button></download-button>
  </div>
</template>

<script>
import CustomImageName from './CustomImageName';
import DownloadButton from './DownloadButton';

export default {
  components: {
    'custom-image-name': CustomImageName,
    'download-button': DownloadButton
  }
}
</script>

<style>
.save-image-panel--outer {
  min-height: 8rem;
  border-top: 3px solid var(--navbarBlack);
}
</style>

