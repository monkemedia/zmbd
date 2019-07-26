<template>
  <div>
    <p class="menu-label">
      Genre filter
    </p>
    <ul class="menu-list">
      <li v-for="genre in genres" :key="genre.id" class="field">
        <input 
          :id="`genre-${genre.id}`" 
          v-model="genreFilter" 
          :value="genre.id" 
          class="is-checkradio is-dark"
          type="checkbox">
        <label :for="`genre-${genre.id}`" class="label">{{ genre.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GenreFilter',

  data () {
    return {
      filters: []
    }
  },

  computed: {
    genres () {
      return this.$store.getters['getGenres']
    },

    genreFilter: {
      get () {
        return this.$store.getters['getGenreFilters']
      },

      set (val) {
        this.$store.commit('SET_GENRE_FILTER', val)
      }
    }
  },

  mounted () {
    this.filters = this.genreFilter
  }
}
</script>

<style lang="scss" scoped>
  @import '~bulma-checkradio';
  @import 'sass-rem';
  @import '@/assets/scss/utilities/variables.scss';

  .menu-label {
    font-weight: 500;
    color: $grey-light;
  }

  .menu-list {
    display: flex;
    flex-wrap: wrap;

    .field {
      width: 100%;
    }

    .label {
      font-size: rem(13px) !important;
      font-weight: 500;
      color: $grey;
      padding-top: rem(4px) !important;
      padding-bottom: rem(4px) !important;
    }
  }
</style>


