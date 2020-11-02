<template>
  <PostList
    :title="title"
    :description="description"
    :posts="posts"
    :tags="tags"
  />
</template>

<page-query>
  query {
    posts: allBlogPost {
      edges {
        node {
          id
          title
          date(format: "D. MMMM YYYY")
          path
          timeToRead
          excerpt
        }
      }
    }
  }
</page-query>

<script>
import PostList from "~/components/PostList.vue";

export default {
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.description,
        },
      ],
    };
  },

  components: {
    PostList,
  },

  data: function () {
    return {
      title: "The blog of Bong",
      description:
        "Hey! I write about my personal experiences and challenges here.",
    };
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map((edge) => edge.node);
    },
    tags() {
      return {};
    },
  },
};
</script>
