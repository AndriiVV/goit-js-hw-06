// <div id="counter">
//	<button type="button" data-action="decrement">-1</button>
//	<span id="value">0</span>
//	<button type="button" data-action="increment">+1</button>
// </div>;

let counterValue = 0;

const buttonUp = document.querySelector("[data-action='increment']");
const buttonDown = document.querySelector("[data-action='decrement']");
const counter = document.querySelector("#value");

const handleClick = (event) => {
	counterValue += parseInt(event.currentTarget.textContent);
	counter.textContent = counterValue;
};

buttonUp.addEventListener("click", handleClick);
buttonDown.addEventListener("click", handleClick);
