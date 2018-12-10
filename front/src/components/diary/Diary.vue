<template>
  <div>

    <div class="diary-header">
      Diary Number {{pattern.id}} | user: {{username}} | {{ avg }}

      <!-- <button v-on:click="logData()" type="button" name="button">Log Data</button> -->
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
      <!-- <Day v-for="day in daySort(pattern.days)" v-bind:key="day.date" v-bind:day="day" /> -->
      <Day v-for="day in pattern.days" v-bind:key="day.date" v-bind:day="day" />
    </div>

    <div class="diary-add-day">
      <button v-on:click="createDay()" type="button" name="button">Add an entry</button>
      <button v-on:click="calculateAverage()" type="button" name="button">Average</button>
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
        // day_id: Math.floor(Math.random() * Math.floor(100)),
        date: this.start_date,
        intensity: 0,
        isRowLayout: false,
        sorted_days: {},
        username: this.user,
        avg: 0
    }
  },
  methods: {
    createDay() {

      var newDate = 0
      if(this.pattern.days != undefined) {
        if(this.pattern.days.length == 0) {
          var currentDate = new Date(this.start_date)
        } else if (this.pattern.days.length > 0) {
          var currentDate = new Date(this.daySort(this.pattern.days).slice(-1).pop().date)
        }
        newDate = new Date()
        newDate.setDate(currentDate.getDate() + 1)
        var newDateString = newDate.toISOString().substring(0, 10)
      }

      var day = {
        date: newDateString,
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
    },
    calculateAverage() {
      if(this.pattern.days != undefined) {
        var avg = 0
        var total = 0
        // this.pattern.days.forEach(item) {
        //   total = total + item.intensity
        // }
        // console.log(total)
        this.pattern.days.forEach((el) => {
          total = total + el.intensity
          console.log(el.intensity)
        })
        console.log("total")
        console.log(total)

        avg = this.pattern.days.reduce((a, b) => a.intensity + b.intensity, 0)
        // console.log(typeof this.pattern.days)
        // avg = this.pattern.days.reduce((a, b) => a + b, 0) / this.pattern.days.length
        // console.log(this.pattern.days)
        console.log("avg")
        console.log(avg)
        this.avg = total / this.pattern.days.length
      } else {
        this.avg = null
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
