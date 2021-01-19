<template>
  <div>
    <h1 class="title">{{ project.title }}<span class="underscore">_</span></h1>
    <h3 v-if="project.subtitle" class="subtitle">
      {{ project.subtitle }}
    </h3>
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
          content: this.project.short_description,
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

<style lang="scss">
.title {
  margin-top: 0px;
  margin-bottom: 0px;
}

.subtitle {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #53bceb;
  font-family: monospace;
}

.timestamps {
  font-size: 13px;
}
</style>
