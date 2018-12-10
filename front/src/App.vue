<template>
  <div id="app">

    <div class="nav">
      <Navbar/>
    </div>

    <div class="diary" style="border: 1px solid red;">
      <Diary v-for="pattern in patterns" v-bind:key="pattern.id" v-bind:pattern="pattern" v-bind:start_date="start_date" :user="user" />
      <!-- <Diary v-for="pattern in patterns" v-bind:key="pattern.id" v-bind:id="pattern.id" v-bind:start_date="patterns.start_date" v-bind:days="pattern.days" /> -->
      <input v-model="user" type="text">
      <input v-model="start_date" type="date">
      <button v-on:click="createPattern()" type="button" name="button">Create Pattern</button>
      <button v-on:click="logData()" type="button" name="button">Log Data</button>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Diary from './components/diary/Diary.vue'

export default {
  components: {
    Navbar,
    Diary
  },
  data () {
    return {
      start_date: '',
      patterns: [],
      user: 'anon'
    }
  },
  methods: {
    createPattern () {
      var pattern = {
        id: Math.floor(Math.random() * Math.floor(100)),
        start_date: this.start_date,
        days: [],
        user: this.user
      }
      // this.createUser()
      this.patterns.push(pattern)
      console.log("created pattern!");
      console.log(pattern.start_date);
    },
    logData() {
      console.log(this.patterns)
      console.log(this.patterns[0].days)
      console.log(this.start_date)
    }
  }
}
</script>

<style>

</style>
