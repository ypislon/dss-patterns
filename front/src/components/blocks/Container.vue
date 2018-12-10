<template lang="html">
  <div class="block-container" :class="centered ? 'centered' : ''">
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    centered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="css" scoped>
.block-container {
  max-width: 1200px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin: 40px 0;
}

.block-container.centered {
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
}
</style>
