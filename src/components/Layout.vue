<template>
  <div>
    <Header />
    <div
      class="container w-full max-w-outer min-h-screen pt-16 sm:pt-20 px-1x flex flex-col justify-between"
    >
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
