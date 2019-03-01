<template>
  <img 
    v-show="imageSource" 
    :style="{ 'filter': filters }"
    crossorigin="Anonymous"
    ref="image"
    class="display-image">
  

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
    filters () {
      const filters = this.$store.getters.getFilters;
      let filterString = '';
      filters.forEach(filter => {
        // const { name, current, suffix } = filter;
        filterString += `${filter.name}(${filter.current}${filter.suffix}) `;
      })
      filterString = filterString.trim();
      console.log(filterString);
      return filterString;
    }
  },
  watch: {
    imageSource: function(val) {
      this.$refs.image.src = this.imageSource;
      console.log(this.$refs.image.src)
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
}
</style>
