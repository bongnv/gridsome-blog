<template>
  <p class="text-sm">
    {{ `Posted on ${formatedDate} - ` }}
    <strong>{{ Math.ceil(timeToRead) }} min read</strong>
  </p>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: new Date().toString(),
    },
    timeToRead: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    formatedDate() {
      return new Date(this.date).toISOString().substring(0, 10);
    },
  },
};
</script>
