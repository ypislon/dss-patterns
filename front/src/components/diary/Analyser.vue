<template lang="html">
  <div class="">
    <b-button type="button" name="button" @click="analyseDiary()">Analyse pattern</b-button>
    <b-button type="button" name="button" @click="splitPattern(pattern.days, 0)">Split pattern</b-button>
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
      console.log("hey!")
    },
    splitPattern(days, index) {

      var episodes = []

      var days = days
      var i = index

      var startEpisode = function(index) {
        var episode = []
        episode.push(days[j])
        console.log(index)
        var startDateEpisode = index
        var j = index
        var endEpisode = j

        // find last element of the episode
        for(j; j < (days.length - j); j++) {
          console.log("J steht bei " + j)
          if(days[j+1] == undefined) {
            console.log("next day is undefined")
            break
          }
          if(days[j+1].intensity == 0) {
            console.log("next day is breakpoint")
            // console.log(episode)
            endEpisode = j + 1
            episodes.push(days.slice(startDateEpisode, endEpisode))
            break
          }
          if(days[j+1].intensity != 0) {
            console.log("next day is also headache episode")
            // console.log(days.slice(index, j + 1))
            startEpisode(j+1)
          }
        }

        console.log("Ende: " + endEpisode)
        // console.log(days.slice(startDateEpisode, endEpisode))
        console.log(episodes)
      }

      for(i; i < days.length; i++) {
        console.log(i)

        // check if we are on the end of the list of days
        if(days[i] == undefined) {
          console.log("end of days")
          return false
        }

        // if the next day is a 0, we know that all previous numbers until the next 0 are one pattern
        else if(days[i].intensity == 0) {
          console.log("end of episode")
          console.log("breakpoint: " + i)
          return false
        }

        else if(days[i].intensity > 0) {
          console.log("calling start pattern")
          return startEpisode(i)
        }
      }

    },
    breakPattern(days) {
      var i = 0
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
