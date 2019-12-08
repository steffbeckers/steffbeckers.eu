<template>
  <Layout>
    <div class="skill-title">
      <h1 class="skill-title__text">
        {{ $page.skill.title }}
      </h1>
    </div>
    <div class="skill">
      <div class="skill__content" v-html="$page.skill.content" />
    </div>
    <div class="skill-comments">
      <!-- Add comment widgets here -->
    </div>
  </Layout>
</template>

<style lang="scss"></style>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.skill.title,
      meta: [
        {
          name: "description",
          content: this.$page.skill.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Skill ($path: String!) {
  skill (path: $path) {
    title
    description
    rating
    content
  }
}
</page-query>

<style lang="scss">
.skill-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.skill {
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

.skill-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}
</style>
