import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup =  createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery__item', { 
   captionsData: "alt", 
   captionDelay: 250,
});

function createImgGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
 return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
</a>`;
   }).join('')
}



