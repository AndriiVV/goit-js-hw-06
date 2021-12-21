const input = document.querySelector("#validation-input");

const checkInput = () => {
	if (input.value.length === +input.dataset.length) {
		switchClass(input, "valid", "invalid");
	} else {
		switchClass(input, "invalid", "valid");
	}
};

const switchClass = function (objLink, classAdd, classRemove) {
	objLink.classList.remove(classRemove);
	objLink.classList.add(classAdd);
};

input.addEventListener("blur", checkInput);
