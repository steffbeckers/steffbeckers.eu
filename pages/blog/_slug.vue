<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col">
      <h1>{{ post.title }}<span class="underscore">_</span></h1>
      <h3 v-if="post.subtitle" class="subtitle">
        {{ post.subtitle }}
        <span v-if="post.date">{{ post.date | formatDate }}</span>
      </h3>
    </div>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    return {
      post,
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  head() {
    return {
      title: this.post.title + ' - Steff Beckers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.short_description,
        },
        {
          name: 'keywords',
          content: this.post.keywords,
        },
      ],
    }
  },
}
</script>
