<template>
  <aside class="menu column is-2-desktop">
    <button 
      class="toggle-filter-btn is-hidden-desktop" 
      @click="toggleFilters = !toggleFilters">
      {{ !toggleFilters ? 'Show filters' : 'Hide filters' }}
    </button>
    <div class="filter" :class="{ 'filter--show' : toggleFilters }">
      <genre-filter />
      <user-rating-filter />
    </div>
  </aside>
</template>

<script>
import GenreFilter from '@/components/GenreFilter.vue'
import UserRatingFilter from '@/components/UserRatingFilter'

export default {
  name: 'Sidebar',

  components: {
    GenreFilter,
    UserRatingFilter
  },

  data () {
    return {
      toggleFilters: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/utilities/variables.scss';
  @import '~sass-mq';

  .filter {
    display: none;

    @include mq($from: $desktop) {
      display: block;
    }

    &--show {
      display: block;
    }
  }
</style>


