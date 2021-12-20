//  <input type="text" id="name-input" placeholder="Please enter your name" />
//  <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
	input: document.querySelector("#name-input"),
	output: document.querySelector("#name-output"),
};

const handleInput = () => {
	refs.output.textContent = refs.input.value || "Anonymous";
};

refs.input.addEventListener("input", handleInput);
