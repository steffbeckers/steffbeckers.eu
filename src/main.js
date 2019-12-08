// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import "~/assets/styles/main.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Lato"
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
