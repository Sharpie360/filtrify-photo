<template>
  <div class="filter-panel flex-6 flexbox flexdir-col">
    <div class="filter-panel--header-group flexbox">
      <h2 class="filter-panel--title">Filters</h2>
      <span class="filter-reset-icon--outer">
        <!-- <img 
          @click="resetFilters_STORE"
          class="filter-reset-icon--svg" 
          src="../../../assets/svg/noun_reset_415758.svg" 
          alt="reset by Hali Gali Harun from the Noun Project"
        > -->
        <button @click="requestFilters" class="load-filters">
          Load
        </button>
      </span>
    </div>

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
import { mapActions } from 'vuex';

import FilterInput from './FilterInput';

export default {
  components: {
    'filter-input': FilterInput
  },
  computed: {
    filters () {
      return this.$store.getters.getFilterData.filters;
    }
  },
  methods: {
    ...mapActions(['resetFilters_STORE', 'loadRemoteFilterData_STORE']),
    requestFilters() {
      fetch('http://localhost:1337/api/filters/1', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(remoteFilterData => {
          console.log(remoteFilterData);
          this.loadRemoteFilterData_STORE(remoteFilterData);
        });
    }
  }
}
</script>

<style scoped>
.filter-panel {
  padding: .5rem .5rem .5rem 1rem;
  border-top: 3px solid var(--navbarBlack);
}
.filter-panel--header-group {
  justify-content: space-between;
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
.filter-reset-icon--outer {
  height: 2.5rem;
  margin-top: .25rem;
}
.filter-reset-icon--svg {
  width: 2rem;
  height: 2.5rem;
}
</style>
