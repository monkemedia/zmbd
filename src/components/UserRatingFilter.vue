<template>
  <div>
    <p class="menu-label">
      User Ratings
    </p>
    <div class="menu-list">
      <vue-slider
        v-model="userRatingFilter"
        :min="min"
        :max="max" />
        <div class="range-values">
          <div class="range-values__min">
            Min: {{ userRatingFilter ? userRatingFilter[0] : 'error' }}
          </div>
          <div class="range-values__max">
            Min: {{ userRatingFilter ? userRatingFilter[1] : 'error' }}
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
  @import '~vue-slider-component/theme/default.css';

  .range-values {
    display: flex;
    justify-content: space-between
  }
</style>


