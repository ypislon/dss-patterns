<template>
  <div id="app">

    <div class="nav">
      <Navbar/>
    </div>

    <Container :text="startDate.toISOString()" v-bind:centered="true" />

    <div class="app-container">
      <div class="diary-create">
        <label for="user">Name</label>
        <input v-model="user" name="user" type="text">
        <label for="startDate">Start date of diary</label>
        <!-- <input v-model="startDate" name="startDate" type="date"> -->
        <datepicker v-model="startDate" name="startDate"></datepicker>
        <button v-on:click="createPattern()" type="button" name="button">Add new diary entry</button>
        <!-- <button v-on:click="logData()" type="button" name="button">Log Data</button> -->
      </div>

      <div class="diary">
        <Diary v-for="pattern in patterns" v-bind:key="pattern.id" v-bind:pattern="pattern" v-bind:startDate="startDate" v-bind:user="user" />
      </div>
    </div>


  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Diary from './components/diary/Diary.vue'
import Container from './components/blocks/Container.vue'
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Navbar,
    Diary,
    Container,
    Datepicker
  },
  data () {
    return {
      startDate: new Date(),
      patterns: [],
      user: 'anon'
    }
  },
  methods: {
    createPattern () {
      var pattern = {
        id: Math.floor(Math.random() * Math.floor(100)),
        startDate: this.startDate,
        days: [],
        user: this.user
      }
      // this.createUser()
      this.patterns.push(pattern)
    },
    logData() {
      console.log(this.patterns)
      console.log(this.patterns[0].days)
      console.log(this.startDate)
    }
  }
}
</script>

<style>
#app {
  margin-top: 80px;
  font-family: Arial;
}

a {

}

.diary {
  max-width: 1200px;
}

.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
}

/* helper classes */

.clickable {
  cursor: pointer;
}

</style>
