<template>
  <div class="w-full flex justify-center">
    <div v-if="showSidebar" class="hidden xl:block w-64 flex-grow" />
    <div class="w-full max-w-2xl">
      <main class="mb-2x">
        <h1 class="text-center text-4xl font-bold font-display mt-2x mb-1x">
          {{ post.title }}
        </h1>
        <div class="text-center mb-2x">
          <PostMeta :date="post.date" :time-to-read="post.timeToRead" />
        </div>
        <article class="content" v-html="post.content" />
      </main>
      <TagsFooter v-if="post.tags.length" :tags="post.tags" />
    </div>
    <aside v-if="showSidebar" class="hidden xl:block w-64 flex-grow">
      <SideBar :headings="headings" />
    </aside>
  </div>
</template>

<page-query>
  query($id: ID!) {
    post: blogPost(id: $id) {
      title
      date(format: "D. MMMM YYYY")
      timeToRead
      content
      path
      headings {
        anchor
        depth
        value
      }
      tags {
        id
        path
      }
    }
  }
</page-query>

<script>
import PostMeta from "~/components/PostMeta.vue";
import SideBar from "~/components/SideBar.vue";
import TagsFooter from "~/components/TagsFooter.vue";

export default {
  components: {
    PostMeta,
    SideBar,
    TagsFooter,
  },
  metaInfo() {
    return {
      title: this.post.title,
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.post.excerpt,
        },
      ],
    };
  },
  computed: {
    post() {
      return this.$page.post;
    },
    headings() {
      const post = this.$page && this.$page.post;
      if (post && post.headings) {
        return post.headings.filter((h) => h.depth > 1 && h.depth < 5);
      } else {
        return [];
      }
    },
    showSidebar() {
      return this.headings.length > 0;
    },
  },
};
</script>
