import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', openModalImg)

function createGallery(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join('');
    
}

new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250, });

function openModalImg (event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    } 
    
}


console.log(galleryItems);