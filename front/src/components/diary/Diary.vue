<template>
  <div class="" :class="isFoldedOut ? '' : 'folded'">

    <div class="diary-header">
      <h3>Diary Number {{pattern.id}} | user: {{username}} | {{ avg }}</h3>
      <button @click="toggleLayout()" type="button" name="button">Toggle Layout</button>
      <button @click="isFoldedOut ? isFoldedOut = false : isFoldedOut = true" type="button" name="button">Fold diary</button>
    </div>

    <div class="diary-form">
      <label for="date">Start date: {{startDate}}</label>
      <input v-model="date" name="date" type="date"><br>
      <label for="intensity">Intensity</label>
      <input v-model="intensity" name="intensity" type="text">
    </div>

    <div class="diary-add-day">
      <button v-on:click="createDay()" type="button" name="button">Add an entry</button>
      <button v-on:click="calculateAverage()" type="button" name="button">Average</button>
    </div>

    <div class="diary-dates" v-bind:class="isRowLayout ? 'row' : ''">
      <!-- <Day v-for="day in daySort(pattern.days)" v-bind:key="day.date" v-bind:day="day" /> -->
      <Day v-for="day in pattern.days" v-bind:key="day.id" v-bind:day="day" />
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
    startDate: {
      type: Date,
      required: true
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
        date: this.startDate,
        intensity: 0,
        isRowLayout: false,
        isFoldedOut: true,
        sortedDays: {},
        username: this.user,
        avg: 0
    }
  },
  methods: {
    createDay() {
      var newDate = new Date()
      if(this.pattern.days != undefined) {
        newDate = new Date()
        if(this.pattern.days.length == 0) {
          console.log(typeof this.startDate)
          var currentDate = this.startDate
        } else if (this.pattern.days.length > 0) {
          var currentDate = this.daySort(this.pattern.days).slice(-1).pop().date
          newDate.setDate(currentDate + 1)
        }
      }

      var day = {
        id: Math.random(),
        date: newDate,
        intensity: this.intensity,
        nausea: false,
        light: false,
        sound: false,
        medicine: ''
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
        this.pattern.days.forEach((el) => {
          total = total + el.intensity
          console.log(el.intensity)
        })
        this.avg = total / this.pattern.days.length
      } else {
        this.avg = null
      }
    }
  }
}

</script>

<style>

.folded .diary-dates {
  display: none;
}

.folded .diary-add-day {
  display: none;
}

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
