<script setup>

</script>


<template>
  <div class="flex flex-wrap py-2">
    <div class="w-full px-4">
      <nav
        class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-300 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2"
            href="#pablo"
            v-on:click="toggleMenu()" v-on:mouseover="toggleMouseOver()"
          />
        </svg>
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
          >
            <!-- <a
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
              @click="toggleMenu()"
            >功能表</a>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              v-on:click="toggleNavbar()"
            >
              <i class="fas fa-bars"></i>
            </button> -->
          </div>
          <div
            v-bind:class="{ 'hidden': !menuShow, 'flex': menuShow }"
            class="lg:flex lg:flex-grow items-center"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fas fa-globe text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fas fa-user text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fas fa-cog text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="inline-flex rounded-md shadow">
            <router-link
              to="/"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
            >系統首頁</router-link>
          </div>

          <div class="inline-flex rounded-md shadow">
            <router-link
              to="/login"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
            >系統登入</router-link>
          </div>

          <div class="inline-flex rounded-md shadow">
            <router-link
              to="/astroInfo"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
            >占星資訊</router-link>
          </div>

          <div class="inline-flex rounded-md shadow">
            <router-link
              to="/about"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
            >關於作者</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
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
    toggleNavbar: function () {
      this.menuShow = !this.menuShow;
    },
    toggleMenu: function () {
      console.log('開啟功能表');
      this.menuShow = !this.menuShow;
    },
    //
    toggleMouseOver: function () {
      // console.log('滑鼠游標在功能表上');
    }

  }
}
</script>
