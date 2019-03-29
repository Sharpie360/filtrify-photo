<template>

<div class="download-button--outer flexbox flex-1 flex-justify-end">
  <button
    @click="downloadImage"
    class="download-button--inner pointer"
    >Download
  </button>
</div>

</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.getters.getImage;
    }
  },
  methods: {
    downloadImage() {
      const imageToDownload = new Image(this.image.width, this.image.height);
      imageToDownload.crossOrigin = 'Anonymous';
      imageToDownload.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = this.image.width;
        canvas.height = this.image.height;
        const ctx = canvas.getContext('2d');
        ctx.filter = this.image.filterString;
        ctx.drawImage(imageToDownload, 0, 0, this.image.width, this.image.height);
        console.log(canvas)
        console.log(ctx)
        canvas.toBlob(blob => {
          console.log(blob)
          const link = document.createElement('a');
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', this.image.customImageName);
          link.click();
        }, this.image.selectedFormat)
      }
      imageToDownload.src = this.image.source;


    }
  }
}
</script>

<style scoped>
.download-button--outer {
  padding: .5rem 0;
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
