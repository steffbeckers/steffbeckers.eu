<template>
  <div
    class="footer mt-auto flex flex-row sm:flex-col pt-10 pb-2 justify-center sm:items-center"
  >
    <div class="copyright">
      <a href="https://github.com/steffbeckers" target="_blank">
        &copy; {{ now.getFullYear() }} - Steff Beckers</a
      ><span class="underscore">_</span>
    </div>
    <div class="sm:hidden ml-2 mr-2">/</div>
    <div class="last-updated">
      <a
        href="https://app.netlify.com/sites/steffbeckers/deploys"
        target="_blank"
      >
        Last updated on {{ lastUpdatedOn | formatDateTime
        }}<span class="underscore">_</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date(),
      lastUpdatedOn: process.env.lastUpdatedOn,
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
