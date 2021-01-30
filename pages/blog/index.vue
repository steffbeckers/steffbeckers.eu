<template>
  <div class="flex flex-col space-y-4 sm:space-y-0">
    <div
      class="flex sm:flex-col items-center sm:items-start space-x-4 sm:space-x-0 sm:space-y-4"
    >
      <div
        class="flex flex-grow sm:w-full justify-between items-center space-x-4"
      >
        <div class="flex flex-col">
          <h1>Blog<span class="underscore">_</span></h1>
          <h3>Tutorials, DEV-scripts and other useful notes</h3>
        </div>
        <div class="top-icons flex flex-row">
          <a
            class="mdi mdi-rss"
            href="/blog.xml"
            target="_blank"
            title="RSS feed"
          ></a>
        </div>
      </div>
      <div class="w-48 sm:w-full flex-none">
        <input
          v-model="searchBlog"
          type="text"
          placeholder="Search"
          @keyup="search()"
        />
      </div>
    </div>
    <div class="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
      <div class="flex flex-col space-y-4 sm:mt-4">
        <p v-if="searchNotFound">
          No blog posts found with '{{ searchBlog }}' as search term.
          <span
            class="cursor-pointer"
            @click="
              searchBlog = ''
              searchNotFound = ''
            "
            >Clear search</span
          >
        </p>
        <div
          v-for="(post, index) in filteredPosts"
          :key="post.slug"
          class="flex flex-col space-y-4"
        >
          <hr v-if="index > 0" />
          <NuxtLink :to="post.path">
            <div class="flex flex-col space-y-2">
              <div class="flex flex-col">
                <h2>{{ post.title }}</h2>
                <h3>
                  <span>{{ post.date | formatDateTime }}</span>
                  <span>
                    /
                    <span v-for="tag in post.tags" :key="tag"
                      ><NuxtLink :to="`/blog/tags/${tag}`"
                        >#{{ tag }}
                      </NuxtLink>
                    </span>
                  </span>
                  <span>
                    /
                    {{ post.readingTime }}
                  </span>
                  <span>
                    /
                    <DisqusCount :identifier="post.path" />
                  </span>
                </h3>
              </div>
              <p v-if="post.description">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="w-48 sm:w-full flex flex-col flex-none space-y-2">
        <h2>Tags</h2>
        <div class="flex flex-row flex-wrap">
          <div v-for="tag in tags" :key="tag" class="mr-4 mb-2 flex space-x-2">
            <NuxtLink :to="`/blog/tags/${tag}`">#{{ tag }}</NuxtLink>
          </div>
        </div>
      </div>
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
      filteredPosts: posts,
    }
  },
  data() {
    return {
      searchBlog: '',
      searchNotFound: false,
      tags: [],
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
  mounted() {
    const tags = []
    this.posts.forEach((post) => {
      tags.push(post.tags)
    })
    this.tags = [...new Set([].concat(...tags))]
  },
  methods: {
    async search() {
      if (this.searchBlog) {
        this.filteredPosts = await this.$content('blog')
          .where({ published: true })
          .search(this.searchBlog)
          .sortBy('date', 'desc')
          .fetch()

        if (this.filteredPosts.length > 0) {
          this.searchNotFound = false
        } else {
          this.searchNotFound = true
          this.filteredPosts = this.posts
        }
      } else {
        this.filteredPosts = this.posts
      }
    },
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
