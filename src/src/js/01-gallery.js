
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = createGallery (galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


gallery.addEventListener('click', openModalImg)


function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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
    </div>`
    }).join('');
    }
    

function openModalImg (event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    } 
    const instance = basicLightbox.create(`<img src=${event.target.dataset.source} width="1400" height="900">`)
    instance.show();
    
}


