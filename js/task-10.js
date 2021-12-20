function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	amount: document.querySelector("input"),
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	boxes: document.querySelector("#boxes"),
};

const createBoxes = () => {
	const size = 30;
	for (let i = 0; i < refs.amount.value; i++) {
		const newNode = document.createElement("div");
		newNode.style.width = `${size + 10 * i}px`;
		newNode.style.height = `${size + 10 * i}px`;
		newNode.style.backgroundColor = getRandomHexColor();
		refs.boxes.append(newNode);
	}
};

const destroyBoxes = () => {
	refs.boxes.innerHTML = "";
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
