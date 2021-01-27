<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col">
      <h1>{{ project.title }}<span class="underscore">_</span></h1>
      <h3 v-if="project.subtitle" class="subtitle">
        {{ project.subtitle }}
      </h3>
    </div>
    <nuxt-content :document="project" />
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()
    return {
      project,
    }
  },
  head() {
    return {
      title: this.project.title + ' - Steff Beckers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },
        {
          name: 'keywords',
          content: this.project.keywords,
        },
      ],
    }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>
