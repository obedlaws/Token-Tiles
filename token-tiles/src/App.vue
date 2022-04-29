<template>
  <div>
    <MainTitle title="Token Tiles" />
    <TokenPrice />

  </div>
</template>

<script>
import MainTitle from  './components/MainTitle.vue'
import TokenPrice from './components/Price.vue'

export default {
  name: 'App',
  components: {
    MainTitle,
    TokenPrice
  },
  data() {
    return {

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button{
    border-radius: 4px;
    background-color: #3685b9;
    color: white;
    font-size: 15px;
    border: 0;
  }
  .button:hover{
  cursor: pointer;
  background-color: #2974a7
  }
  .button:active{
  background-color: #1a608e
  }
</style>
