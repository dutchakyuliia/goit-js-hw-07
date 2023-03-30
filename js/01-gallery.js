import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
  <a onclick="event.preventDefault()" class="gallery__link" href="large-image.jpg">
    <img 
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");

console.log(markup);
galleryList.innerHTML = markup;

galleryList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
`);
  instance.show();
});
