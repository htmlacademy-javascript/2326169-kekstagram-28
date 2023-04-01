import { isEscapeKey } from './util.js';
import { dataForModal } from './data.js';

const modalElement = document.querySelector('.big-picture');
const socialLikesCount = modalElement.querySelector('.likes-count');
const socialCommentsCount = modalElement.querySelector('.social__comment-count');
const closeModalElement = modalElement.querySelector('.big-picture__cancel');
const socialCommentConteiner = modalElement.querySelector('.social__comments');
const socialCommentTemplate = modalElement.querySelector('.social__comment');
const commentsLoaderButton = modalElement.querySelector('.social__comments-loader');
const body = document.querySelector('body');


const renderComment = (comment) => {
  const template = socialCommentTemplate;
  const commentsListFragment = document.createDocumentFragment();
  const newFragment = template.cloneNode(true);
  newFragment.querySelector('.social__picture').src = comment.avatar;
  newFragment.querySelector('.social__picture').alt = comment.name;
  newFragment.querySelector('.social__text').textContent = comment.message;
  commentsListFragment.append(newFragment);
  return commentsListFragment;
};

const loaderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  dataForModal.commentUnlock += dataForModal.COMMENT_BLOCK;
  if (dataForModal.commentUnlock >= comments.length) {
    dataForModal.commentUnlock = comments.length;
  }
  commentsLoaderButton.classList.toggle('hidden', dataForModal.commentUnlock >= comments.length);
  for (let i = 0; i < dataForModal.commentUnlock; i++) {
    const commentElement = renderComment(comments[i]);
    fragment.append(commentElement);
  }
  socialCommentConteiner.innerHTML = '';
  socialCommentConteiner.append(fragment);
  socialCommentsCount.innerHTML = `${dataForModal.commentUnlock} из <span class="comments-count">${comments.length}</span> комментариев</div>`;
};

const onModalEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseModalClick();
  }
};

const renderBigPicture = (picture) => {
  body.classList.add('modal-open');
  modalElement.classList.remove('hidden');
  modalElement.querySelector('.big-picture__img img').src = picture.url;
  modalElement.querySelector('.social__caption').textContent = picture.description;
  socialLikesCount.textContent = picture.likes;
  dataForModal.commentsArray = Array.from(picture.comments);
  dataForModal.commentUnlock = 0;
  loaderComments(dataForModal.commentsArray);
  document.addEventListener('keydown', onModalEscKeydown);
};

function onLoadMoreCommentsButtonClick () {
  loaderComments(dataForModal.commentsArray);
}

function onCloseModalClick () {
  modalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
}

closeModalElement.addEventListener('click', onCloseModalClick);
commentsLoaderButton.addEventListener('click', onLoadMoreCommentsButtonClick);

export {renderBigPicture};
