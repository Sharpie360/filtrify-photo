<template>
  <img 
    v-if="imageSrc" 
    :src="imageSrc"
    class="display-image">
  <h4 v-else>please load an image</h4>

</template>

<script>
import eventBus from '../../eventBus.js';

export default {
  data () {
    return {
      imageSrc: ''
    }
  },
  mounted() {
    eventBus.$on('setImageSource', imageSrc => {
      this.imageSrc = imageSrc;
    })
  }
}
</script>

<style>
.display-image {
  max-width: 90%;
  max-height: 96%;
}
</style>
