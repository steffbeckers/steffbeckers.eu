<template>
  <Layout>
    <section class="hi">
      <section class="hi__text">
        <h1>Hi! I am Steff<span class="underscore">_</span></h1>
        <h3>Full stack developer / DevOps enthusiast</h3>
        <p>
          Developer with a passion for web development and DevOps. Motivated to expand knowledge and skills with the
          latest technologies and frameworks.
        </p>
        <p>
          Loves working on projects as a teamplayer in an agile environment. Focused on getting it right, and aware that
          small details can have a big impact.
        </p>
        <!-- <a class="hi__download-cv btn" href="/downloads/CV_SteffBeckers.pdf" target="_blank">Download CV</a> -->
        <g-link class="hi__contact btn" to="/contact">Contact me</g-link>
      </section>
      <section class="hi__profile-picture">
        <g-image class="profile-picture__image" src="~/assets/images/Steff.jpg" width="150" height="150" />
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
          <input type="text" v-model="searchSkill" placeholder="Search" />
          <span v-if="searchSkill" @click="searchSkill = null" class="close mdi mdi-close"></span>
        </section>
      </section>
      <!-- <section class="skill__tags">
        <span
          class="skill__tag"
          :class="!selectedSkillTag ? 'selected' : ''"
          @click="
            selectedSkillTag = null;
            searchSkill = null;
          "
          >All</span
        >
        <span
          class="skill__tag"
          :class="selectedSkillTag === tag ? 'selected' : ''"
          v-for="tag in tagsWithSkills"
          :key="tag.id"
          @click="selectSkillTag(tag)"
          :title="tag.description"
        >
          {{ tag.title }}
        </span>
      </section> -->
      <section class="skills__overview">
        <section v-if="filteredSkills.length > 0" class="skill__list">
          <div v-for="skill in filteredSkills" :key="skill.id">
            <div v-if="skill.content" style="cursor: pointer;">
              <v-popover offset="16">
                <div class="skill">
                  <g-image
                    v-if="skill.devicon != ''"
                    class="skill__devicon"
                    :src="'https://icongr.am/devicon/' + skill.devicon + '.svg?size=25'"
                    width="25"
                    height="25"
                  />
                  <span class="bold" :title="skill.description">
                    {{ skill.title }}
                  </span>
                </div>
                <template slot="popover">
                  <h1 style="display: flex; margin: 0px;">
                    <g-image
                      v-if="skill.devicon != ''"
                      :src="'https://icongr.am/devicon/' + skill.devicon + '.svg?size=35'"
                      width="35"
                      height="35"
                      style="margin-right: 10px;"
                    />
                    <span>{{ skill.title }}</span>
                  </h1>
                  <p v-if="skill.description" style="margin-top: 0px;">{{ skill.description }}</p>
                  <vue-markdown>{{ skill.content }}</vue-markdown>
                  <a
                    v-close-popover
                    class="bold"
                    style="display: block; width: 100%; padding-top: 10px; text-align: center; cursor: pointer;"
                  >
                    <span>Close</span>
                  </a>
                </template>
              </v-popover>
            </div>
            <div class="skill" v-else>
              <g-image
                v-if="skill.devicon != ''"
                class="skill__devicon"
                :src="'https://icongr.am/devicon/' + skill.devicon + '.svg?size=25'"
                width="25"
                height="25"
              />
              <span :title="skill.description">{{ skill.title }}</span>
            </div>
          </div>
        </section>
        <p v-if="filteredSkills.length === 0 && searchSkill" style="margin-top: 0px; margin-bottom: 5px;">
          No skills found. Try <span @click="searchSkill = 'Angular'">Angular</span>,
          <span @click="searchSkill = 'Docker'">Docker</span>, ...
        </p>
      </section>
      <!-- <span class="closing-tag">-></span>-->
    </section>
  </Layout>
</template>

<page-query>
query {
  skillsBySortOrderQry: allSkill(filter: { active: { eq: true }}, sortBy: "sort_order", order: ASC) {
    edges {
      node {
        id
        title
        description
        keywords
        rating
        sort_order
        devicon
        content
        tags {
          id
          title
          description
        }
      }
    }
  }
  tagsBySortOrderQry: allTag(sortBy: "sort_order", order: ASC) {
    edges {
      node {
        id
        title
        description
        sort_order
        skills {
          id
          title
          description
          keywords
          rating
          sort_order
          devicon
          content
        }
      }
    }
  }
}
</page-query>

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

  .hi__download-cv {
    margin-right: 20px;
  }

  .hi__contact {
    margin-top: 10px;
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

  .skill__tags {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-evenly;

    margin-top: 20px;

    .skill__tag {
      display: block;

      padding: 2px;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 10px;

      font-weight: bold;

      border: 2px solid #000000;

      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;

      cursor: pointer;
    }

    .skill__tag.selected {
      color: #53bceb;
      border: 2px solid #53bceb;
    }

    .skill__tag:hover {
      color: #7dc363;
      border: 2px solid #7dc363;
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

    .skill__devicon {
      margin-right: 5px;
    }

    .skill-rating-lt-5 {
      font-size: 0.7em;
      line-height: 1em;
    }

    .skill-rating-5-6 {
      font-size: 0.9em;
      line-height: 1em;
    }

    .skill-rating-7-8 {
      font-size: 1.1em;
    }

    .skill-rating-gt-8 {
      font-size: 1.3em;
      line-height: 1em;
    }
  }
}

@media only screen and (max-width: 600px) {
  .hi {
    flex-direction: column-reverse;
  }

  .hi__text {
    margin-top: 20px;
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

<script>
import VueMarkdown from "vue-markdown";
const fuzzysort = require("fuzzysort");

export default {
  metaInfo: {
    title: "Hi! I am"
  },
  data() {
    return {
      searchSkill: null,
      selectedSkillTag: null
    };
  },
  computed: {
    skillsBySortOrder() {
      let query = this.$page.skillsBySortOrderQry;

      if (!query || !query.edges) {
        return [];
      }

      return query.edges.map(e => e.node);
    },
    tagsBySortOrder() {
      let query = this.$page.tagsBySortOrderQry;

      if (!query || !query.edges) {
        return [];
      }

      return query.edges.map(e => e.node);
    },
    tagsWithSkills() {
      return this.tagsBySortOrder.filter(t => {
        return t.skills && t.skills.length > 0;
      });
    },
    filteredSkills() {
      let skillsToDisplay = this.skillsBySortOrder;

      // Tag selection
      if (this.selectedSkillTag && this.selectedSkillTag.skills) {
        skillsToDisplay = this.selectedSkillTag.skills;
      }

      // Search
      if (this.searchSkill && this.searchSkill.length > 0 && skillsToDisplay && skillsToDisplay.length > 0) {
        let searchResult = fuzzysort.go(this.searchSkill, skillsToDisplay, {
          keys: ["title", "description", "keywords"]
        });

        if (searchResult) {
          skillsToDisplay = searchResult.map(out => out.obj);
        }
      }

      return skillsToDisplay || [];
    }
  },
  methods: {
    selectSkillTag(tag) {
      this.selectedSkillTag = tag;

      // Reset skill search
      this.searchSkill = null;
    },
    getSkillClassesBasedOnRating(rating) {
      if (!rating) {
        return null;
      }

      if (rating < 5) {
        return "skill-rating-lt-5";
      } else if (rating === 5 || rating === 6) {
        return "skill-rating-5-6";
      } else if (rating === 7 || rating === 8) {
        return "skill-rating-7-8";
      } else if (rating > 8) {
        return "skill-rating-gt-8";
      }
    }
  },
  components: {
    VueMarkdown
  }
};
</script>
