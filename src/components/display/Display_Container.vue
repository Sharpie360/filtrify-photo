<template>
  <div 
    ref="display" 
    class="display-container--outer flex-5 flexbox flex-center">
    <display-canvas></display-canvas>
  </div>
</template>

<script>
import Display_GradientOverlay from './Display_GradientOverlay';
import Display_Image from './Display_Image';
import Display_Canvas from './Display_Canvas';

export default {
  name: 'display-container',
  components: {
    'gradient-overlay': Display_GradientOverlay,
    'display-image': Display_Image,
    'display-canvas': Display_Canvas,
  },
  mounted() {
    const containerRef = this.$refs.display;
  }
}
</script>

<style scoped>
.display-container--outer {
  background-color: var(--offWhite);
}
</style>
