const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngredients = document.querySelector("#ingredients");

const itemsList = ingredients.map( ingredient => {

  const li = document.createElement("li");
  
  li.textContent = ingredient;

  li.classList.add("item");

  return li

});

listOfIngredients.append(...itemsList);



console.log(listOfIngredients);

