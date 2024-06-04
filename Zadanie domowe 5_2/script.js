//tablea zawierająca podane w zadaniu elementy
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

// Znajdujemy element li o id ingredients
const ingredientshtml = document.getElementById('ingredients');

//tworzenie pustego elementu
var documenFragment = document.createDocumentFragment()

// Iteracja przez wszytkie elementy tablicy ingredients
ingredients.forEach(ingredient =>{

    //tworzymy nowy element  li
    var newLi = document.createElement("li")

    //dadajemy klasę item do li
    newLi.className = "item"

    //dodajemy obiekt z zawartością tekstową
    var newContent = document.createTextNode(ingredient);

    //dodajemy zawaartość to li
    newLi.appendChild(newContent)

    //dodajmey całość do elementu o id ingredients
    documenFragment.appendChild(newLi)

})

ingredientshtml.appendChild(documenFragment)