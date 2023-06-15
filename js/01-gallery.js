// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `
    <a class="gallery__link" href="${original}">
    <img class="gallery__image src="${preview}" alt="${description}">
    </a>
    `;
  })
  .join("");

gallery.insertAdjacentElement("afterBegin", markup);
