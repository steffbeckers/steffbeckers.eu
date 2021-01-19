<template>
  <div>
    <h1>Projects<span class="underscore">_</span></h1>
    <section class="projects">
      <div v-for="project in projects" :key="project.slug">
        <NuxtLink :to="project.path">
          <article class="project">
            <h2>{{ project.title }}</h2>
            <h3 v-if="project.subtitle">
              {{ project.subtitle }}
            </h3>
            <p v-if="project.short_description">
              {{ project.short_description }}
            </p>
          </article>
        </NuxtLink>
      </div>
    </section>
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
.projects {
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
}

.project {
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
.project:last-of-type {
  margin-bottom: 0px;
  border-bottom: none;
}
</style>
