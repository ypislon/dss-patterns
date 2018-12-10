<template>
  <nav class="nav">
    <div class="nav-item">
      Headache diary pattern recognition
    </div>
    <div class="nav-item clickable" @click="resetPage()">
      Reset page
    </div>
  </nav>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    testFunction() {
      this.a = this.a + 1
    },
    resetPage() {
      window.location.reload(false);
    }
  }
}

</script>

<style scoped>
.nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.nav-item {
  margin: 15px;
}
</style>
