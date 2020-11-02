<template>
  <Layout>
    <article class="w-full max-w-2xl content" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    post: blogPage(id: $id) {
      title
      content
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>
