<template>
  <div class="main--container flex-1 flexbox">
    <mc--control-panel></mc--control-panel>
    <mc--display-container></mc--display-container>
  </div>
</template>

<script>
import ControlPanel from '../control-panel/ControlPanel.vue';
import DisplayContainer from '../display/Display_Container.vue';

export default {
  components: {
    'mc--control-panel': ControlPanel,
    'mc--display-container': DisplayContainer,
  },
};
</script>

<style>

</style>
