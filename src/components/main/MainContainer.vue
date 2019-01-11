<template>
  <div class="main--container flex-1 flexbox">
    <mc--control-panel></mc--control-panel>
    <mc--display-container></mc--display-container>
  </div>
</template>

<script>
import ControlPanel from '../control-panel/ControlPanel';
import Display_Container from '../display/Display_Container';

export default {
  components: {
    'mc--control-panel': ControlPanel,
    'mc--display-container': Display_Container,
  }
}
</script>

<style>

</style>
