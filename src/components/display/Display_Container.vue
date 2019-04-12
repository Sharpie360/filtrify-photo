<template>
  <div class="display-container--outer flex-5 flexbox flex-center">
    <display-image></display-image>
  </div>
</template>

<script>
import Display_Image from './Display_Image';

export default {
  components: {
    'display-image': Display_Image,
  },
  computed: {
    filters() {
      return this.$store.getters.getFilters
        .map((filter, index) => {
          return {
            name: filter.name,
            currentValue: filter.current,
            suffix: filter.suffix,
          }
        })
    },
  },
}
</script>

<style scoped>
.display-container--outer {
  background-color: var(--offWhite);
}
</style>
