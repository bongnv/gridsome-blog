// Import main css
import "~/assets/styles/index.css";

// Import default layout so we don't need to import it to every page
import ExternalLink from "~/components/ExternalLink.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue) {
  // Set default layout as a global component
  Vue.component("XLink", ExternalLink);
}
