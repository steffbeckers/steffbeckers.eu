<template>
  <Layout>
    <h1>Blog<span class="underscore">_</span></h1>
    <section class="blog">
      <template v-for="edge in $page.posts.edges">
        <g-link :to="edge.node.path" :key="edge.node.id">
          <article class="post">
            <h2>{{ edge.node.title }}</h2>
            <h3>{{ edge.node.date }}</h3>
            <p>{{ edge.node.description }}</p>
          </article>
        </g-link>
      </template>
      <p v-if="$page.posts.edges.length === 0">No posts yet.</p>
    </section>
  </Layout>
</template>

<page-query>
{
  posts: allBlogPost(filter: { published: { eq: true }}, order: DESC) {
    edges {
      node {
        id
        title
        path
        date (format: "YYYY-MM-DD")
        timeToRead
        description
      }
    }
  }
}
</page-query>

<style lang="scss">
.post {
  margin-bottom: 20px;

  h2 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #53bceb;
    font-family: monospace;
  }
}
</style>

<script>
export default {
  metaInfo: {
    title: "Blog"
  }
};
</script>
