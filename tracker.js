const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
const ul = document.querySelector('#returnedContent');

let total = 0;

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        // console.log(`Price of Bitcoin: $${res.data.ticker.price}`)
        // console.log(`Change in price: ${res.data.ticker.change}%`)
        const testLI = document.createElement('li');
        const info = testLI.innerText = `Price of Bitcoin: $${res.data.ticker.price}
        Change in price: ${res.data.ticker.change}%`
        const cls = testLI.classList.add('box')
        ul.appendChild(testLI, info, cls)
    } catch (e) {
        console.log("ERROR!", e)
    }
}

let ping = setInterval(() => {
    fetchBitcoinPrice();
    total += 1;
}, 900000);

startButton.addEventListener('click', () => {
    ping;
})

stopButton.addEventListener('click', function(){
    clearInterval(ping)
    console.log(`USER REQUESTED HALT. SERVER PINGED ${total} TIMES`)
})

// TODO
// ADD FUNCTION FOR LINES 12-16 TO DE-CLUTTER ASYNC FUNCTION
// TURN % CHANGE RED OR GREEN DEPENDING ON IF THE CHANGE IS ABOVE OR BELOW 0