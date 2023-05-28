import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const fotoCard = galleryFoto(galleryItems) 
 gallery.insertAdjacentHTML('beforeend', fotoCard);

 function galleryFoto(galleryItems) {
    return galleryItems
    .map(({preview, original, description }) =>{
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    })
    .join('')
 };
 gallery.addEventListener("click", galleryClick);
 function galleryClick(evt) {
  evt.preventDefault();
if (evt.target.nodeName !== 'IMG') {
    return;
}
  const instance = basicLightbox.create(
    `
  <img src="${evt.target.dataset.source}" alt="${evt.target.alt}">
  `,
{
  onShow: (instance) => { 
  window.addEventListener("keydown", escKeyPess);
},

onClose: (instance) => { 
  window.removeEventListener("keydown", escKeyPess);
},
}
);
instance.show();  

function escKeyPess(evt) {
  if (evt.code === 'Escape') {
    instance.close() 
  }
}
 }


