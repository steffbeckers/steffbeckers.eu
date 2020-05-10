<template>
  <div class="layout">
    <header class="header">
      <section class="logo">
        <span class="logo__text">
          <span class="logo__text--top"><span class="bold">Steff</span> Beckers</span>
          <span class="logo__text--bottom text-gradient">Developer</span>
        </span>
      </section>
      <nav class="nav">
        <g-link class="nav__link root-link" to="/">Hi!</g-link>
        <g-link class="nav__link" to="/experience">Experience</g-link>
        <!-- TODO -->
        <!-- <g-link class="nav__link" to="/portfolio">Portfolio</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link> -->
        <g-link class="nav__link" to="/contact">Contact</g-link>
      </nav>
      <nav class="nav-mobile-toggle">
        <span @click="showMobileNav = !showMobileNav" class="menu mdi mdi-menu"></span>
      </nav>
    </header>
    <transition name="fade">
      <nav v-if="showMobileNav" class="nav-mobile">
        <g-link class="nav__link root-link" to="/">Hi!</g-link>
        <g-link class="nav__link" to="/experience">Experience</g-link>
        <!-- TODO -->
        <!-- <g-link class="nav__link" to="/portfolio">Portfolio</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link> -->
        <g-link class="nav__link" to="/contact">Contact</g-link>
      </nav>
    </transition>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <span class="footer__copyright"
        >&copy; {{ new Date().getFullYear() }} - Steff<span class="underscore">_</span></span
      >
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: "Lato", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  width: 100%;
  height: 80px;

  position: sticky;
  top: 0;
  z-index: 20000;

  background: #ffffff;

  /* background: transparent;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px); */
}

.logo__text {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  line-height: 1;
}

.logo__text--top {
  font-size: 26px;
}

.logo__text--bottom {
  font-size: 26px;
  letter-spacing: 5.5px;
}

.nav {
  display: flex;

  .menu {
    display: block;
    font-size: 24px;
    margin-top: 40px;
  }
}

.nav-mobile {
  display: none;
  flex-direction: column;

  position: fixed;
  width: 100%;
  top: 80px;
  z-index: 50;

  background: rgba($color: #ffffff, $alpha: 0.8);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.nav-mobile-toggle {
  display: none;
  font-size: 28px;
  padding: 20px;
  padding-right: 0px;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .nav {
    display: none;
  }

  .nav-mobile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .nav__link {
      margin-left: 0px;
      font-size: 1.5em;
      width: 100%;
      text-align: center;
      padding: 10px;
    }
  }
  .nav-mobile-toggle {
    display: flex;
  }
}

.nav__link {
  margin-left: 20px;
  color: #000000;

  text-decoration: none;
  font-weight: bold;

  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.nav__link:hover {
  color: #7dc363;
}

.nav__link::after {
  content: "_";
  opacity: 0;
}

.nav__link:hover::after {
  opacity: 1;
}

.nav__link.active--exact,
.nav__link.active:not(.root-link) {
  color: #53bceb;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.9em;
  text-align: center;

  margin-top: 20px;
  padding: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      showMobileNav: false,
    };
  },
};
</script>
