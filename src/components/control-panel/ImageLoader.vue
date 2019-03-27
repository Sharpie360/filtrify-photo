<template>
  <div class="image-loader--outer flex-1 flexbox flexdir-col">
    <label 
      class="image-loader--label flex-1"
      for="image-loader--input"
      >Load Image
    </label>

    <div class="image-loader--input-wrapper flex-1">
      <input 
        @input="getImageSize($event)"
        type="text" 
        class="image-loader--input"
        id="image-loader--input"
      >
    </div>
    
  </div>
</template>

<script>
import eventBus from '../../eventBus.js';
import { mapActions } from 'vuex';
const corsProxy = 'https://filtrify-photo-backend-git-fp-01-error-handling.rabbitwerksjs.now.sh/';
export default {
  methods: {
    ...mapActions(['setImageSource_STORE', 'setImageSize_STORE']),
    getImageSize($event) {
      const loadedImage = document.createElement('img');
      loadedImage.onload = () => {
        // adding the proxy onload
        this.setImageSource_STORE(loadedImage.src);
        const payload = {
          width: loadedImage.width,
          height: loadedImage.height
        };
        this.setImageSize_STORE(payload);
      }
      loadedImage.src = `${corsProxy}${$event.target.value}`;
    }
  }
}
</script>

<style scoped>
.image-loader--outer {
  padding: .5rem 1rem;
  min-height: 7rem;
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
