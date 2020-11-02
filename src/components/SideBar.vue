<template>
  <div
    class="top-4x sticky font-display border-l border-divider pl-1x mt-4x ml-1x"
  >
    <h3
      class="font-bold tracking-wide uppercase mb-.5x pb-.5x border-b border-divider"
    >
      On this page
    </h3>
    <ul>
      <li v-for="(heading, index) in headings" :key="heading.anchor">
        <a
          class="flex text-sm transition-transform transform duration-500 ease-in-out hover:translate-x-2"
          :class="{
            'mt-1x': index > 0 && heading.depth === 2,
            'mt-.5x': index === 0 || heading.depth !== 2,
            'font-medium': heading.depth === 2,
            'font-bold text-primary': activeAnchor === heading.anchor,
            'pl-1x': heading.depth === 3,
          }"
          :href="heading.anchor"
          >{{ heading.value }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import getFirstHeading from "../utils/get-first-heading";

const WAITING_IN_MS = 100;

export default {
  props: {
    headings: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    activeAnchor: "",
  }),
  mounted() {
    const anchors = this.headings.map((heading) => {
      const el = document.getElementById(heading.anchor.slice(1));

      return {
        anchor: heading.anchor,
        offsetTop: el ? el.offsetTop : -1,
      };
    });

    let busy = false;
    this.handleScroll = () => {
      if (!busy) {
        busy = true;
        setTimeout(() => {
          (this.activeAnchor = getFirstHeading(
            window.scrollY,
            window.innerHeight,
            anchors,
          )),
            (busy = false);
        }, WAITING_IN_MS);
      }
    };

    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
