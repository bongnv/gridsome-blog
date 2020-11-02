<template>
  <div
    class="top-4x sticky font-display border-r border-divider pr-1x mt-4x mr-1x"
  >
    <h3
      class="font-bold tracking-wide uppercase ml-1 mb-.5x pb-.5x border-b border-divider"
    >
      Tags
    </h3>
    <ul class>
      <li v-for="{ tag, count } in tags" :key="tag" class="inline-block m-1">
        <router-link
          :class="{
            'block rounded p-1 bg-inline-surface': true,
            'font-bold text-primary': tag === currentTag,
          }"
          :to="`/tags/${tag}`"
          >{{ `${tag} (${count})` }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<static-query>
  query {
    tags: allTag {
      edges {
        node {
          id
          path
          belongsTo {
            totalCount
          }
        }
      }
    }
  }
</static-query>

<script>
export default {
  props: {
    currentTag: {
      type: String,
      default: "",
    },
  },
  computed: {
    tags() {
      return this.$static.tags.edges.map((edge) => ({
        tag: edge.node.id,
        count: edge.node.belongsTo.totalCount,
      }));
    },
  },
};
</script>
