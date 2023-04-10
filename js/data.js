// Данные для отоборожения модалки
const dataForModal = {
  commentsArray: [],
  commentUnlock: 0,
  COMMENT_BLOCK: 5
};

// Данные для формы
const dataForForm = {
  MAX_HASHTAG_QUANTITY: 5,
  VALID_SYMBOLS: /^#[a-zа-яё0-9]{1,19}$/i,
  ERROR_MESSAGE_VALID_HASHTAG: 'Хэштэг должен начинаться с #. Хэштэг не может быть только # и иметь более 20 символов, а также иметь спец символы в названии такие как !"№;%: и т.д.',
  ERROR_MESSAGE_HASHTAG_QUANTITY:'Должно быть не более 5 хэштэгов',
  ERROR_MESSAGE_UNIQUE_HASHTAG: 'Хэштэги должны быть уникальными',
};

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

// Данные для редактирования изображения
const dataForScale = {
  defaultValue: 100,
  step: 25,
  maxValue: 100,
  minValue: 25,
};

// Данные для наложения эффекта
const dataForEffects = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];


export { dataForModal, dataForForm, dataForScale, dataForEffects, SubmitButtonText };

