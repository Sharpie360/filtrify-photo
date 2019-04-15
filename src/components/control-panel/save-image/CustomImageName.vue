<template>
  <div class="custom-image-name--outer flexbox flexdir-col">
    <label
      class="custom-image-name--label flex-1"
      for="custom-image-name"
      >Custom Name
      </label>

    <div class="custom-image-name--input--outer">
      <input
        v-model="customImageName_STORE"
        type="text"
        class="custom-image-name--input--inner"
        id="custom-image-name"
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    customImageName_STORE: {
      get() {
        return this.$store.getters.getCustomName;
      },
      set(value) {
        this.$store.commit('setCustomImageName_MUTA', value);
      },
    },
  },
};
</script>

<style scoped>
.custom-image-name--outer {
  padding: .5rem 1rem;
}
.custom-image-name--label {
  font-size: 110%;
  margin-bottom: .5rem;
}
.custom-image-name--input--inner {
  font-size: 1.1rem;
  padding: .25rem .5rem;
  border: 2px solid #212121;
  border-radius: 3px;
}
</style>
