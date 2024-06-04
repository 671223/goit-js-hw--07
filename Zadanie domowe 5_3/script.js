//tablea zawierająca podane w zadaniu elementy
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Znajdujemy element li o id gallery
const gallery = document.getElementsByClassName("gallery");

secondAttempt(gallery);

function firstAttempt(gallery) {
  const documentFragment = document.createDocumentFragment();

  if (gallery.length > 0) {
    // Iteracja przez wszytkie elementy tablicy ingredients
    images.forEach((image) => {
      //tworzymy nowy element  li
      var newLi = document.createElement("li");

      //dodajemy obiekt z zawartością img
      var newImg = document.createElement("img");

      newImg.setAttribute("src", image.url);
      newImg.setAttribute("alt", image.alt);
      newImg.className = "gallery-image";

      //dodajemy zawaartość to li
      newLi.appendChild(newImg);

      //dodajmey całość do elementu o id ingredients
      documentFragment.appendChild(newLi);
    });
    gallery[0].appendChild(documentFragment);
  }
}

function secondAttempt(gallery) {
  const galleryItemsHTML = images
    .map((image) => {
      return `<li>
              <img src="${image.url}" alt="${image.alt}" class="gallery-image">
            </li>`;
    })
    .join("");
  console.log(gallery);
  console.log(galleryItemsHTML);
  gallery[0].insertAdjacentHTML("beforeend", galleryItemsHTML);
}
