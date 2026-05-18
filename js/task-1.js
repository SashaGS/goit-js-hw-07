// // Знаходимо ul#categories
// const categoriesList = document.querySelector('#categories');

// // Знаходимо всі li.item всередині нього
// const categoriesItems = categoriesList.querySelectorAll('li.category');

// // console.log(typeof(categoriesItems));

// // Виводимо кількість категорій
// console.log(`Number of categories: ${categoriesItems.length}`);

// // Для кожного li.item виводимо заголовок і кількість елементів
// categoriesItems.forEach(item => {
//   const title = item.querySelector('h2').textContent;
//   const elementsCount = item.querySelectorAll('li').length;
  
//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${elementsCount}`);
// });

// Знаходимо список категорій
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи li.item
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Для кожного елемента li.item
categoryItems.forEach(item => {
  // Знаходимо заголовок <h2>
  const title = item.querySelector('h2').textContent;

  // Знаходимо всі вкладені <li> всередині цього елемента
  const elementsCount = item.querySelectorAll('ul li').length;

  // Виводимо результат
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});

