<template>
  <div class="column is-6-desktop">
    <div class="movie-stub">
      <div class="movie-stub__image">
        <figure class="image">
          <img :src="`${imageBaseUrl + imageSize + movie.poster_path}`" :alt="movie.title" />
        </figure>
      </div>

      <div class="movie-stub__content">
        <header>
          <p class="movie-stub__year">{{ movieYear }}</p>          
          <p class="movie-stub__title">{{ movie.title }}</p>
          <span class="movie-stub__user-ratings">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            <p>{{ movie.vote_average }}/10</p>
          </span>
          <genre-list :genre-ids="movie.genre_ids" />
        </header>
        <p class="movie-stub__overview">{{ truncateOverview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import GenreList from '@/components/GenreList'

export default {
  name: 'MovieStub',

  components: {
    GenreList
  },

  props: {
    movie: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      imageSize: 'w200',
      imageBaseUrl: 'https://image.tmdb.org/t/p/',
      truncateLength: 90
    }
  },

  computed: {
    movieYear () {
      const releaseDate = this.movie.release_date
      return releaseDate ? moment(releaseDate).format('YYYY') : ''
    },

    truncateOverview () {
      const overview = this.movie.overview
      return overview && overview.length >= this.truncateLength ? `${overview.substring(0, this.truncateLength)}...` : overview
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'sass-rem';
  @import '@/assets/scss/utilities/variables.scss';

  .movie-stub {
    display: flex;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
    height: 100%;
    padding: rem(10px);

    &__image {
      flex: 1 0 0;

      img {
        display: flex;
      }
    }

    &__content {
      padding: rem(10px) 0 rem(10px) rem(20px);
      flex: 2 0 0;
    }

    &__user-ratings {
      display: flex;
      font-weight: 600;
      font-size: rem(15px);
      margin-bottom: rem(10px);

      svg {
        margin-right: rem(6px);
        fill: $yellow;
        width: rem(17px);
      }

      p {
        line-height: 1.7;
      }
    }

    &__year {
      color: $grey;
      font-weight: 600;
      font-size: rem(13px);
    }

    &__title {
      // text-transform: uppercase;
      font-weight: 600;
      font-size: rem(20px);
      color: $primary;
      margin: rem(10px) 0 0;
    }

    &__overview {
      font-size: rem(13px);
    }
  }
</style>


