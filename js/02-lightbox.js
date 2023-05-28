import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const fotoCard = galleryFoto(galleryItems) 
 gallery.insertAdjacentHTML('beforeend', fotoCard);

 function galleryFoto(galleryItems) {
    return galleryItems
    .map(({preview, original, description }) =>{
        return`
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
        })
    .join('');

 }
 const leigthBox = new SimpleLightbox(".gallery__link", { 
    navText : ['<','>'],
    captionsData: 'alt',
    animationSpeed : 250
})

  gallery.addEventListener("click", galleryClick);
 function galleryClick(evt) {
  evt.preventDefault();
 }