<template>
  <Layout>
    <h1>Work experience<span class="underscore">_</span></h1>
    <section class="experience">
      <article class="job">
        <h2>Analyst Developer</h2>
        <h3>July 2017 - Present</h3>
        <p>
          aariXa's development stack includes: Angular, .NET Core, MS SQL, Azure, Windows Server, ... so mainly focused
          on Microsoft technologies. I have been working on a new Cloud Native, realtime, multi-tenant web app hosted as
          microservices which run in Docker containers as an in-house developer.
        </p>
        <p>
          I have migrated aariXa's existing Dynamics CRM 2011 to a new .NET based CRM package and customized the CRM
          with new business logic.
        </p>
        <p>
          As one of the few in-house developers, I've also been doing some DevOps and system administration. Moving
          existing applications to new containers or virtual machines, but also monitoring and maintaining aariXa's
          infrastructure.
        </p>
      </article>
      <article class="job">
        <h2>Consultant for CTG on behalf of Bridgestone Europe</h2>
        <h3>October 2016 - June 2017</h3>
        <p>
          I have worked on a project for Bridgestone as CRM Developer, customizing Dynamics 365 CRM with business logic.
          Like writing plugins in C# and building custom UI components and apps with TypeScript, Knockout.js and many
          more of the latest technologies.
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
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;

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
  border-bottom: none;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Experience"
  }
};
</script>
