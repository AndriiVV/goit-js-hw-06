//  <ul id="ingredients"></ul>
//
//  Напиши скрипт, который создаст отдельный элемент <li>.
//  Обзательно используй метод document.createElement().
//
// Добавит название ингредиента как его текстовое содержимое.
//
// Добавит элементу класс item.
//
// После чего вставит все <li> за одну операцию
// в список ul.ingredients.

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const setIngredients = function (elementNode, ingredientsArr) {
	const newItems = [];
	for (let item of ingredientsArr) {
		let li = document.createElement("li");
		li.classList.add("item");
		li.textContent = item;
		newItems.push(li);
	}
	elementNode.append(...newItems);
};

setIngredients(document.querySelector("#ingredients"), ingredients);
