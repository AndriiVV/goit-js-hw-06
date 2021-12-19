const categoriesList = document.querySelector("#categories").children;

// количество категорий в ul#categories

console.log(`Number of categories: ${categoriesList.length}`);

// текст заголовка элемента <h2> и количество вложенных <li>

console.log("\n ===== Первый вариант решения: ===== ");

for (let elem of categoriesList) {
	console.log(`\nCategory: ${elem.querySelector("h2").textContent}`);
	console.log(
		`Elements: ${elem.querySelector("ul").querySelectorAll("li").length}`
	);
}

// текст заголовка элемента <h2> и количество вложенных <li>

console.log("\n ===== Второй вариант решения: ===== ");

[...categoriesList].forEach((elem) => {
	console.log(`\nCategory: ${elem.querySelector("h2").textContent}`);
	console.log(
		`Elements: ${elem.querySelector("ul").querySelectorAll("li").length}`
	);
});
