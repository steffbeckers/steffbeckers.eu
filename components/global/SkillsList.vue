<template>
  <div>
    <div v-if="skills && skills.length > 0" class="flex flex-row flex-wrap">
      <div
        v-for="skill in filteredSkills"
        :key="skill.name"
        class="mr-4 mb-2 flex flex-row space-x-2"
      >
        <img
          v-if="skill.devicon"
          :src="'https://icongr.am/devicon/' + skill.devicon + '.svg?size=25'"
          alt="Skill icon"
          width="25"
          height="25"
        />
        <img
          v-if="$colorMode.value === 'dark' && skill.darkicon"
          :src="require(`@/assets/images/logos/${skill.darkicon}`)"
          alt="Skill icon"
          width="25"
          height="25"
        />
        <img
          v-else-if="skill.icon"
          :src="require(`@/assets/images/logos/${skill.icon}`)"
          alt="Skill icon"
          width="25"
          height="25"
        />
        <a
          v-if="skill.url"
          :href="skill.url"
          target="_blank"
          :title="skill.description"
          >{{ skill.name }}</a
        >
        <span v-else :title="skill.description">{{ skill.name }}</span>
      </div>
    </div>
    <p v-if="searchTerm && filteredSkills && filteredSkills.length === 0">
      No skills or technologies found with '{{ searchTerm }}' as search term.
    </p>
  </div>
</template>

<script>
const fuzzysort = require('fuzzysort')

export default {
  name: 'skills-list',
  props: ['skills', 'searchTerm'],
  data() {
    return {
      skillsList: [],
    }
  },
  computed: {
    filteredSkills() {
      let filteredSkills = this.skillsList

      // Search
      if (this.searchTerm && this.searchTerm.length > 2) {
        const searchResult = fuzzysort.go(this.searchTerm, filteredSkills, {
          keys: ['name', 'description', 'keywords'],
          threshold: -10000,
        })

        if (searchResult) {
          filteredSkills = searchResult.map((out) => out.obj)
        }
      }

      return filteredSkills
    },
  },
  async mounted() {
    const skillsJson = await fetch('/skills.json').then((res) => res.json())

    for (const skill of this.skills) {
      const skillJson = skillsJson.find((x) => x.name === skill.name)
      if (skillJson) {
        skill = skillJson
      }

      this.skillsList.push(skill)
    }
  },
}
</script>
