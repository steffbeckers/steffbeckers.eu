<template>
  <Layout>
    <h1>Experience<span class="underscore">_</span></h1>
    <section class="experience">
      <article class="job">
        <h2>Analyst Developer</h2>
        <h3>July 2017 - Present @ aariXa</h3>
        <p>
          I have customized a .NET based CRM package.<br />
          Angular / .NET Core is aariXa's development stack.
        </p>
      </article>
      <article class="job">
        <h2>Consultant for CTG on behalf of Bridgestone Europe</h2>
        <h3>October 2016 - June 2017 @ CTG / Bridgestone</h3>
        <p>
          I have worked on a project for Bridgestone as CRM Developer,
          customizing Dynamics 365 CRM with business logic. Like writing plugins
          in C# and building custom UI components and apps with TypeScript,
          Knockout.js and many more of the latest technologies.
        </p>
      </article>
    </section>
  </Layout>
</template>

<style lang="scss">
.experience {
  display: flex;
  flex-direction: column;
}

.job {
  margin-bottom: 20px;

  h2 {
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
.job:last-of-type {
  margin-bottom: 0px;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Experience"
  }
};
</script>
