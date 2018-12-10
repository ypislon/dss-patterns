<template>
  <div>

    <div class="diary-header">
      Diary Number {{pattern.id}} | Username: {{username}}

      <button v-on:click="logData()" type="button" name="button">Log Data</button>
      <button v-on:click="pattern_sorted_f()" type="button" name="button">Log sorted thingy</button>

      <div class="">
        <label for="date">Start date: {{start_date}}</label>
        <input v-model="date" name="date" type="date"><br>
        <label for="intensity">Intensity</label>
        <input v-model="intensity" name="intensity" type="text">
      </div>

      <button v-on:click="toggleLayout()" type="button" name="button">Toggle Layout</button>
    </div>

    <div class="diary-dates" v-bind:class="isRowLayout ? 'row' : ''">
      <Day v-for="day in daySort(pattern.days)" v-bind:key="day.date" v-bind:day="day" />
    </div>

    <div class="diary-add-day">
      <button v-on:click="createDay()" type="button" name="button">Add an entry</button>
    </div>

  </div>

</template>

<script>
import Day from './Day.vue'

export default {
  components: {
    Day
  },
  props: {
    pattern: {
      type: Object,
      required: true
    },
    start_date: {
      type: String,
      required: true,
      default: "2018-01-01"
    },
    user: {
      type: String,
      required: true
    }
  },
  data () {
      return {
        id: this.pattern.id,
        day_id: Math.floor(Math.random() * Math.floor(100)),
        date: this.start_date,
        intensity: this.pattern.intensity,
        username: this.user,
        isRowLayout: false,
        sorted_days: {}
    }
  },
  methods: {
    logData() {
      console.log(this.start_date)
      console.log(this.pattern.days.length)
    },
    createDay() {
      var day = {
        date: this.date,
        intensity: this.intensity
      }
      this.pattern.days.push(day)
    },
    editDay() {
      // submit event to update diary pattern
    },
    daySort(days) {
      return days.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date)
      })
    },
    toggleLayout() {
      if(this.isRowLayout) {
        this.isRowLayout = false
      } else {
        this.isRowLayout = true
      }
    }
  }
}

</script>

<style>
.diary-dates {
  display: flex;
  flex-direction: column;
}

.diary-dates.row {
  flex-direction: row;
}

.diary-dates.row .input {
  flex-direction: column;
}

.diary-dates.row .intensity {
  flex-direction: column-reverse;
}

.diary-add-day {
  margin: 20px;
  text-align: center;
}
</style>
