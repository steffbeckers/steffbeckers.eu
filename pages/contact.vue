<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col">
        <h1>Get in touch<span class="underscore">_</span></h1>
        <h3>
          Add me on
          <a href="https://linkedin.com/in/steffbeckers" target="_blank"
            >LinkedIn</a
          >, follow me on
          <a href="https://github.com/steffbeckers" target="_blank">GitHub</a>
          or just contact me by <a href="tel:+32499765192">phone</a> or
          <a href="mailto:steff@steffbeckers.eu">e-mail</a>
        </h3>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-row">
          <h4 class="info-title">Name</h4>
          <div>Steff Beckers</div>
        </div>
        <div class="flex flex-row">
          <h4 class="info-title">Address</h4>
          <div>
            <a href="https://goo.gl/maps/KyGduB3qTaBZVPR46"
              >3945 HAM<br />Belgium</a
            >
          </div>
        </div>
        <div class="flex flex-row">
          <h4 class="info-title">Phone</h4>
          <div><a href="tel:+32499765192">+32 499 765 192</a></div>
        </div>
        <div class="flex flex-row">
          <h4 class="info-title">E-mail</h4>
          <div>
            <a href="mailto:steff@steffbeckers.eu">steff@steffbeckers.eu</a>
          </div>
        </div>
        <div class="flex flex-row">
          <h4 class="info-title">Social</h4>
          <div class="flex flex-row space-x-4">
            <a
              class="mdi mdi-linkedin"
              href="https://linkedin.com/in/steffbeckers"
              target="_blank"
              title="LinkedIn"
            ></a>
            <a
              class="mdi mdi-github"
              href="https://github.com/steffbeckers"
              target="_blank"
              title="GitHub"
            ></a>
            <a
              class="mdi mdi-facebook"
              href="https://facebook.com/steffbeckers"
              target="_blank"
              title="Facebook"
            ></a>
            <a
              class="mdi mdi-twitter"
              href="https://twitter.com/steffbeckers"
              target="_blank"
              title="Twitter"
            ></a>
            <a
              class="mdi mdi-whatsapp"
              href="https://wa.me/32499765192"
              target="_blank"
              title="WhatsApp"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact - Steff Beckers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Get in touch',
      },
      {
        name: 'keywords',
        content:
          'Steff, Beckers, Contact, Name, Address, Phone, E-mail, +32499765192, steff@steffbeckers.eu, Social, LinkedIn, Github, Facebook, Twitter, WhatsApp',
      },
    ],
  },
}
</script>

<style lang="scss">
.info-title {
  width: 100px;
}

a.mdi {
  font-size: 32px;
}
</style>
