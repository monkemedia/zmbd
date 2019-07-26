<template>
  <div class="section">
    <div class="columns is-desktop">
      <div class="column is-2-desktop is-hidden-mobile is-hidden-tablet-only">
      </div>
      <div class="column is-10-desktop">
        <h1 class="title">Movies now playing</h1>
      </div>
    </div>
    <div class="columns is-desktop">
      <sidebar />
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-desktop">
          <movie-stub v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
          <div v-if="!filteredMovies.length" class="no-movies has-text-centered">
            <p class="subtitle">(๑◕︵◕๑) Sorry, there are no results.</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import ApiService from '@/services/ApiService.js'
import MovieStub from '@/components/MovieStub.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',

  components: {
    MovieStub,
    Sidebar
  },

  data () {
    return {
      movies: [],
      filteredMovies: []
    }
  },

  computed: {
    genreFilter () {
      return this.$store.getters['getGenreFilters']
    },

    userRatingFilter () {
      return this.$store.getters['getUserRatingFilters']
    }
  },

  watch: {
    genreFilter () {
      this.genreFilterHandler()
    },

    userRatingFilter () {
      this.userRatingFilterHandler()
    }
  },

  async mounted () {
    let response

    try {
      response = await ApiService.moviesNowPlaying()
      this.movies = response.results
    } catch (err) {
      console.log(err)
    }
  },

  methods: {
    genreFilterHandler () {
      this.filteredMovies  = this.movies.filter(movie => {
        return movie.genre_ids.every(id => {
          return this.genreFilter.includes(id)
        })
      })
    },

    userRatingFilterHandler () {
      const [min, max] = this.userRatingFilter

      this.filteredMovies = this.movies.filter(movie => movie.vote_average >= min && movie.vote_average <= max)
    }
  }
}
</script>

<style lang="scss">
  @import 'sass-rem';

  .no-movies {
    width: 100%;
    padding-top: rem(40px);
  }
</style>

