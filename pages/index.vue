<template>
  <main class="flex flex-col gap-4">
    <img
      class="rounded-full shadow-md"
      src="~/assets/images/steff.jpg"
      alt="Steff"
      width="150"
      height="150"
    />
    <div>
      <h1 class="text-3xl">Hi! I am Steff</h1>
      <h2 class="text-lg text-cyan-500 font-mono font-bold">
        Full stack .NET/Angular developer - DevOps enthusiast
      </h2>
    </div>
    <div class="flex flex-col gap-2">
      <p>
        Developer with a passion for web development and DevOps.<br />
        Motivated to expand knowledge and skills with the latest technologies and frameworks.
      </p>
      <p>
        Loves working on projects as a team player in an agile environment.<br />
        Focused on getting it right, and aware that small details can have a big impact.
      </p>
      <p>
        Feel free to get in touch or download my CV.<br />
        Last updated on 04/05/2021.
      </p>
    </div>
    <div class="flex flex-row gap-4">
      <a href="/downloads/CV_SteffBeckers.pdf" target="_blank">
        <Button>Download CV</Button>
      </a>
      <NuxtLink to="#contact">
        <Button>Get in touch</Button>
      </NuxtLink>
    </div>
  </main>
</template>
