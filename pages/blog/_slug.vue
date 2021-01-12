<template>
  <div>
    <h1 class="title">{{ post.title }}<span class="underscore">_</span></h1>
    <h3 class="subtitle" v-if="post.subtitle">
      {{ post.subtitle }}
      <span v-if="post.date">{{ post.date | formatDate }}</span>
    </h3>
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
