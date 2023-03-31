import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
            </a>
        </li>`
  )
  .join("");

console.log(markup);
galleryList.innerHTML = markup;

let lightbox = new SimpleLightbox(".gallery a", {});
