import { isEscapeKey } from './util.js';

const modalElement = document.querySelector('.big-picture');
const socialLikesCount = document.querySelector('.likes-count');
const socialCommentsCount = document.querySelector('.comments-count');
const closeModalElement = document.querySelector('.big-picture__cancel');
const socialCommentConteiner = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const body = document.querySelector('body');

const renderComment = (comments, template) => {
  const commentsListFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newFragment = template.cloneNode(true);
    newFragment.querySelector('.social__picture').src = comment.avatar;
    newFragment.querySelector('.social__picture').alt = comment.name;
    newFragment.querySelector('.social__text').textContent = comment.message;
    commentsListFragment.append(newFragment);
  });
  return commentsListFragment;
};


const renderBigPicture = (picture) => {
  body.classList.add('modal-open');
  modalElement.classList.remove('hidden');
  modalElement.querySelector('.big-picture__img img').src = picture.url;
  modalElement.querySelector('.social__caption').textContent = picture.description;
  socialLikesCount.textContent = picture.likes;
  socialCommentsCount.textContent = picture.comments.length;

  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');

  const commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');
  socialCommentConteiner.innerHTML = '';
  socialCommentConteiner.append(renderComment(picture.comments, socialCommentTemplate));
};


closeModalElement.addEventListener('click', () => {
  modalElement.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    modalElement.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

export {renderBigPicture};
