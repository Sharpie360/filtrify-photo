<template>
  <div class="display-container--outer flex-5 flexbox flex-center">
    <display-image></display-image>
    <display-canvas></display-canvas>
  </div>
</template>

<script>
import Display_Image from './Display_Image';
import Display_Canvas from './Display_Canvas';

export default {
  components: {
    'display-image': Display_Image,
    'display-canvas': Display_Canvas
  },
}
</script>

<style scoped>
.display-container--outer {
  background-color: var(--offWhite);
}
</style>
