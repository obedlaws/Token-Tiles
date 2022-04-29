
async function getPrice() {
	const input = document.getElementById('selector').value;
	const id = this.checkIn(input);
	const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
	const data = await response.json(); 
	const price = data[`${id}`]['usd']

	console.log(price)
	}

function checkIn(res) {
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

