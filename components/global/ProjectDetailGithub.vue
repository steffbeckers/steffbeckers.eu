<template>
  <div>
    <a
      v-if="githubProject"
      :href="'https://github.com/' + githubProject"
      target="_blank"
    >
      https://github.com/{{ githubProject }}
    </a>
    <p v-if="repo">Last updated: {{ repo.updated_at | formatDateTime }}</p>
  </div>
</template>

<script>
export default {
  props: ['githubProject'],
  data() {
    return {
      repo: null,
    }
  },
  async mounted() {
    this.repo = await fetch(
      `https://api.github.com/repos/${this.githubProject}`
    ).then((res) => res.json())
  },
}
</script>
