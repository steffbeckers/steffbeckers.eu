<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col">
      <h1>{{ post.title }}<span class="underscore">_</span></h1>
      <h3>
        <span>{{ post.date | formatDate }}</span>
        <span>
          /
          <span v-for="tag in post.tags" :key="tag"
            ><NuxtLink :to="`/blog/tags/${tag}`">#{{ tag }} </NuxtLink>
          </span>
        </span>
        <span>
          / <DisqusCount tag="a" :url="post.path" :identifier="post.path" />
        </span>
      </h3>
    </div>
    <nuxt-content :document="post" />
    <div class="flex flex-col space-y-2">
      <h2>Leave a comment or question</h2>
      <Disqus />
    </div>
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
  mounted() {
    Prism.highlightAll()
  },
}
</script>
