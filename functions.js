
async function getPrice() {
	const coin =  document.getElementById('coin').value;
	const id = coin.toLowerCase();

	const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
	const data = await response.json();
	const price = data[`${id}`]['usd']
	document.getElementById('returned').innerHTML =  price;		
}



