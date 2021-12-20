//  <input id="font-size-control" type="range" min="16" max="96" />
//  <span id="text">Abracadabra!</span>

const refs = {
	input: document.querySelector("#font-size-control"),
	text: document.querySelector("#text"),
};

const handleInput = () => {
	refs.text.style.fontSize = `${refs.input.value}px`;
};

refs.input.addEventListener("input", handleInput);
