<template>
    <div class="box">
        <h3></h3>
        <h4>USD</h4>
    </div>    
</template>

<script>

export default({
    name: 'TokenPrice',
    methods: {
        methods: {
      async getPrice() {
        const input = document.getElementById('selector').value;
        const id = this.checkIn(input);
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
        const data = await response.json(); 
        const price = data[`${id}`]['usd']
        console.log(price)
        },
      checkIn(res) {
        if (res == 'BTC'){
          return 'bitcoin'
        } if (res == 'XRP') {
          return 'ripple'
        } if (res == 'ETH') {
          return 'ethereum'
        } if (res == 'BNB') {
          return 'binancecoin'
        } if (res == 'MATIC') {
          return 'matic-network'
        }
      }
    }
    }
})
</script>


<style scoped>

.box {
    width: 200px;
    height: 500px;
    background-color: #4a6ac9;
    padding: 1px;
}

</style>