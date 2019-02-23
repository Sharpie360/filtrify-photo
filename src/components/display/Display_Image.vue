<template>
  <img 
    v-if="imageSource" 
    :src="imageSource"
    :style="filters"
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
    filters() {
      const filters = this.$store.getters.getFilters;
      let filterString = '';
      filters.forEach((filter) => {
        if (filter.name === 'hue-rotate') {
          filterString += `${filter.name}(${filter.current}deg) `;
        }
        else {
          filterString += `${filter.name}(${filter.current / 100}) `;
        }
      });
      filterString = filterString.trim();
      console.log(`Current Filter Set: ${filterString}`);
      return { filter: filterString };
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
      // Original Image Dimensions - Probably better for the canvas
      // let img = new Image();

      // img.onload = function(){
      //   const height = img.height;
      //   const width = img.width;
      //   console.log(`Original Image Dimensions: ${height}x${width}`);
      // }

      // img.src = this.imageSource;
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

  /* filter: 
    brightness(var(--brightness))
    contrast(var(--contrast))
    grayscale(var(--greyscale))
    hue-rotate(var(--hue-rotate))
    invert(var(--invert))
    saturate(var(--saturate))
    sepia(var(--sepia)); */
}
</style>
