<template>
  <div v-if="skills && skills.length > 0" class="flex flex-row flex-wrap">
    <div
      v-for="skill in skills"
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
</template>

<script>
export default {
  name: 'skills-list',
  props: ['skills'],
}
</script>
