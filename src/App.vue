<template>
  <Layout id="app">
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
/*
import siteMeta from "./site-meta";

export default {
  name: "App",
  metaInfo() {
    const googleFontsCSS =
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&amp;display=swap";

    return {
      meta: [
        {
          vmid: "description",
          name: "description",
          content: siteMeta.description,
        },
      ],
      titleTemplate: "%s - @bongnv",
      link: [
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect dns-prefetch",
        },
        {
          rel: "preload",
          href: googleFontsCSS,
          as: "style",
        },
        { rel: "stylesheet", href: googleFontsCSS },
      ],
      script: [
        {
          vmid: "script-dark-mode",
          type: "text/javascript",
          pbody: true,
          innerHTML: `const LIGHTS_OUT = "lights-out";
  const darkMode = window.localStorage.getItem(LIGHTS_OUT) === "true";
  document.documentElement.toggleAttribute(LIGHTS_OUT, darkMode);`,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "script-dark-mode": ["innerHTML"],
      },
    };
  },
  components: {
    Layout,
  },
  mounted() {
    if (this.$route.hash) {
      const el = document.getElementById(decodeURI(this.$route.hash.slice(1)));
      if (el) {
        window.scrollTo(0, el.offsetTop - 60);
      }
    }
  },
};
*/
</script>
