<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-row justify-between space-x-4">
      <div class="flex flex-col">
        <h1>Blog; #{{ tag }}<span class="underscore">_</span></h1>
        <div class="subtitle">
          Tutorials, DEV-scripts and other useful notes
        </div>
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
    <div
      v-for="(post, index) in posts"
      :key="post.slug"
      class="flex flex-col space-y-4"
    >
      <NuxtLink :to="post.path">
        <div class="flex flex-col space-y-2">
          <div class="flex flex-col">
            <h2>{{ post.title }}</h2>
            <div class="subtitle">
              <span>{{ post.date | formatDateTime }}</span>
              <span>
                /
                <span v-for="tag in post.tags" :key="tag"
                  ><NuxtLink :to="`/blog/tags/${tag}`"
                    >#{{ tag }}
                  </NuxtLink></span
                >
              </span>
              <span>
                /
                {{ post.readingTime }}
              </span>
              <span>
                /
                <DisqusCount :identifier="post.path" />
              </span>
            </div>
          </div>
          <p v-if="post.description">{{ post.description }}</p>
        </div>
      </NuxtLink>
      <hr v-if="posts.length - 1 !== index" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('blog')
      .where({ published: true, tags: { $contains: params.tag } })
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts,
      tag: params.tag,
    }
  },
  head() {
    return {
      title: `Blog; #${this.tag} - Steff Beckers`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Steff's blog posts with tag #${this.tag}`,
        },
        {
          name: 'keywords',
          content: `Steff, Beckers, Blog, #${this.tag}`,
        },
      ],
    }
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
