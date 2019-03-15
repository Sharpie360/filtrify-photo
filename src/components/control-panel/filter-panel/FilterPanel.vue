<template>
  <div class="filter-panel flex-6 flexbox flexdir-col">
    <h2 class="filter-panel--title">Filters</h2>

    <div class="filter-panel--input-group-wrapper flex-1 flexbox flexdir-col">
      <filter-input 
        v-for="(filter, index) in filters" :key="index"
        :filter="filter"
        :index="index"
        class="flex-1">
      </filter-input>

    </div>

  </div>
</template>

<script>
import FilterInput from './FilterInput';

export default {
  components: {
    'filter-input': FilterInput
  },
  computed: {
    filters () {
      return this.$store.getters.getFilters;
    }
  }
}
</script>

<style scoped>
.filter-panel {
  padding: .5rem .5rem .5rem 1rem;
  border-top: 3px solid var(--navbarBlack);
}
.filter-panel--title {
  font-weight: 500;
  font-size: 170%;
  margin-bottom: 1rem;
}
.filter-panel--input-group-wrapper {
  overflow-y: scroll;
  padding-right: 1rem;
}
</style>
