<template>
  <ul class="genre-list">
    <li v-for="(genre, index) in convertIdToGenre" :key="genre.id">
        {{ genre.name }} <span v-if="index + 1 < convertIdToGenre.length">/</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GenreList',

  props: {
    genreIds: {
      type: Array,
      required: true
    }
  },

  computed: {
    genres () {
      return this.$store.getters['getGenres']
    },

    convertIdToGenre () {
      return this.genres.filter(genre => {
        return this.genreIds.includes(genre.id)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/utilities/variables.scss';
  @import '~sass-rem';

  .genre-list {
    display: flex;
    flex-wrap: wrap;
    font-weight: 500;
    font-size: rem(14px);
    color: $grey;

    span {
      margin-right: rem(5px);
    }
  }
</style>


