<template>
  <footer class="py-1x border-t border-divider">
    <p class="font-display text-sm text-center">
      {{ $static.metadata.settings.author }} © 2016 - Present |
      <x-link :href="$static.metadata.settings.links.source">Source</x-link>
    </p>
  </footer>
</template>

<static-query>
  query {
    metadata {
      settings {
        author
        links {
          source
        }
      }
    }
  }
</static-query>
