<template>
  <Layout>
    <h1>Get in touch<span class="underscore">_</span></h1>
    <section class="contact__info">
      <div>
        <span class="info__title">Name</span>
        <span>Steff Beckers</span>
      </div>
      <div>
        <span class="info__title">Address</span>
        <span
          ><a href="https://goo.gl/maps/KyGduB3qTaBZVPR46">3945 HAM<br />Belgium</a></span
        >
      </div>
      <div></div>
      <div>
        <span class="info__title">Phone</span>
        <span><a href="tel:+32499765192">+32 499 765 192</a></span>
      </div>
      <div>
        <span class="info__title">WhatsApp</span>
        <span
          ><a href="https://wa.me/32499765192"><span class="mdi mdi-whatsapp">&nbsp;</span>+32 499 765 192</a></span
        >
      </div>
      <div>
        <span class="info__title">Email</span>
        <span><a href="mailto:steff@steffbeckers.eu">steff@steffbeckers.eu</a></span>
      </div>
      <div></div>
      <div>
        <span class="info__title">Social</span>
        <span class="info__social-links">
          <a class="mdi mdi-linkedin-box" href="https://www.linkedin.com/in/steffbeckers" target="_blank"></a>
          <a class="mdi mdi-facebook-box" href="https://www.facebook.com/BeckersSteff" target="_blank"></a>
          <a class="mdi mdi-twitter" href="https://twitter.com/steffbeckers" target="_blank"></a>
        </span>
      </div>
    </section>
  </Layout>
</template>

<style lang="scss">
.contact__info {
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    padding: 5px 0px;
  }

  .info__title {
    display: inline-block;
    min-width: 110px;
    font-weight: bold;
  }

  .info__social-links {
    font-size: 24px;
  }

  a.mdi {
    padding-right: 10px;
  }
}
</style>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
};
</script>
