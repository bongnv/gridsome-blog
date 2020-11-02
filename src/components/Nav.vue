<template>
  <nav class="hidden sm:flex items-center">
    <g-link to="/" class="mr-2x font-medium">About</g-link>
    <g-link to="/blog/" class="mr-2x font-medium">Blog</g-link>
    <x-link :href="links.linkedin">
      <LinkedInIcon class="mr-1x" />
    </x-link>
    <x-link class="mr-1x" :href="links.github">
      <GithubIcon />
    </x-link>
    <x-link class="mr-1x" :href="links.email">
      <MailIcon />
    </x-link>
    <DarkModeSwitcher />
  </nav>
</template>

<static-query>
  query {
    metadata {
      settings {
        links {
          email
          github
          linkedin
        }
      }
    }
  }
</static-query>

<script>
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";
import MailIcon from "./icons/MailIcon.vue";
import DarkModeSwitcher from "./DarkModeSwitcher.vue";

export default {
  components: {
    GithubIcon,
    LinkedInIcon,
    MailIcon,
    DarkModeSwitcher,
  },
  computed: {
    links() {
      return this.$static.metadata.settings.links;
    },
  },
};
</script>
