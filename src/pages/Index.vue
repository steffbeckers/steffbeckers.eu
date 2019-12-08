<template>
  <Layout>
    <section class="hi">
      <section class="hi__profile-picture">
        <g-image
          class="profile-picture__image"
          src="~/assets/images/steff.jpg"
          width="100"
          height="100"
        />
      </section>
      <section class="hi__text">
        <h1>Hi! I am Steff<span class="underscore">_</span></h1>
        <h3>Full stack developer / DevOps enthusiast</h3>
        <p>
          Developer with a passion for web development and DevOps. Motivated to
          expand knowledge and skills with the latest technologies and
          frameworks.
        </p>
        <p>
          Loves working on projects as a teamplayer in an agile environment.
          Focused on getting it right, and aware that small details can have a
          big impact.
        </p>
        <a class="hi__download-cv btn" href="/downloads/CV_SteffBeckers.pdf"
          >Download CV</a
        >
      </section>
    </section>
  </Layout>
</template>

<style lang="scss">
.profile-picture__image {
  border-radius: 50%;
}

.hi {
  display: flex;

  .hi__profile-picture {
    margin-right: 40px;
  }

  .hi__text {
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
    margin-top: 10px;
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
