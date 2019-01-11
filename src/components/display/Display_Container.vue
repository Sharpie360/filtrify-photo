<template>
  <div class="display-container--outer flex-5 flexbox flex-center">
    <display-image></display-image>
  </div>
</template>

<script>
import Display_Image from './Display_Image';
export default {
  components: {
    'display-image': Display_Image
  }

}
</script>

<style>
.display-container--outer {
  background-color: var(--offWhite);
}
</style>
