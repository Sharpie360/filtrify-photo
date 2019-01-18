<template>
  <img 
    v-if="imageSource" 
    :src="imageSource"
    class="display-image">
  <h4 v-else>please load an image</h4>

</template>

<script>
import eventBus from '../../eventBus.js';

export default {
  computed: {
    imageSource () {
      return this.$store.getters.getImage;
    }
  },
  mounted() {
    eventBus.$on('setImageSource', imageSrc => {
      this.imageSrc = imageSrc;
    })
  }
}
</script>

<style scoped>
.display-image {
  max-width: 90%;
  max-height: 96%;

  filter: 
    brightness(var(--brightness))
    contrast(var(--contrast))
    grayscale(var(--greyscale))
    hue-rotate(var(--hue-rotate))
    invert(var(--invert))
    saturate(var(--saturate))
    sepia(var(--sepia));
}
</style>
