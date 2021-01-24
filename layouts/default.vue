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
        <!-- TODO: Remove duplicate code in mobile menu layout -->
        <NuxtLink class="nav__link root-link" to="/">Hi!</NuxtLink>
        <NuxtLink class="nav__link" to="/experience">Experience</NuxtLink>
        <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="nav__link" to="/contact">Contact</NuxtLink>
        <div class="color-mode-switcher" @click="toggleColorMode()">
          <svg
            v-if="$colorMode.value === 'light'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-sun"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            v-if="$colorMode.value === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </nav>
      <nav @click="showMobileNav = !showMobileNav" class="nav-mobile-toggle">
        <span class="menu mdi mdi-menu"></span>
      </nav>
    </header>
    <transition name="fade">
      <nav
        v-if="showMobileNav"
        class="nav-mobile no-selection"
        @click="showMobileNav = false"
      >
        <NuxtLink class="nav__link root-link" to="/">Hi!</NuxtLink>
        <NuxtLink class="nav__link" to="/experience">Experience</NuxtLink>
        <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="nav__link" to="/contact">Contact</NuxtLink>
        <div class="color-mode-switcher" @click="toggleColorMode()">
          <svg
            v-if="$colorMode.value === 'light'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-sun"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            v-if="$colorMode.value === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
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
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
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
}

.color-mode-switcher {
  margin-left: 20px;
  cursor: pointer;
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
  justify-content: flex-end;

  position: fixed;
  width: 100%;
  top: 77px;
  height: calc(100vh - 77px);
  z-index: 50;
  padding-bottom: 40px;

  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  text-shadow: 2px 2px 4px #ffffff;
}
.dark .nav-mobile {
  text-shadow: 2px 2px 4px #000000;
}

.nav-mobile-toggle {
  font-size: 28px;

  height: 80px;
  width: 68px;

  display: none;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.nav__link {
  font-size: 1.1rem;

  margin-left: 20px;
  cursor: pointer;

  text-decoration: none;
  font-weight: bold;

  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.nav__link::after {
  content: '_';
  opacity: 0;
}

.nav__link:hover::after {
  opacity: 1;
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

@media only screen and (max-width: 710px) {
  header.header {
    padding-right: 0px;
  }

  .color-mode-switcher {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 56px;

    margin-left: 0px;
  }

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
