<template>
  <div>
    <section class="hi">
      <section class="hi__text">
        <h1>Hi! I am Steff<span class="underscore">_</span></h1>
        <h3>Full stack developer / DevOps enthusiast</h3>
        <p>
          Developer with a passion for web development and DevOps. Motivated to
          expand knowledge and skills with the latest technologies and
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
        <section class="hi__links">
          <NuxtLink class="hi__contact btn" to="/contact">Contact me</NuxtLink>
          <a
            class="hi__download-cv btn"
            href="/downloads/CV_SteffBeckers.pdf"
            target="_blank"
            >Download CV</a
          >
        </section>
      </section>
      <section class="hi__profile-picture">
        <img
          class="profile-picture__image"
          src="~/assets/images/Steff.jpg"
          width="150"
          height="150"
        />
      </section>
      <!-- <span class="closing-tag">/></span> -->
    </section>
    <section class="skills">
      <section class="skills__header">
        <section class="skills__text">
          <h1>Skills &amp; technologies<span class="underscore">_</span></h1>
          <h3>I try to learn something new every single day</h3>
        </section>
        <section class="skill__search">
          <input v-model="searchSkill" type="text" placeholder="Search" />
          <span
            v-if="searchSkill"
            class="close mdi mdi-close"
            @click="searchSkill = ''"
          ></span>
        </section>
      </section>
      <section class="skills__overview">
        <section class="skill__list">
          <div v-for="skill in filteredSkills" :key="skill.name" class="skill">
            <img
              v-if="skill.devicon"
              class="skill__icon"
              :src="
                'https://icongr.am/devicon/' + skill.devicon + '.svg?size=25'
              "
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
        </section>
      </section>
    </section>
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

<style lang="scss">
.profile-picture__image {
  border-radius: 50%;
  margin-top: 10px;
}

.hi {
  display: flex;

  border-bottom: 1px solid #eeeeee;
  padding-bottom: 40px;

  // position: relative;

  .hi__text {
    margin-right: 40px;

    h1 {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    h3 {
      margin-top: 0px;
      margin-bottom: 0px;
      color: #53bceb;
      font-family: monospace;
    }
  }

  .hi__links {
    display: flex;
    margin-top: 10px;

    .hi__contact {
      margin-right: 20px;
    }
  }
}

.skills {
  display: flex;
  flex-direction: column;

  padding-top: 30px;
  padding-bottom: 30px;

  // position: relative;

  .skills__header {
    display: flex;
  }

  .skills__text {
    flex-basis: 70%;

    margin-right: 40px;

    h1 {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    h3 {
      margin-top: 0px;
      margin-bottom: 0px;
      color: #53bceb;
      font-family: monospace;
    }
  }

  .skills__overview {
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    h4 {
      margin-top: 0px;
      margin-bottom: 10px;
    }
  }

  .skill__search {
    display: flex;
    flex-basis: 30%;

    position: relative;

    height: 35px;

    margin-top: 20px;
    margin-bottom: 20px;

    span.close {
      position: absolute;
      right: 5px;
      top: 0px;

      padding: 5px;
    }
  }

  .skill__list {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
  }

  .skill {
    display: flex;

    margin-bottom: 10px;
    margin-right: 15px;

    .skill__icon {
      margin-right: 5px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .hi {
    flex-direction: column-reverse;

    .hi__text {
      margin-top: 20px;
      margin-right: 0px;
    }

    .hi__links {
      display: flex;
      flex-direction: column;

      .hi__contact {
        margin-right: 0px;
        margin-bottom: 20px;
      }
    }
  }

  .skills {
    flex-direction: column;

    .skills__header {
      flex-direction: column;
    }

    .skills__text {
      margin-right: 0px;
    }
  }
}
</style>
