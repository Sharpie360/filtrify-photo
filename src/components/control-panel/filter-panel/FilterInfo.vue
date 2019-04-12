<template>
  <div class="filter-info--outer flexbox-space-between">
    <label :for="filter.name"
      >{{ filter.name | capitalize }}
    </label>
    <span>
      {{ filter.current }}{{ filter.suffix }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['filter'],
  filters: {
    capitalize: function (value) {
      if (!value) return '';
      if (value.includes('-')) {
        const capitalized = value.split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        return capitalized;
      }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
}
</script>

<style scoped>
label {
  display: block;
  font-size: 110%;
  margin-bottom: .4rem;
}
</style>
