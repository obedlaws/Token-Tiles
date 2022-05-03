

//All function started by this main function
const getInfo = () => {
    getPrice();
    getBasicInfo();
    createGraph();  
    getBasicInfo();
    getEcoInfo();
    getNews();
    
}


const getPrice = async () => {
    const id = document.getElementById('coins').value;
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`);
    const data = await response.json();
    const price = data[`${id}`]['usd']
    return price
}

const getHistoricPrice = async () => {
    var p = []
    
    const id = document.getElementById('coins').value;
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`)
    const data = await response.json();
    
    for (var i = 0; i < 14; i++) {
        const pushedP = parseInt(data['prices'][i][1])
        p.push(pushedP);
    }
    return p
}

const getBasicInfo = async () => {

}

const getEcoInfo = async () => {

}

const getNews = async () => {

}

const createGraph = async () => {

    const labels = ['T', '-1T', '-2T', '-3T', '-4T','-5T', '-6T', '-7T', '-8T', '-9T', '-10T', '-11T', '-12T', '-13T']
    const prices = await getHistoricPrice()
    const data = {
        labels: labels,
        dataset: [{
            label: 'Price last 14 days',
            data: prices,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    }

    const config = {
        type: 'line',
        data: data,
        options: {}
    }

    new Chart(
        document.getElementById('14D'),
        config
    );
}

