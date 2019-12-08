<template>
  <div class="layout">
    <header class="header">
      <section class="logo">
        <span class="logo__text">
          <span class="logo__text--top"
            ><span class="bold">Steff</span> Beckers</span
          >
          <span class="logo__text--bottom text-gradient">Developer</span>
        </span>
      </section>
      <nav class="nav">
        <g-link class="nav__link" to="/">Hi!</g-link>
        <g-link class="nav__link" to="/experience">Experience</g-link>
        <g-link class="nav__link" to="/portfolio">Portfolio</g-link>
        <g-link class="nav__link" to="/skills">Skills</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
      </nav>
    </header>
    <main class="main">
      <slot />
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
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
  z-index: 10;

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

.nav__link.active--exact {
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
