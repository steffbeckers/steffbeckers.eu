<template>
  <Layout>
    <h1>Work experience<span class="underscore">_</span></h1>
    <section class="experience">
      <article class="job">
        <a class="logo__link" href="https://www.aarixa.be" target="_blank">
          <g-image class="logo" src="~/assets/images/aariXa.png" alt="Logo aariXa" height="40" fit="inside" />
        </a>
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
        <a class="logo__link" href="https://be.ctg.com" target="_blank">
          <g-image class="logo" src="~/assets/images/CTG.gif" alt="Logo CTG" height="40" fit="inside" />
        </a>
        <a class="logo__link" href="https://www.bridgestone.eu" target="_blank">
          <g-image
            class="logo"
            style="margin-bottom: 5px;"
            src="~/assets/images/Bridgestone.png"
            alt="Logo Bridgestone"
            width="200"
            fit="inside"
          />
        </a>
        <h2>Consultant for CTG on behalf of Bridgestone Europe</h2>
        <h3>October 2016 - June 2017</h3>
        <p>
          I have worked on a project for Bridgestone as CRM Developer, customizing Dynamics 365 CRM with business logic.
          Like writing plugins in C# and building custom UI components and apps with TypeScript, Knockout.js and many
          more of the latest technologies.
        </p>
        <span class="bold">Mainly used skills</span>
        <div class="skills">
          <div class="skill">
            <g-image class="skill__icon" src="~/assets/images/Dynamics_365.png" width="25" height="25" />
            <span>Dynamics 365 CRM</span>
          </div>
          <div class="skill">
            <g-image
              class="skill__icon"
              :src="'https://icongr.am/devicon/csharp-original.svg?size=25'"
              width="25"
              height="25"
            />
            <span>C#</span>
          </div>
          <div class="skill">
            <g-image
              class="skill__icon"
              src="https://icongr.am/devicon/typescript-original.svg?size=25"
              width="25"
              height="25"
            />
            <span>TypeScript</span>
          </div>
          <div class="skill">
            <g-image
              class="skill__icon"
              :src="'https://icongr.am/devicon/html5-original.svg?size=25'"
              width="25"
              height="25"
            />
            <span>HTML5</span>
          </div>
          <div class="skill">
            <g-image
              class="skill__icon"
              :src="'https://icongr.am/devicon/css3-original.svg?size=25'"
              width="25"
              height="25"
            />
            <span>CSS3</span>
          </div>
          <div class="skill">
            <g-image
              class="skill__icon"
              :src="'https://icongr.am/devicon/sass-original.svg?size=25'"
              width="25"
              height="25"
            />
            <span>SASS</span>
          </div>
        </div>
      </article>
    </section>
    <h1>Education<span class="underscore">_</span></h1>
    <section class="education">
      <article class="course">
        <a class="logo__link" href="https://www.pxl.be/toegepaste-informatica" target="_blank">
          <g-image class="logo" src="~/assets/images/PXL_IT.png" alt="Logo PXL-IT" height="40" fit="inside" />
        </a>
        <h2>Professional Bachelor’s Degree in Applied Computer Science</h2>
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
    margin-top: 10px;
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

.education {
  display: flex;
  flex-direction: column;
}

.course {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;

  h2 {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #53bceb;
    font-family: monospace;
  }
}
.course:last-of-type {
  margin-bottom: 0px;
  border-bottom: none;
}

.skills {
  display: flex;
  padding: 0px;
  margin-top: 10px;

  .skill {
    display: flex;

    margin-bottom: 10px;
    margin-right: 15px;

    .skill__icon {
      margin-right: 5px;
    }
  }
}

.logo__link {
  margin-right: 20px;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Experience"
  }
};
</script>
