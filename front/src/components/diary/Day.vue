<template>
  <div class="day">
    <!-- <div class="info">
      <span>Day: {{day.date}}</span>
      <span>Intensity: {{day.intensity}}</span>
    </div> -->
    <div class="input">
      <div class="date">
        <datepicker v-model="day.date" name="date" type="date"></datepicker>
      </div>
      <div class="intensity">
        <input v-model="day.intensity" type="hidden">
        <span class="intensity-0" v-bind:class="day.intensity == 0 ? 'active' : ''" @click="updateIntensity(0)"></span>
        <span class="intensity-1" v-bind:class="day.intensity == 1 ? 'active' : ''" @click="updateIntensity(1)"></span>
        <span class="intensity-2" v-bind:class="day.intensity == 2 ? 'active' : ''" @click="updateIntensity(2)"></span>
        <span class="intensity-3" v-bind:class="day.intensity == 3 ? 'active' : ''" @click="updateIntensity(3)"></span>
      </div>
      <div class="symptoms">
        <div class="symptom-item">
          <label for="light">Light sensitivity</label>
          <input v-model="day.light" type="checkbox" name="light" value="">
        </div>
        <div class="symptom-item">
          <label for="sound">Sound sensitivity</label>
          <input v-model="day.sound" type="checkbox" name="sound" value="">
        </div>
        <div class="symptom-item">
          <label for="nausea">Nausea</label>
          <input v-model="day.nausea" type="checkbox" name="nausea" value="">
        </div>
      </div>
      <div class="medicine">
        <label for="medicine">Medicine intake</label>
        <input v-model="day.medicine" type="text" name="medicine" value="">
      </div>
    </div>
    <!-- <button v-on:click="logData()" type="button" name="button">Log data</button> -->
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  name: 'Day',
  props: {
      day: {
        type: Object,
        required: true
      }
  },
  methods: {
    logData() {
      console.log(this.day.date)
      console.log(this.day.intensity)
    },
    updateIntensity(intensity) {
      this.day.intensity = intensity
    }
  }
}

</script>

<style lang="scss">

.day {
  border: 1px solid blue;
}

.day .input {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.day .input .date {
  flex: 1;
  text-align: center;
}

.day .input .intensity {
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.day .input .intensity span {
  flex: 1;
  min-height: 80px;
  min-width: 80px;
  opacity: .2;

  &.active {
    opacity: 1;
  }
}

.intensity-0 {
  background-color: green;
}

.intensity-1 {
  background-color: yellow;
}

.intensity-2 {
  background-color: orange;
}

.intensity-3 {
  background-color: red;
}

.symptoms {

}

.symptom-item {
  display: flex;
  justify-content: space-between;
  padding: 3px 3px;
}

</style>
