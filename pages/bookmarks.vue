<template>
  <div class="flex flex-col space-y-4 sm:space-y-0">
    <div
      class="flex sm:flex-col items-center sm:items-start space-x-4 sm:space-x-0 sm:space-y-4"
    >
      <div
        class="flex flex-grow sm:w-full justify-between items-center space-x-4"
      >
        <div class="flex flex-col">
          <h1>Bookmarks<span class="underscore">_</span></h1>
          <div class="subtitle">
            Steff's personal bookmarks about development and DevOps
          </div>
        </div>
      </div>
      <div class="w-48 sm:w-full flex-none">
        <input
          type="text"
          placeholder="Search"
          :value="searchTerm"
          @input="
            (e) => {
              searchTerm = e.target.value
              search()
            }
          "
        />
      </div>
    </div>
    <div class="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
      <div class="flex flex-col space-y-4 sm:mt-4">
        <p v-if="searchNotFound">
          No bookmarks found with '{{ searchTerm }}' as search term.
          <span
            class="cursor-pointer"
            @click="
              searchTerm = ''
              searchNotFound = ''
            "
            >Clear search</span
          >
        </p>
        <div
          v-for="(bookmark, index) in filteredBookmarks"
          :key="bookmark.url"
          class="flex flex-col space-y-4"
        >
          <hr v-if="index > 0" />
          <a :href="bookmark.url" target="_blank">
            <div class="flex flex-col space-y-2">
              <h2>{{ bookmark.name }}</h2>
              <p v-if="bookmark.description">{{ bookmark.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bookmarks from '~/static/bookmarks.json'
const fuzzysort = require('fuzzysort')

export default {
  asyncData() {
    return {
      bookmarks,
    }
  },
  data() {
    return {
      filteredBookmarks: [],
      searchTerm: '',
      searchNotFound: false,
    }
  },
  head: {
    title: 'Bookmarks - Steff Beckers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Steff's personal bookmarks about development and DevOps.",
      },
      {
        name: 'keywords',
        content:
          'Steff, Beckers, Bookmarks, Links, URL, Dev, Development, DevOps',
      },
    ],
  },
  mounted() {
    this.filteredBookmarks = this.bookmarks
  },
  methods: {
    search() {
      if (this.searchTerm && this.searchTerm.length > 2) {
        const searchResult = fuzzysort.go(this.searchTerm, this.bookmarks, {
          keys: ['name', 'description', 'url', 'keywords'],
          threshold: -10000,
        })

        if (searchResult) {
          this.filteredBookmarks = searchResult.map((out) => out.obj)
        }

        if (this.filteredBookmarks.length > 0) {
          this.searchNotFound = false
        } else {
          this.searchNotFound = true
          this.filteredBookmarks = this.bookmarks
        }
      } else {
        this.filteredBookmarks = this.bookmarks
      }
    },
  },
}
</script>

<style lang="scss">
.top-icons {
  a.mdi {
    font-size: 46px;
  }
}
</style>
