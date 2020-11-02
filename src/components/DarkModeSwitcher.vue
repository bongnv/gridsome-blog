<template>
  <button
    class="focus:outline-none"
    aria-label="Dark Mode"
    @click="handleClick"
  >
    <MoonIcon class="moon" />
    <SunIcon class="sun" />
  </button>
</template>

<script>
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";

const LIGHTS_OUT = "lights-out";

export default {
  components: {
    MoonIcon,
    SunIcon,
  },
  methods: {
    handleClick() {
      const newMode = document.documentElement.toggleAttribute(LIGHTS_OUT);
      window.localStorage.setItem(LIGHTS_OUT, newMode ? "true" : "false");
    },
  },
};
</script>
