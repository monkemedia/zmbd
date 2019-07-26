<template>
  <div class="user-ratings-filter">
    <p class="menu-label">
      User Ratings
    </p>
    <div class="menu-list">
      <vue-slider
        v-model="userRatingFilter"
        :tooltip="'none'"
        :min="min"
        :max="max" />
        <div class="range-values">
          <div class="range-values__min">
            Min: {{ userRatingFilter ? userRatingFilter[0] : 'error' }}
          </div>
          <div class="range-values__max">
            Max: {{ userRatingFilter ? userRatingFilter[1] : 'error' }}
          </div>
        </div>
    </div>
  </div>
  
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  name: 'UserRatingFilter',

  components: {
    VueSlider
  },

  data () {
    return {
      min: 0,
      max: 10
    }
  },

  computed: {
    userRatingFilter: {
      get () {
        return this.$store.getters['getUserRatingFilters']
      },

      set (val) {
        this.$store.commit('SET_USER_RATING_FILTER', val)
      }
    }

  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/utilities/variables.scss';
  @import '~vue-slider-component/theme/default.css';
  @import 'sass-rem';

  .user-ratings-filter {
    margin-top: rem(40px);
  }

  .menu-label {
    font-weight: 500;
    color: $grey-light;
  }

  .range-values {
    display: flex;
    justify-content: space-between;
    font-size: rem(13px);
    text-transform: uppercase;
    font-weight: 500;
    color: $grey;
    margin-top: rem(10px);
  }

  /deep/ .vue-slider-process {
    background-color: $primary;
  }
</style>


