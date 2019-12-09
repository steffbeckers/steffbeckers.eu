<template>
  <Layout>
    <div class="project-title">
      <h1 class="project-title__text">
        {{ $page.project.title }}
      </h1>
    </div>
    <div class="project">
      <div class="project__content" v-html="$page.project.content" />
    </div>
    <div class="project-comments">
      <!-- Add comment widgets here -->
    </div>
  </Layout>
</template>

<style lang="scss"></style>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Project ($path: String!) {
  project (path: $path) {
    title
    description
    date
    skills {
      title
    }
    content
  }
}
</page-query>

<style lang="scss">
.project-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.project {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.project-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}
</style>
