<template>
  <canvas
    v-show="imageSource"
    ref="canvas"
    class="display-image"
  ></canvas>
</template>

<script>
import { mapActions } from 'vuex';

// https://thehorse.com/wp-content/uploads/2017/09/paint-horse-running-in-field.jpg

export default {
  data() {
    return {
      imageTag: null,
    };
  },
  computed: {
    imageSource() {
      return this.$store.getters.getImageSource;
    },
    filters() {
      const filters = this.$store.getters.getFilterData.filters;
      let filterString = '';
      filters.forEach((filter) => {
        const { name, current, suffix } = filter;
        filterString += `${name}(${current}${suffix}) `;
      });
      filterString = filterString.trim();
      this.setFilterString_STORE(filterString);
      return filterString;
    },
  },
  watch: {
    imageSource() {
      const imageToDownload = new Image();
      imageToDownload.crossOrigin = 'Anonymous';
      imageToDownload.onload = () => {
        this.drawImage(imageToDownload);
        this.setImage(imageToDownload);
      };
      imageToDownload.src = this.imageSource;
    },
    filters() {
      this.drawImage(this.imageTag);
    },
  },
  methods: {
    ...mapActions(['setFilterString_STORE']),
    setImage(image) {
      this.imageTag = image;
    },
    drawImage(image) {
      const { canvas } = this.$refs;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx.filter = this.filters;

      ctx.drawImage(
        image,
        0,
        0,
      );
    },
  },
};
</script>

<style scoped>
.display-image {
  max-width: 96%;
  max-height: 90%;
}
</style>
