<template lang="html">
  <div class="">
    <b-button type="button" name="button" @click="analyseDiary()">Analyse pattern</b-button>
    <p>
      <span>Ergebnis:</span>
      <br>
      <span>Average intensity: {{ averageIntensity }}</span>
      <br>
      <span>Number of headache episodes: {{ countHeadacheEpisodes }}</span>
    </p>
  </div>
</template>

<script>
import Day from './Day.vue'
import BootstrapVue from 'bootstrap-vue'

export default {
  components: {

  },
  props: {
    pattern: Object,
    required: true
  },
  data() {
    return {
      migraine: 0,
      tension: 0,
      medicationInduced: 0
    }
  },
  methods: {
    analyseDiary() {

    },
    splitPattern(pattern) {
      pattern.forEach((el) => {
        if(el) {

        } else {

        }
      })
      return
    }
  },
  computed: {
    averageIntensity: function() {
      if(this.pattern.days != undefined) {
        var avg = 0
        var total = 0
        this.pattern.days.forEach((el) => {
          total = total + el.intensity
        })
        return avg = total / this.pattern.days.length
      } else {
        return avg = null
      }
    },
    countHeadacheEpisodes: function() {

      return 0
    },
    episodes: function() {

    }
  }
}
</script>

<style lang="scss">
</style>
