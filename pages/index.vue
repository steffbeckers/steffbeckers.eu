<template>
  <div class="flex flex-col space-y-8">
    <div
      class="flex flex-row space-x-4 justify-between sm:flex-col-reverse sm:space-x-0"
    >
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col">
          <h1>Hi! I am Steff<span class="underscore">_</span></h1>
          <div class="subtitle">Full stack developer / DevOps enthusiast</div>
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
            Last updated on 05/03/2021.
          </p>
        </div>
        <div class="flex flex-row space-x-4 sm:flex-col sm:space-x-0">
          <NuxtLink to="/contact" class="sm:mb-4">
            <button class="sm:w-full">Get in touch</button>
          </NuxtLink>
          <a href="/downloads/CV_SteffBeckers.pdf" target="_blank">
            <button class="sm:w-full">Download CV</button>
          </a>
        </div>
      </div>
      <div class="flex flex-shrink-0 items-start sm:mb-4">
        <img
          class="rounded-full shadow-md"
          src="~/assets/images/Steff.jpg"
          alt="Steff"
          width="150"
          height="150"
        />
      </div>
    </div>
    <hr />
    <div class="flex flex-col space-y-4">
      <div
        class="flex flex-row justify-between space-x-4 items-center sm:flex-col sm:items-start sm:space-x-0 sm:space-y-4"
      >
        <div class="flex flex-col">
          <h1>Skills &amp; technologies<span class="underscore">_</span></h1>
          <div class="subtitle">
            I try to learn something new every single day
          </div>
        </div>
        <div class="w-48 sm:w-full flex flex-none">
          <input
            type="text"
            placeholder="Search"
            :value="skillsSearchTerm"
            @input="(e) => (skillsSearchTerm = e.target.value)"
          />
        </div>
      </div>
      <SkillsList :skills="skills" :search-term="skillsSearchTerm" />
    </div>
  </div>
</template>

<script>
import skills from '~/static/skills.json'

export default {
  asyncData() {
    return { skills }
  },
  data() {
    return {
      skillsSearchTerm: '',
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
}
</script>
