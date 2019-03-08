<template>

<div class="download-button--outer flexbox flex-1 flex-justify-end">
  <button
    class="download-button--inner pointer"
    >Download
  </button>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.download-button--outer {
  padding: .5rem 1rem;
}
.download-button--inner {
  width: 50%;
  padding: .4rem 0;
  background-color: var(--accentColor);
  border: 2px solid var(--navbarBlack);
  border-radius: 3px;
  font-size: .85rem;
}
.download-button--inner:hover {
  background-color: var(--accentColorHover);
}
.download-button--inner:active {
  background-color: var(--accentColorActive);
}
</style>
