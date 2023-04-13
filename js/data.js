// Данные для формы
const DataForForm = {
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
const DataForScale = {
  standartValue: 100,
  step: 25,
  maxValue: 100,
  minValue: 25,
};

export { DataForForm, DataForScale, SubmitButtonText };
