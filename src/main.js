// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import "~/assets/styles/main.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  head.meta.push({
    name: 'description',
    content: 'Developer with a passion for web development and DevOps. Motivated to expand knowledge and skills with the latest technologies and frameworks. Loves working on projects as a teamplayer in an agile environment. Focused on getting it right, and aware that small details can have a big impact.'
  });
  head.meta.push({
    name: 'keywords',
    content: 'Steff, Beckers, CV, Portfolio, Projects, Skills, Work, Experience'
  });
  head.meta.push({
    name: 'author',
    content: 'Steff Beckers'
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Lato"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Material+Icons"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css"
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
