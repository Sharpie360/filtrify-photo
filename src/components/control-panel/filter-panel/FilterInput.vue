<template>
  <div class="filter-input--outer">
    <filter-info :filter="filter"></filter-info>
    <input
      v-model="filter.current"
      @mousemove="updateFilterValue(filter)"
      @change="updateFilterValue(filter)"
      :id="filter.name"
      :min="filter.min"
      :max="filter.max"
      class="filter-input--input"
      type="range"
      >
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FilterInfo from './FilterInfo.vue';

export default {
  props: ['filter', 'index'],
  components: {
    'filter-info': FilterInfo,
  },
  methods: {
    ...mapActions(['setFilterValue_STORE']),
    updateFilterValue(filter) {
      const payload = {
        index: this.index,
        filterNewValue: filter.current,
      };
      this.setFilterValue_STORE(payload);
    },
  },
};
</script>

<style scoped>
.filter-input--input {
  width: 100%;
}
</style>
