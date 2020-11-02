<template>
  <nav class="flex flex-col justify-start px-1x border-b border-divider shadow">
    <g-link to="/" class="pl-.5x mt-1x font-medium">About</g-link>
    <g-link to="/blog/" class="pl-.5x mt-1x font-medium">Blog</g-link>
    <div class="flex pl-.5x mb-1x mt-1x pt-1x border-t border-divider">
      <x-link :href="links.linkedin" class="mr-1x">
        <LinkedInIcon />
      </x-link>
      <x-link :href="links.github" class="mr-1x">
        <GithubIcon />
      </x-link>
      <x-link class="mr-1x" :href="links.email">
        <MailIcon />
      </x-link>
      <DarkModeSwitcher />
    </div>
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
