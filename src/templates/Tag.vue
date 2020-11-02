<template>
  <PostList :title="title" :posts="posts" :tag="tag.id" />
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    id
    title
    belongsTo {
      edges {
        node {
          ...on BlogPost {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostList from "../components/PostList.vue";

export default {
  components: {
    PostList,
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  computed: {
    title() {
      return `Tagged in ${this.tag.title}`;
    },
    tag() {
      return this.$page.tag;
    },
    posts() {
      return this.tag.belongsTo.edges.map((edge) => edge.node);
    },
  },
};
</script>

<style lang="scss"></style>
