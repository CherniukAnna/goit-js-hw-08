import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'simplelightbox/dist/simple-lightbox.min.js';
const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = galleryItems
  .map(
    element =>
      `<a href="${element.original}">
      <img
      src="${element.preview}"
      alt=""
      title="${element.description}"/>
      </a>`
  )
  .join('');
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
