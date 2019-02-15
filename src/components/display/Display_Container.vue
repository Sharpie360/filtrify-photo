<template>
  <div class="display-container--outer flex-5 flexbox flex-center">
    <display-image></display-image>
    <display-canvas></display-canvas>
  </div>
</template>

<script>
import Display_Image from './Display_Image';
import Display_Canvas from './Display_Canvas';

export default {
  components: {
    'display-image': Display_Image,
    'display-canvas': Display_Canvas
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
  watch: {
    filters: {
      deep: true,
      handler: function(newVal, oldVal) {
        let activeFilter = newVal.filter((filter, index) => filter.currentValue !== oldVal[index].currentValue
        );
        this.setFilterVariable(activeFilter[0]);
      }
    }
  },
  methods: {
    setFilterVariable(activeFilter) {
      console.log(activeFilter)
      document.documentElement.style.setProperty(`--${activeFilter.name}`, `${activeFilter.currentValue}${activeFilter.suffix}`)
    }
  }

}
</script>

<style scoped>
.display-container--outer {
  background-color: var(--offWhite);
}
</style>
