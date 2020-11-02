<template>
  <header class="fixed top-0 z-10 w-full bg-background font-display">
    <div class="container max-w-outer px-1x">
      <div
        class="flex justify-between items-center border-b border-divider py-.5x"
      >
        <g-link class="tracking-tighter text-xl sm:text-2xl font-bold" to="/">{{
          $static.metadata.siteName
        }}</g-link>
        <Nav />
        <button
          class="sm:hidden focus:outline-none"
          @click="handleClick($event)"
        >
          <MenuIcon v-if="!menuVisible" />
          <XIcon v-else />
        </button>
      </div>
    </div>
    <MobileNav v-if="menuVisible" />
  </header>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import XIcon from "./icons/XIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import Nav from "./Nav.vue";
import MobileNav from "./MobileNav.vue";

export default {
  components: {
    XIcon,
    MenuIcon,
    Nav,
    MobileNav,
  },
  data: function () {
    return {
      menuVisible: false,
    };
  },
  watch: {
    menuVisible(newValue) {
      if (newValue) {
        window.addEventListener("click", this.handleMotionEvent);
        window.addEventListener("scroll", this.handleMotionEvent);
      } else {
        window.removeEventListener("click", this.handleMotionEvent);
        window.removeEventListener("scroll", this.handleMotionEvent);
      }
    },
  },
  methods: {
    handleClick(event) {
      event._handled = true;
      this.menuVisible = !this.menuVisible;
    },
    handleMotionEvent(event) {
      if (!event._handled) {
        this.menuVisible = false;
      }
    },
  },
};
</script>
