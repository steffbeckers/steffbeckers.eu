<template>
  <div class="layout">
    <header class="header">
      <section class="logo">
        <g-link to="/">
          <span class="logo__text">
            <span class="logo__text--top"
              ><span class="bold">Steff</span> Beckers_</span
            >
            <span class="logo__text--bottom">Developer</span>
          </span>
        </g-link>
      </section>
      <nav class="nav">
        <g-link class="nav__link" to="/">Hi!</g-link>
        <g-link class="nav__link" to="/projects">Projects</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
      </nav>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <span class="footer__copyright"
        >Copyright © {{ new Date().getFullYear() }} - Steff Beckers</span
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
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
  height: 80px;
}

.logo__text {
  display: flex;
  flex-direction: column;

  text-transform: uppercase;
  text-decoration: none;
}

.logo__text--top {
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
}
.nav__link:hover {
  text-decoration: underline;
}
</style>
