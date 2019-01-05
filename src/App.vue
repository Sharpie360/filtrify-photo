<template>
  <div id="app">
    <app--navbar></app--navbar>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';

export default {
  name: 'app',
  components: {
    'app--navbar': Navbar,

  }
};
</script>

<style>
@import './assets/css/flexbox-util.css';
@import './assets/css/main.css';


</style>
