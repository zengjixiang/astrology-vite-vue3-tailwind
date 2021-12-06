<script setup>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
</script>


<template>
  <Menu />

  <Footer />
</template>

<script>
export default {
  name: "red-menu",
  data() {
    return {
      menuShow: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.menuShow = !this.menuShow;
    }
  }
}
</script>
