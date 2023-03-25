import { isEscapeKey } from './util.js';

const modalElement = document.querySelector('.big-picture');
const socialLikesCount = document.querySelector('.likes-count');
const socialCommentsCount = document.querySelector('.social__comment-count');
const closeModalElement = document.querySelector('.big-picture__cancel');
const socialCommentConteiner = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const commentsLoaderButton = document.querySelector('.social__comments-loader');
const body = document.querySelector('body');
let commentsArray = [];
let commentUnlock = 0;
const COMMENT_BLOCK = 5;

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
  commentUnlock += COMMENT_BLOCK;
  if (commentUnlock >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
    commentUnlock = comments.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentUnlock; i++) {
    const commentElement = renderComment(comments[i]);
    fragment.append(commentElement);
  }
  socialCommentConteiner.innerHTML = '';
  socialCommentConteiner.append(fragment);
  socialCommentsCount.innerHTML = `${commentUnlock} из <span class="comments-count">${comments.length}</span> комментариев</div>`;
};

const renderBigPicture = (picture) => {
  body.classList.add('modal-open');
  modalElement.classList.remove('hidden');
  modalElement.querySelector('.big-picture__img img').src = picture.url;
  modalElement.querySelector('.social__caption').textContent = picture.description;
  socialLikesCount.textContent = picture.likes;
  commentsArray = Array.from(picture.comments);
  commentUnlock = 0;
  loaderComments(commentsArray);
};

const onModalEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function loadComments () {
  loaderComments(commentsArray);
}

function closeModal () {
  modalElement.classList.add('hidden');
  body.classList.remove('modal-open');
}

closeModalElement.addEventListener('click', () => {
  closeModal();
});

commentsLoaderButton.addEventListener('click', () => {
  loadComments();
});

document.addEventListener('keydown', onModalEscKeydown);

export {renderBigPicture};
