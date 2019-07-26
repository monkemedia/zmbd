<template>
  <aside class="menu column is-2-desktop">
    <button 
      :class="{ 'is-toggled' : toggleFilters }"
      class="toggle-filter-btn is-hidden-desktop button is-dark" 
      @click="toggleFilters = !toggleFilters">
      <svg class="toggle-filter-btn__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
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
  @import '~sass-rem';
  @import '~sass-mq';

  .filter {
    display: none;
    margin-top: rem(20px);
    border: 1px $grey-lighter solid;
    padding: rem(20px);
    background: $white;

    @include mq($from: $desktop) {
      display: block;
      margin-top: 0;
      padding: 0;
      border: 0;
      background: transparent;
    }

    &--show {
      display: block;
    }
  }

  .toggle-filter-btn {
    min-width: rem(122px);
    padding-left: rem(24px);
    position: relative;

    &__icon {
      width: rem(9px);
      transition: transform .2s ease-in-out;
      transform: rotate(0);
      position: absolute;
      left: 10px;
      fill: $primary;
    }

    &.is-toggled {
      .toggle-filter-btn__icon {
        transform: rotate(135deg);
      }
    }
  }
</style>
