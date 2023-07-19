const listOfCategories = document.querySelector("#categories");

const items = listOfCategories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);



items.forEach(item => {
    const itemTitle = item.querySelector("h2").textContent; 
    const itemElements = item.querySelectorAll("li").length;

    console.log(`Category: ${itemTitle}`);
    console.log(`Elements: ${itemElements}`);
});

// або ще другий варіант


// items.forEach((item) => {
//     console.log(`Category: ${item.querySelector("h2").textContent}`);
//     console.log(`Elements: ${item.querySelectorAll('li').length}`);
// });