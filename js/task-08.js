const refs = {
	form: document.querySelector(".login-form"),
	// email: document.querySelector("[name='email']"),
	// password: document.querySelector("[name='password']"),
	// button: document.querySelector(".login-form > button"),
};

const handleSubmit = (event) => {
	event.preventDefault();

	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "")
		return alert("Please fill all required fields!");

	const data = new FormData(event.currentTarget);

	console.log(Object.fromEntries(data.entries()));
	event.currentTarget.reset();
};

refs.form.addEventListener("submit", handleSubmit);
