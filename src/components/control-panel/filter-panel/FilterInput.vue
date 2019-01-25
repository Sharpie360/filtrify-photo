<template>
  <div class="filter-input--outer">
    <label :for="filter.name"
      >{{ filter.name }}
    </label>
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

export default {
  props: ['filter', 'index'],
  methods: {
    ...mapActions(['setFilterValue_STORE']),
    updateFilterValue(filter) {
      console.log(this.index)
      const payload = {
        index: this.index,
        filterNewValue: filter.current,
      };
      this.setFilterValue_STORE(payload);


      
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  font-size: 110%;
  margin-bottom: .4rem;
}

.filter-input--input {
  width: 100%;
}

</style>

