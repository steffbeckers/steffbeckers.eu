<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <h1>Blog<span class="underscore">_</span></h1>
        <h3>Tutorials, DEV-scripts and other useful notes</h3>
      </div>
      <div class="top-icons flex flex-row">
        <!-- <a
          class="mdi mdi-rss"
          href="https://github.com/steffbeckers"
          target="_blank"
          title="RSS feed"
        ></a> -->
      </div>
    </div>
    <div v-for="post in posts" :key="post.slug" class="flex flex-col">
      <NuxtLink :to="post.path">
        <div class="flex flex-col space-y-2">
          <div class="flex flex-col">
            <h2>{{ post.title }}</h2>
            <h3 v-if="post.subtitle">
              {{ post.subtitle }}
              <span v-if="post.date">{{ post.date | formatDate }}</span>
            </h3>
          </div>
          <p v-if="post.short_description">{{ post.short_description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .where({ published: true })
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts,
    }
  },
  head: {
    title: 'Blog - Steff Beckers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Steff's blog posts, DEV-scripts and other useful notes.",
      },
      {
        name: 'keywords',
        content:
          'Steff, Beckers, Blog, Development, DEV, Scripts, Notes, Code, Snippets, Web',
      },
    ],
  },
}
</script>

<style lang="scss">
.top-icons {
  a.mdi {
    font-size: 46px;
  }
}
</style>
