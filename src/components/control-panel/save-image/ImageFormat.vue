<template>
  <div class="image-format--outer">
    <select 
      v-model="selectFormat_STORE"
      class="image-format--input">
       <option value="image/png">PNG</option>
       <option value="image/jpeg">JPG</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    selectFormat_STORE: {
      get() {
        return this.$store.getters.getSelectedFormat;
      },
      set(value) {
        this.$store.commit('setImageFormat_MUTA', value);
      }
    }
  }
}
</script>

<style scoped>
.image-format--input {
  margin: .5rem 0;
  padding: 0 1rem;
  height: 2rem;
  border-radius: 3px;
  border: 2px solid var(--navbarBlack);
  font-size: .85rem;
}

</style>
