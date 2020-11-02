<template>
  <g-link :to="post.path">
    <div
      class="border border-divider p-1x sm:p-2x card-transition-effect my-2x"
    >
      <h2 class="font-display font-bold text-lg mb-.5x">{{ post.title }}</h2>
      <p class="leading-snug font-body mb-1x">{{ post.excerpt }}</p>
      <PostMeta :date="post.date" :time-to-read="post.timeToRead" />
    </div>
  </g-link>
</template>

<script>
import PostMeta from "./PostMeta.vue";

export default {
  components: {
    PostMeta,
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
