<template>
  <div>
    <h1>Blog<span class="underscore">_</span></h1>
    <section class="blog-posts">
      <div v-for="post in posts" :key="post.slug">
        <NuxtLink :to="post.path">
          <article class="post">
            <h2>{{ post.title }}</h2>
            <h3 v-if="post.subtitle">
              {{ post.subtitle }}
              <span v-if="post.date">{{ post.date | formatDate }}</span>
            </h3>
            <p v-if="post.short_description">{{ post.short_description }}</p>
          </article>
        </NuxtLink>
      </div>
    </section>
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
    ],
  },
}
</script>

<style lang="scss">
.blog-posts {
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
}

.post {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;

  h2 {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #53bceb;
    font-family: monospace;
  }
}
.post:last-of-type {
  margin-bottom: 0px;
  border-bottom: none;
}
</style>
