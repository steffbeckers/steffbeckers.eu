<template>
  <div class="mobile-navigation">
    <transition name="fade">
      <div v-if="showNavigation">
        <div
          class="links shadow-inner flex flex-col items-stretch space-y-4"
          @click="showNavigation = false"
        >
          <NuxtLink class="root-link" to="/">Hi!</NuxtLink>
          <NuxtLink to="/experience">Experience</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <ColorModeSwitcher />
        </div>
      </div>
    </transition>
    <div>
      <button
        class="menu-fab p-0 rounded-full active:shadow-xl mouse shadow-lg transition ease-in duration-200 focus:outline-none"
        @click="showNavigation = !showNavigation"
      >
        <div class="mdi mdi-menu"></div>
      </button>
    </div>
  </div>
</template>

<script>
import ColorModeSwitcher from './ColorModeSwitcher'

export default {
  components: {
    ColorModeSwitcher,
  },
  data() {
    return {
      showNavigation: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.mobile-navigation {
  position: relative;

  .links {
    position: fixed;
    bottom: 0px;
    z-index: 2;

    width: 100%;

    padding-top: 24px;
    padding-bottom: 32px;

    background-color: var(--color-bg-secondary);

    a {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;

      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    a::after {
      content: '_';
      opacity: 0;
    }
    a:hover::after {
      opacity: 1;
    }

    div.color-mode-switcher {
      margin-top: 32px;
      margin-right: auto;
      margin-left: auto;

      transform: scale(1.5);
    }
  }

  .menu-fab {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2;

    min-width: unset;
    width: 75px;
    height: 75px;

    div.mdi {
      font-size: 32px;
    }
  }
}
</style>
