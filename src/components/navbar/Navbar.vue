<template>
  <nav class="navbar--outer flexbox">
    <navbar--brand title="Filtrify Photo"></navbar--brand>
    <navbar--nav-item text="Home"></navbar--nav-item>
    <navbar--nav-item text="Github"></navbar--nav-item>
  </nav>
</template>

<script>
import Navbar_Brand from './Navbar_Brand';
import Navbar_NavItem from './Navbar_NavItem';

export default {
  components: {
    'navbar--brand': Navbar_Brand,
    'navbar--nav-item': Navbar_NavItem
  }
}
</script>

<style>
  .navbar--outer {
    height: 80px;
    background-color: #212121;
  }
</style>
