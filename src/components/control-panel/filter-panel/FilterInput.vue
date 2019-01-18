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
export default {
  props: ['filter'],
  methods: {
    updateFilterValue(filter) {
      console.log(`--${filter.name}`, `${filter.current}${filter.suffix}`)
      document.documentElement.style.setProperty(`--${filter.name}`, `${filter.current}${filter.suffix}`)
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

