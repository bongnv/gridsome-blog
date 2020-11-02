<template>
  <ul class="mb-1x font-display">
    <li v-for="tag in tags" :key="tag.id" class="inline-block m-1">
      <router-link class="block rounded p-1 bg-inline-surface" :to="tag.path">{{
        tag.id
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
