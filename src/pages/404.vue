<template>
  <main class="w-full flex justify-center">
    <article class="w-full max-w-2xl">
      <div class="pt-8 md:pt-16">
        <h3 class="text-center font-bold text-2xl">
          Oh no! There is nothing here.
        </h3>
      </div>
      <div class="mb-10 flex items-center justify-center">
        <g-link to="/" class="no-underline text-primary hover:underline"
          >Take me home.</g-link
        >
      </div>
    </article>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: "404 - Nothing here",
  },
};
</script>
