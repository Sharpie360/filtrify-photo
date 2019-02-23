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

  methods: {
    loadImageToCanvas() {
      const filters = this.filters;
      let filterString = '';
      filters.forEach(filter => {
        filterString += `${filter.name}(${filter.current}${filter.suffix}) `
      });
      filterString = filterString.trim();
      // console.log(filterString)

      const image = document.querySelector('.display-image');
      if (image) {
        const canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.filter = filterString;
        console.log(image);
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
