<template>
  <div>
    <p>https://github.com/{{ githubProject }}</p>
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
