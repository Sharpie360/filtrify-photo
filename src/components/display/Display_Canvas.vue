<template>
  <canvas 
    id="canvas"
    v-show="false"
    :width="image.width"
    :height="image.height">
  </canvas>
</template>

<script>
export default {
  computed: {
    image () {
      return this.$store.getters.getImage;
    },
    filters () {
      return this.$store.getters.getFilters;
    }
  },
  watch: {
    filters: {
      deep: true,
      handler() {
        this.loadImageToCanvas();
      }
    },
    image: function() {
      setTimeout(() => {
        this.loadImageToCanvas();
      }, 1000)
    }
  },
  methods: {
    loadImageToCanvas() {
      const filters = this.filters;
      let filterString = '';
      filters.forEach(filter => {
        filterString += `${filter.name}(${filter.current}${filter.suffix}) `
      });
      filterString = filterString.trim();

      const image = document.querySelector('.display-image');
      if (image instanceof HTMLImageElement) {
        const canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.filter = filterString;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
    }
  },
}
</script>

<style>
  canvas {
    border: 1px solid #000;
  }
</style>
