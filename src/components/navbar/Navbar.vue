<template>
  <nav class="navbar--outer flexbox">
    <navbar--brand title="Filtrify Photo"></navbar--brand>
    <navbar--nav-item text="Home"></navbar--nav-item>
    <navbar--nav-item text="Github"></navbar--nav-item>
  </nav>
</template>

<script>
import NavbarBrand from './Navbar_Brand.vue';
import NavbarNavItem from './Navbar_NavItem.vue';

export default {
  components: {
    'navbar--brand': NavbarBrand,
    'navbar--nav-item': NavbarNavItem,
  },
};
</script>

<style scoped>
  .navbar--outer {
    height: 4rem;
    background-color: var(--navbarBlack);
    color: var(--offWhite);
  }
</style>
