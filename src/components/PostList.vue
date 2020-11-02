<template>
  <div class="w-full flex justify-center">
    <div class="hidden xl:block w-64 flex-grow">
      <TagsSideBar :current-tag="tag" :tags="tags" />
    </div>
    <main class="w-full max-w-2xl">
      <div class="text-center my-2x">
        <h1 class="text-4xl mb-1x font-bold font-display">{{ title }}</h1>
        <p v-if="description" class="font-body">{{ description }}</p>
      </div>
      <PostCard v-for="post in posts" :key="post.path" :post="post" />
    </main>
    <div class="hidden xl:block w-64 flex-grow" />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import TagsSideBar from "./TagsSideBar.vue";

export default {
  components: {
    PostCard,
    TagsSideBar,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    posts: {
      type: Array,
      default: () => [],
    },
    tags: {
      type: Object,
      default: () => {},
    },
    tag: {
      type: String,
      default: "",
    },
  },
};
</script>
