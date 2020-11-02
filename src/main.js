// Import main css
import "~/assets/styles/index.css";

// Import default layout so we don't need to import it to every page
import ExternalLink from "~/components/ExternalLink.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { head, router }) {
  // Set default layout as a global component
  Vue.component("XLink", ExternalLink);

  router.options.scrollBehavior = (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: decodeURI(to.hash),
        offset: { x: 0, y: 80 },
      };
    }

    return { x: 0, y: 0 };
  };

  const googleFontsCSS =
    "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&amp;display=swap";

  head.link.push(
    {
      rel: "preload",
      as: "style",
      href: googleFontsCSS,
    },
    { rel: "stylesheet", href: googleFontsCSS },
  );
}
