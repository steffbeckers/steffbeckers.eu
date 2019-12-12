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
        <section class="hi__info">
          <div>
            <span class="info__title">Phone</span>
            <span><a href="tel:+32499765192">+32 499 765 192</a></span>
          </div>
          <div>
            <span class="info__title">Email</span>
            <span><a href="mailto:steff@steffbeckers.eu">steff@steffbeckers.eu</a></span>
          </div>
          <div>
            <span class="info__title">Social</span>
            <span>
              <a class="mdi mdi-linkedin-box" href="https://www.linkedin.com/in/steffbeckers" target="_blank"></a>
              <a class="mdi mdi-facebook-box" href="https://www.facebook.com/BeckersSteff" target="_blank"></a>
              <a class="mdi mdi-twitter" href="https://twitter.com/steffbeckers" target="_blank"></a>
            </span>
          </div>
          <div>
            <span class="info__title">Address</span>
            <span><a href="https://goo.gl/maps/KyGduB3qTaBZVPR46">3945 HAM</a></span>
          </div>
        </section>
        <a class="hi__download-cv btn" href="/downloads/CV_SteffBeckers.pdf">Download CV</a>
      </section>
      <section class="hi__profile-picture">
        <g-image class="profile-picture__image" src="~/assets/images/steff.jpg" width="150" height="150" />
      </section>
    </section>
    <section class="skills">
      <section class="skills__text">
        <h1>Skills<span class="underscore">_</span></h1>
        <h3>I try to learn something new every single day</h3>
        <p>
          The skills are sorted by relevance and knowledge.
        </p>
      </section>
      <section class="skills__overview">
        <section class="skill__tags">
          <span class="skill__tag">All</span>
          <span class="skill__tag">Web</span>
          <span class="skill__tag">Mobile</span>
          <span class="skill__tag">Database</span>
          <span class="skill__tag">Scripting</span>
          <span class="skill__tag">DevOps</span>
          <span class="skill__tag">Infra & Cloud</span>
          <span class="skill__tag">Tools</span>
          <span class="skill__tag">Other</span>
        </section>
        <section class="skill__list">
          <div class="skill" v-for="edge in $page.skills.edges" :key="edge.node.id">
            <g-image
              v-if="edge.node.devicon != ''"
              class="skill__devicon"
              :src="'https://icongr.am/devicon/' + edge.node.devicon + '.svg?size=25'"
              width="25"
              height="25"
            />
            <span class="skill__title" :title="edge.node.description">{{ edge.node.title }}</span>
          </div>
        </section>
      </section>
    </section>
  </Layout>
</template>

<page-query>
query {
  skills: allSkill(sortBy: "rating", order: DESC) {
    edges {
      node {
        id
        title
        description
        rating
        tags {
          title
          description
        }
        devicon
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

  .hi__info {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      padding: 5px 0px;
    }

    .info__title {
      display: inline-block;
      min-width: 100px;
      font-weight: bold;
    }

    a.mdi {
      padding-right: 10px;
    }
  }

  .hi__download-cv {
    margin-top: 30px;
  }
}

.skills {
  display: flex;

  padding-top: 30px;
  padding-bottom: 30px;

  .skills__text {
    flex-basis: 33%;

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
    flex-basis: 66%;
    flex-direction: column;

    margin-top: 10px;

    h4 {
      margin-top: 0px;
      margin-bottom: 10px;
    }
  }

  .skill__tags {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between;

    margin-bottom: 10px;

    .skill__tag {
      display: block;

      padding: 2px;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 10px;

      font-weight: bold;

      border: 1px solid #000000;
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
  }
}
</style>

<script>
export default {
  metaInfo: {
    title: "Hi! I am"
  }
};
</script>
