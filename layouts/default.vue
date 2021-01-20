<template>
  <div class="layout mx-auto">
    <header class="header">
      <NuxtLink to="/">
        <section class="logo" @click="showMobileNav = false">
          <span class="logo__text">
            <span class="logo__text--top"
              ><span class="bold">Steff</span> Beckers</span
            >
            <span class="logo__text--bottom text-gradient">Developer</span>
          </span>
        </section>
      </NuxtLink>
      <nav class="nav">
        <NuxtLink class="nav__link root-link" to="/">Hi!</NuxtLink>
        <NuxtLink class="nav__link" to="/experience">Experience</NuxtLink>
        <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="nav__link" to="/contact">Contact</NuxtLink>
      </nav>
      <nav class="nav-mobile-toggle">
        <span
          class="menu mdi mdi-menu"
          @click="showMobileNav = !showMobileNav"
        ></span>
      </nav>
    </header>
    <transition name="fade">
      <nav
        v-if="showMobileNav"
        class="nav-mobile"
        @click="showMobileNav = false"
      >
        <NuxtLink class="nav__link root-link" to="/">Hi!</NuxtLink>
        <NuxtLink class="nav__link" to="/experience">Experience</NuxtLink>
        <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="nav__link" to="/contact">Contact</NuxtLink>
      </nav>
    </transition>
    <main class="main">
      <Nuxt />
    </main>
    <footer class="footer">
      <span class="footer__copyright"
        >&copy; {{ new Date().getFullYear() }} - Steff<span class="underscore"
          >_</span
        ></span
      >
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileNav: false,
    }
  },
}
</script>

<style lang="scss">
.layout {
  max-width: 960px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  height: 80px;

  position: sticky;
  top: 0;
  z-index: 2;

  background: #ffffff;
  // background: rgba($color: #ffffff, $alpha: 0.8);
  // -webkit-backdrop-filter: blur(4px);
  // backdrop-filter: blur(4px);
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
  top: 77px;
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

.nav__link {
  font-size: 1.1rem;

  margin-left: 20px;
  color: #000000;
  cursor: pointer;

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
  content: '_';
  opacity: 0;
}

.nav__link:hover::after {
  opacity: 1;
}

.nav__link.nuxt-link-exact-active,
.nav__link.nuxt-link-active:not(.root-link) {
  color: #53bceb;
}

.main {
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.9em;
  text-align: center;

  margin-top: 10px;
  padding: 10px 20px;
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
</style>
