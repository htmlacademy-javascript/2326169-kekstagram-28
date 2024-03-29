import { renderBigPicture } from './big-pictures-rendering.js';

const thumbnailTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const creatingThumbnail = ({ comments, description, likes, url }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = creatingThumbnail(picture);
    fragment.append(thumbnail);
    thumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      renderBigPicture(picture);
    });
  });
  container.append(fragment);
};


export {renderThumbnails};
