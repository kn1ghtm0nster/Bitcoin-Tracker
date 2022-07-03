console.warn(
	'I see you have found the developer tools! If you DO NOT know what or who these tools are intended for, please press F12 on your keyboard to exit.'
);

const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');

const currPrice = document.querySelector('#curr-price');
const currPercent = document.querySelector('#curr-percent');

let total = 0;

const fetchBitcoinPrice = async () => {
	try {
		const res = await axios.get('https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD');
		let data = res.data;
		let returnedPrice = Number.parseFloat(data.coin.price).toFixed(2);
		let percent = data.coin.priceChange1h;

		if (percent < 0) {
			currPrice.classList.add('has-text-danger');
		} else {
			currPrice.classList.add('has-text-success');
		}

		currPrice.innerText = `$${returnedPrice}`;
		currPercent.innerText = `${percent}%`;
	} catch (e) {
		console.log('ERROR!', e);
	}
};

let ping = setInterval(() => {
	if (total > 0) {
		currPrice.innerText = '';
		currPercent.innerText = '';
	}
	fetchBitcoinPrice();
	total += 1;
}, 900000);

startButton.addEventListener('click', async function() {
	ping;
});

stopButton.addEventListener('click', function() {
	clearInterval(ping);
	console.log(`USER REQUESTED HALT. SERVER PINGED ${total} TIMES`);
	total = 0;
	alert('APPLICATION HALTED! THANK YOU FOR USING THE BITCOIN TRACKER!');
});
