<script setup>
import Menu from "../components/Menu.vue";
</script>


<template>
  <Menu />
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
