<template>
  <div>
    <img 
      v-show="imageSource"
      ref="img"
      crossOrigin="Anonymous"
      :style="filters"
      class="display-image">
    <h4 v-show="!imageSource">please load an image</h4>
    <button class="btn btn-primary" @click="download">Download</button>
  </div>

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
      this.$refs.img.src = this.imageSource;
      setTimeout(() => {
        this.getImageSize();
      }, 500);
    }
  },
  methods: {
    ...mapActions(['setImageSize_STORE']),
    getImageSize() {
      let img = new Image();
      let vm = this;
      img.onload = function(){
        vm.height = img.height;
        vm.width = img.width;
        console.log(`Original Image Dimensions: ${vm.height}x${vm.width}`);
      }

      img.src = this.imageSource;
      const image = document.querySelector('.display-image');
      const imageCompedStyles = window.getComputedStyle(image);
      console.log(imageCompedStyles.width, imageCompedStyles.height)
      const payload = {
        width: imageCompedStyles.width,
        height: imageCompedStyles.height,
      };
      this.setImageSize_STORE(payload);
    },
    download() {
      const canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext('2d');
      ctx.filter = this.filters.filter;
      ctx.drawImage(this.$refs.img, 0, 0, this.width, this.height);
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
      canvas.toBlob(blob => {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'filtered_image.png')
        link.click();
        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 3000);
      });
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
