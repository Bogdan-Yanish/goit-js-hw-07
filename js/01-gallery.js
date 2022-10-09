import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup =  createImgGallery(galleryItems);
let instance;

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);


function createImgGallery(galleryItems) {
   return galleryItems
   .map(({ preview, original, description }) => {
return `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
        />
    </a>
</div>`;
  }).join('')
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  
  instance = basicLightbox.create(
    `
    <img src='${event.target.dataset.source}'>
    `,
    {
      onShow: () => {
        galleryContainer.addEventListener("keydown", onCloseImgEscapeKey);
      },
      onClose: () => {
        galleryContainer.removeEventListener("keydown", onCloseImgEscapeKey);
      },
    }
  );
  
  instance.show();
}

function onCloseImgEscapeKey(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  }
}


