<template>
  <div id="app" class="flexbox flexdir-col">
    <main--navbar></main--navbar>
    <main--container></main--container>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue';
import MainContainer from './components/main/MainContainer.vue';

export default {
  name: 'app',
  components: {
    'main--navbar': Navbar,
    'main--container': MainContainer,
  },
};
</script>

<style>
@import './assets/css/flexbox-util.css';
@import './assets/css/main.css';

#app {
  height: 100%;
}
</style>
