// Znajdujemy wszystkie elementy li 
const categories = document.querySelectorAll('#categories .item');

// Liczymy i wyświetlamy liczbę kategorii 
console.log(`Number of categories: ${categories.length}`);

// Iteracja przez wszytkie elementy li.item
categories.forEach(category =>{
    //Odszukanie elementu h2 i zawartego w nim tekstu
    const title = category.querySelector('h2').textContent;
    // Odszukanie wszystkich elementów li zagnieżdżone 
    const elementsCount = category.querySelectorAll('ul li').length;

    // Wyświetlamy tytuł kategorii i liczbę elementów
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
})