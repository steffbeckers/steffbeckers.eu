<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col">
        <h1>Work experience<span class="underscore">_</span></h1>
        <div class="subtitle">Many lines of code and coffee</div>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col">
          <a href="https://www.aarixa.be" target="_blank">
            <img
              v-if="$colorMode.value === 'light'"
              class="logo mb-2"
              src="~/assets/images/logos/aariXa.png"
              alt="Logo aariXa"
            />
            <img
              v-if="$colorMode.value === 'dark'"
              class="logo mb-2"
              src="~/assets/images/logos/aariXa-white.png"
              alt="Logo aariXa"
            />
          </a>
          <h2>Analyst Developer</h2>
          <div class="subtitle">July 2017 - Present</div>
        </div>
        <div class="flex flex-col space-y-2">
          <p>
            aariXa's development stack includes: Angular, .NET Core, MS SQL,
            Azure, Windows Server, ... so mainly focused on Microsoft
            technologies. I have been working on a new Cloud Native, realtime,
            multi-tenant web app hosted as microservices which run in Docker
            containers as an in-house developer.
          </p>
          <p>
            I have migrated aariXa's existing Dynamics CRM 2011 to a new .NET
            based CRM package and customized the CRM with new business logic.
          </p>
          <p>
            As one of the few in-house developers, I've also been doing some
            DevOps and system administration. Moving existing applications to
            new containers or virtual machines, but also monitoring and
            maintaining aariXa's infrastructure.
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <h3>Mainly used skills and technologies</h3>
          <skills-list
            :skills="[
              {
                name: '.NET',
              },
              {
                name: 'C#',
              },
              {
                name: 'Angular',
              },
              {
                name: 'TypeScript',
              },
              {
                name: 'SQL Server',
              },
              {
                name: 'Docker',
              },
              {
                name: 'Microservices',
              },
              {
                name: 'Azure',
              },
              {
                name: 'Windows Server',
              },
              {
                name: 'Ubuntu Server',
                icon: 'ubuntu.png',
              },
              {
                name: 'Azure DevOps',
              },
            ]"
          ></skills-list>
        </div>
      </div>
      <hr />
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col">
          <div class="flex flex-row items-center space-x-4">
            <a href="https://be.ctg.com" target="_blank">
              <img
                class="logo mb-2"
                src="~/assets/images/logos/CTG.gif"
                alt="Logo CTG"
              />
            </a>
            <a href="https://www.bridgestone.eu" target="_blank">
              <img
                v-if="$colorMode.value === 'light'"
                class="logo mb-2"
                src="~/assets/images/logos/Bridgestone.png"
                alt="Logo Bridgestone"
              />
              <img
                v-if="$colorMode.value === 'dark'"
                class="logo mb-2"
                src="~/assets/images/logos/Bridgestone-white.png"
                alt="Logo Bridgestone"
              />
            </a>
          </div>
          <h2>Consultant for CTG on behalf of Bridgestone Europe</h2>
          <div class="subtitle">October 2016 - June 2017</div>
        </div>
        <div class="flex flex-col space-y-2">
          <p>
            I have worked on a project for Bridgestone as CRM Developer,
            customizing Dynamics 365 CRM with business logic. Like writing
            plugins in C# and building custom UI components and apps with
            TypeScript, Knockout.js and many more of the latest technologies.
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <h3>Mainly used skills and technologies</h3>
          <SkillsList
            :skills="[
              {
                name: 'Dynamics 365 CRM',
              },
              {
                name: 'C#',
              },
              {
                name: 'TypeScript',
              },
              {
                name: 'HTML5',
              },
              {
                name: 'CSS3',
              },
              {
                name: 'SASS',
                devicon: 'sass-original',
              },
            ]"
          />
        </div>
      </div>
    </div>
    <hr />
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col">
        <h1>Certification<span class="underscore">_</span></h1>
        <div class="subtitle">Verification of knowledge and skills</div>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col">
          <div class="flex flex-row">
            <img
              class="logo mb-2"
              src="https://icongr.am/devicon/csharp-original.svg?size=40"
              alt="Logo C#"
            />
          </div>
          <a
            href="https://www.microsoft.com/en-us/learning/exam-70-483.aspx"
            target="_blank"
          >
            <h2>Microsoft Exam 70-483 - Programming in C#</h2>
          </a>
          <div class="subtitle">September 21st, 2018</div>
        </div>
      </div>
    </div>
    <hr />
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col">
        <h1>Education<span class="underscore">_</span></h1>
        <div class="subtitle">Hours of learning new technologies</div>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col">
          <a href="https://www.pxl.be/toegepaste-informatica" target="_blank">
            <img
              v-if="$colorMode.value === 'light'"
              class="logo mb-2"
              src="~/assets/images/logos/PXL_IT.png"
              alt="Logo PXL-IT"
            />
            <img
              v-if="$colorMode.value === 'dark'"
              class="logo mb-2"
              src="~/assets/images/logos/PXL_IT-white.png"
              alt="Logo PXL-IT"
            />
          </a>
          <a href="https://www.pxl.be/applicatieontwikkeling" target="_blank">
            <h2>Professional Bachelor's Degree in Applied Computer Science</h2>
          </a>
          <div class="subtitle">September 2013 - June 2016</div>
        </div>
        <div class="flex flex-col space-y-2">
          <p>
            I studied Applied Computer Science at university college PXL,
            Hasselt.
          </p>
          <p>
            Specialization track: Application Development - Web &amp; Mobile
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Experience - Steff Beckers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "aariXa's development stack includes: Angular, .NET Core, MS SQL, Azure, Windows Server, ... so mainly focused on Microsoft technologies. I have been working on a new Cloud Native, realtime, multi-tenant web app hosted as microservices which run in Docker containers as an in-house developer.",
      },
      {
        name: 'keywords',
        content:
          'Steff, Beckers, Experience, Work, aariXa, CTG, Certificates, Education, Hogeschool PXL, Applied Computer Science',
      },
    ],
  },
}
</script>

<style>
.logo {
  max-width: 200px;
  max-height: 50px;
}
</style>
