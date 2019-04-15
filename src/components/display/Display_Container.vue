<template>
  <div class="display-container--outer flex-5 flexbox flex-center">
    <display-image></display-image>
  </div>
</template>

<script>
import DisplayImage from './Display_Image.vue';

export default {
  components: {
    'display-image': DisplayImage,
  },
  computed: {
    filters() {
      return this.$store.getters.getFilters
        .map(filter => ({
          name: filter.name,
          currentValue: filter.current,
          suffix: filter.suffix,
        }));
    },
  },
};
</script>

<style scoped>
.display-container--outer {
  background-color: var(--offWhite);
}
</style>
