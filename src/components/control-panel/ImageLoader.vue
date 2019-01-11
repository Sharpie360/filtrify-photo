<template>
  <div class="image-loader--outer flex-1 flexbox flexdir-col">
    <label 
      class="image-loader--label flex-1"
      for="image-loader--input"
      >Load Image
    </label>

    <div class="image-loader--input-wrapper flex-1">
      <input 
        v-model="imageSrc"
        @input="setImageSource"
        type="text" 
        class="image-loader--input"
        id="image-loader--input"
      >
    </div>
    
  </div>
</template>

<script>
import eventBus from '../../eventBus.js';

export default {
  data () {
    return {
      imageSrc: ''
    }
  },
  methods: {
    setImageSource() {
      eventBus.$emit('setImageSource', this.imageSrc);
    }
  }
}
</script>

<style scoped>
.image-loader--outer {
  padding: .5rem 1rem;
}
.image-loader--label {
  font-size: 170%;
}
.image-loader--input {
  font-size: 1.1rem;
  padding: .25rem .5rem;
  border: 2px solid #212121;
  border-radius: 3px;
}
</style>
