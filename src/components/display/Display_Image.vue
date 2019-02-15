<template>
  <img 
    v-if="imageSource" 
    :src="imageSource"
    class="display-image">
  <h4 v-else>please load an image</h4>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      width: 0,
      height: 0,
    }
  },
  computed: {
    imageSource () {
      return this.$store.getters.getImageSource;
    },
  },
  watch: {
    imageSource: function(val) {
      setTimeout(() => {
        this.getImageSize();
      }, 500);
    }
  },
  methods: {
    ...mapActions(['setImageSize_STORE']),
    getImageSize() {
      const image = document.querySelector('.display-image');
      const imageCompedStyles = window.getComputedStyle(image);
      console.log(imageCompedStyles.width, imageCompedStyles.height)
      const payload = {
        width: imageCompedStyles.width,
        height: imageCompedStyles.height,
      };
      this.setImageSize_STORE(payload);
    }
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
