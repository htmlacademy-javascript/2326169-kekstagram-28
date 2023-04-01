import { isEscapeKey } from './util.js';
import { dataForForm } from './data.js';

const form = document.querySelector('.img-upload__form');
const uploadStart = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const overlay = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  erorTextClass: 'img-upload__field-wrapper__error',
});

const isValidHashtag = (hashtags) => dataForForm.VALID_SYMBOLS.test(hashtags);

const isUniqHashtags = (hashtags) => {
  const lowerCaseHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

const checkingForQuantityHashtags = (hashtags) => hashtags.length <= dataForForm.MAX_HASHTAG_QUANTITY;

function validateHashtag (value) {
  const hashtag = value.trim().split(' ');
  return checkingForQuantityHashtags(hashtag) && isUniqHashtags(hashtag) && hashtag.every(isValidHashtag);
}

pristine.addValidator(
  hashtagField,
  validateHashtag,
  'ХЕШ-ТЕГ ВВЕДЁН НЕКОРРЕКТНО',
);


const isFieldFocus = () =>
  document.activeElement === commentField ||
  document.activeElement === hashtagField;

const overlayClose = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscKeydown);
};

const overlayOpen = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscKeydown);
};

function onDocumentEscKeydown (evt) {
  if(isEscapeKey(evt) && !isFieldFocus()) {
    evt.preventDefault();
    overlayClose(evt);
  }
}

const submitForm = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const onUploadFileChange = () => {
  overlayOpen();
};

const onCancelButtonClick = () => {
  overlayClose();
};


uploadStart.addEventListener('change', onUploadFileChange);
uploadCancel.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', submitForm);
