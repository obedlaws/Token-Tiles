// List of Coins to Select v.1.0.0
<template>
  <form>
    <select class="def" id="selector" placeholder="">
      <option>BTC</option>
      <option>XRP</option>
      <option>ETH</option>
      <option>BNB</option>
      <option>MATIC</option>
    </select>
    <input type="button" @click="getPrice()" value="Search" class="button">
  </form>
</template>

<script>
  export default {
    name: 'SelectList',
  }
    
</script>



<style scoped>
</style>