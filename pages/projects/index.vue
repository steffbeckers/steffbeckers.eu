<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-row justify-between space-x-4">
      <div class="flex flex-col">
        <h1>Projects<span class="underscore">_</span></h1>
        <div class="subtitle">
          Overview of the projects,
          <a
            href="https://github.com/steffbeckers?tab=repositories"
            target="_blank"
            >Git repositories</a
          >, technologies I've been working on
        </div>
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
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-4">
      <NuxtLink
        v-for="project in projects"
        :key="project.slug"
        :to="project.path"
      >
        <div class="flex flex-col space-y-2">
          <img
            v-if="project.thumbnail"
            :src="project.thumbnail"
            alt="Project thumbnail"
            class="shadow-md"
          />
          <div class="flex flex-col">
            <h2>{{ project.title }}</h2>
            <div v-if="project.subtitle" class="subtitle">
              {{ project.subtitle }}
            </div>
          </div>
          <p v-if="project.description">
            {{ project.description }}
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
