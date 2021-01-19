<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-row space-x-4 justify-between">
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col">
          <h1>Hi! I am Steff<span class="underscore">_</span></h1>
          <h3>Full stack developer / DevOps enthusiast</h3>
        </div>
        <div class="flex flex-col space-y-2">
          <p>
            Developer with a passion for web development and DevOps. Motivated
            to expand knowledge and skills with the latest technologies and
            frameworks.
          </p>
          <p>
            Loves working on projects as a team player in an agile environment.
            Focused on getting it right, and aware that small details can have a
            big impact.
          </p>
          <p>
            Feel free to get in touch or download my CV.<br />
            Last updated on 11/05/2020.
          </p>
        </div>
        <div class="flex flex-row space-x-4">
          <NuxtLink class="btn" to="/contact">Contact me</NuxtLink>
          <a class="btn" href="/downloads/CV_SteffBeckers.pdf" target="_blank"
            >Download CV</a
          >
        </div>
      </div>
      <div>
        <img
          class="rounded-full"
          src="~/assets/images/Steff.jpg"
          width="200"
          height="200"
        />
      </div>
    </div>
    <hr />
    <div class="flex flex-col space-y-4">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col">
          <h1>Skills &amp; technologies<span class="underscore">_</span></h1>
          <h3>I try to learn something new every single day</h3>
        </div>
        <div>
          <input v-model="searchSkill" type="text" placeholder="Search" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div
          class="mr-4 mb-2 flex flex-row space-x-2"
          v-for="skill in filteredSkills"
          :key="skill.name"
        >
          <img
            v-if="skill.devicon"
            class="skill__icon"
            :src="'https://icongr.am/devicon/' + skill.devicon + '.svg?size=25'"
            width="25"
            height="25"
          />
          <img
            v-if="skill.icon"
            class="skill__icon"
            :src="require(`@/assets/images/icons/${skill.icon}`)"
            width="25"
            height="25"
          />
          <span :title="skill.description">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from '~/static/skills.json'
const fuzzysort = require('fuzzysort')

export default {
  asyncData({ params }) {
    return { skills }
  },
  data() {
    return {
      searchSkill: '',
    }
  },
  head: {
    title: 'Hi! I am - Steff Beckers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Developer with a passion for web development and DevOps. Motivated to expand knowledge and skills with the latest technologies and frameworks. Loves working on projects as a team player in an agile environment. Focused on getting it right, and aware that small details can have a big impact.',
      },
      {
        name: 'keywords',
        content:
          'Steff, Beckers, Developer, Personal website, Blog, Projects, Resume, CV, Contact',
      },
    ],
  },
  computed: {
    filteredSkills() {
      let filteredSkills = this.skills

      // Search
      if (this.searchSkill) {
        const searchResult = fuzzysort.go(this.searchSkill, filteredSkills, {
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
}
</script>
