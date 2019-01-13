<template>
  <div class="" :class="isFoldedOut ? '' : 'folded'">

    <div class="diary-header">
      <h3>Diary Number {{pattern.id}} | user: {{username}} | {{ avg }}</h3>
      <b-button @click="toggleLayout()" type="button" name="button">Toggle Layout</b-button>
      <b-button @click="isFoldedOut ? isFoldedOut = false : isFoldedOut = true" type="button" name="button">Fold diary</b-button>

      <div class="diary-analyse">
          <Analyser v-bind:pattern="pattern" />
      </div>
    </div>

    <div class="diary-form">
      <label for="date">Start date: {{startDate}}</label>
      <datepicker v-model="date" name="date" type="date"></datepicker><br>
      <label for="intensity">Intensity</label>
      <input v-model="intensity" name="intensity" type="text">
    </div>

    <div class="diary-add-day">
      <b-button v-on:click="createDay()" type="button" name="button">Add an entry</b-button>
      <b-button v-on:click="calculateAverage()" type="button" name="button">Average</b-button>
    </div>

    <div class="diary-dates" v-bind:class="isRowLayout ? 'row' : ''">
      <Day v-for="day in pattern.days" v-bind:key="day.id" v-bind:day="day" />
    </div>

  </div>

</template>

<script>
import Day from './Day.vue'
import Analyser from './Analyser.vue'
import BootstrapVue from 'bootstrap-vue'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Day,
    BootstrapVue,
    Datepicker,
    Analyser
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

      // create new date after the last one
      if(this.pattern.days != undefined) {
        if(this.pattern.days.length == 0) {
          newDate = this.startDate
        } else if (this.pattern.days.length > 0) {
          var lastDate = this.daySort(this.pattern.days).slice(-1).pop().date
          newDate.setDate(lastDate.getDate() + 1)
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
    altDaySort() {
      this.pattern.date = this.daySort(this.pattern.date)
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
        })
        this.avg = total / this.pattern.days.length
      } else {
        this.avg = null
      }
    }
  }
}

</script>

<style lang="scss">

.folded {
  .diary-dates {
    display: none;
  }
  .diary-add-day {
    display: none;
  }
}

.diary-dates {
  display: flex;
  flex-direction: column;

  &.row {
    flex-direction: row;

    .input {
      flex-direction: column;
    }

    .intensity {
      flex-direction: column-reverse;
    }

    .symptoms {
      flex-direction: row;
    }

    .symptom-item {
      display: inline;

      label {
        display: none;
      }
    }

    .medicine {
      display: none;
    }

    .date {
      width: 80px;

      input {
        width: 80px;
      }
    }

  }
}

.diary-add-day {
  margin: 20px;
  text-align: center;
}
</style>
