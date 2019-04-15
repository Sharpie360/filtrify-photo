<template>
  <img
    v-show="imageSource"
    :style="{ 'filter': filters }"
    crossorigin="Anonymous"
    ref="image"
    class="display-image"
  >
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    imageSource() {
      return this.$store.getters.getImageSource;
    },
    filters() {
      const filters = this.$store.getters.getFilters;
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
    // eslint-disable-next-line object-shorthand, func-names
    imageSource: function () {
      this.$refs.image.src = this.imageSource;
    },
  },
  methods: {
    ...mapActions(['setFilterString_STORE']),
  },
};
</script>

<style scoped>
.display-image {
  max-width: 90%;
  max-height: 96%;
}
</style>
