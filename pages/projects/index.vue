<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <h1>Projects<span class="underscore">_</span></h1>
        <h3>
          Overview of the projects, Git repositories, technologies I've been
          working on
        </h3>
      </div>
      <div class="top-icons flex flex-row">
        <a
          class="mdi mdi-github"
          href="https://github.com/steffbeckers"
          target="_blank"
          title="GitHub"
        ></a>
      </div>
    </div>
    <div
      v-for="project in projects"
      :key="project.slug"
      class="grid grid-cols-3 gap-4"
    >
      <NuxtLink :to="project.path">
        <div class="flex flex-col space-y-2">
          <img
            v-if="project.thumbnail"
            :src="project.thumbnail"
            class="shadow-md"
          />
          <div class="flex flex-col">
            <h2>{{ project.title }}</h2>
            <h3 v-if="project.subtitle">
              {{ project.subtitle }}
              <span v-if="project.date">{{ project.date | formatDate }}</span>
            </h3>
          </div>
          <p v-if="project.short_description">
            {{ project.short_description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .where({ published: true })
      .sortBy('sort_order', 'asc')
      .fetch()
    return {
      projects,
    }
  },
  head: {
    title: 'Projects - Steff Beckers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Steff's projects, GitHub repo's and demo web applications.",
      },
      {
        name: 'keywords',
        content:
          'Steff, Beckers, Projects, Portfolio, GitHub, Demo, Web, Applications',
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
