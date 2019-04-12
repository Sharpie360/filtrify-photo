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
    <div class="image-dimensions--outer flexbox-space-between flex-center">
      <span class="image-dimensions">
        Width: {{ imageSize.width }}px
      </span>
      <span class="image-dimensions">
        Height: {{ imageSize.height }}px
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const corsProxy = 'https://fp-backend.now.sh/';

export default {
  computed: {
    imageSize() {
      return this.$store.getters.getImage;
    }
  },
  methods: {
    ...mapActions(['setImageSource_STORE', 'setImageSize_STORE']),
    getImageSize($event) { 
      const loadedImage = document.createElement('img');
      loadedImage.onload = () => {
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
