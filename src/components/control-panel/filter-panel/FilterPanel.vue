<template>
  <div class="filter-panel flex-6 flexbox flexdir-col">
    <h2 class="filter-panel--title">Filters</h2>

    <div class="filter-panel--input-group-wrapper flex-1 flexbox flexdir-col">
      <filter-input 
        v-for="(filter, index) in filters" :key="index"
        :filter="filter"
        class="flex-1">
      </filter-input>

    </div>

  </div>
</template>

<script>
import FilterInput from './FilterInput';

export default {
  data () {
    return {
      filters: [
        {
          name: 'brightness',
          min: 50,
          max: 150,
          current: 100,
          suffix: '%',
        },
        {
          name: 'contrast',
          min: 0,
          max: 250,
          current: 100,
          suffix: '%',
        },
        {
          name: 'greyscale',
          min: 0,
          max: 100,
          current: 0,
          suffix: '%',
        },
        {
          name: 'hue-rotate',
          min: 0,
          max: 360,
          current: 0,
          suffix: 'deg',
        },
        {
          name: 'invert',
          min: 0,
          max: 100,
          current: 0,
          suffix: '%',
        },
        {
          name: 'saturate',
          min: 0,
          max: 250,
          current: 100,
          suffix: '%',
        },
        {
          name: 'sepia',
          min: 0,
          max: 100,
          current: 0,
          suffix: '%',
        },

      ]
    }
  },
  components: {
    'filter-input': FilterInput
  }
}
</script>

<style scoped>
.filter-panel {
  padding: .5rem 1rem;
  border-top: 3px solid var(--navbarBlack);
}
.filter-panel--title {
  font-weight: 500;
  font-size: 170%;
  margin-bottom: 1rem;
}
</style>
