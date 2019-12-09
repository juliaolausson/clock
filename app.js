/**
 * Dates and Time.
 *
 */

const clockEl = document.querySelector('#clock');
const dateEl = document.querySelector('#date');
//const timeEl = document.querySelector('#time');

const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const separatorEl = document.querySelectorAll('.separator');
const secondEl = document.querySelector('#second');

const daysLeft = document.querySelector('#daysleft');

// countdown

document.querySelector('#clock-wrapper').addEventListener('submit', function(e){
	e.preventDefault();
	let countdownEl = document.querySelector('#countdown');

	let todaysDate = moment().format('YYYY-MM-DD');
	let a = moment(todaysDate); //now
	let b   = moment(countdownEl.value); // countDown
	a.to(b); 

	console.log(a.to(b));
	daysLeft.innerHTML = "Event is " +a.to(b);

	countdownEl.value = '';

});

const updateClock = () => {
	dateEl.innerHTML = moment().format('ddd-MMM-YYYY');
	//timeEl.innerHTML = moment().format('HH:mm:ss');
	hourEl.innerHTML = moment().format('HH');
	minuteEl.innerHTML = moment().format('mm');
	secondEl.innerHTML = moment().format('ss');
	
	separatorEl.forEach(separator => {
		separator.classList.toggle('hidden');
	})
};

updateClock();
const secondTicker = setInterval(updateClock, 1000);
