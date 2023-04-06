import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

// Основные параметры и массивы
const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKES_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Игорь', 'Денис', 'Анастасия', 'Валлера', 'Елена', 'Кирилл','Булат',];
const DESCRIPTIONS = [
  'Вид набережной с отелем.',
  'Табличка с описанием направления к пляжу',
  'Вид на океан',
  'Mama Mia!',
  'Вкусняшка',
  'Мафынка',
  'Ягодки',
  'Чаёк',
  'Пляж',
  'Подставка для обуви',
  'Путь на пляж',
  'Красиво ... :)',
  'Великолепное блюдо',
  'Ха-ха, смешно :)',
  'Прикольно',
  'Летим',
  'Хорошо',
  'Мафынка',
  'Тапки светодиодки',
  'Отель',
  'Ненавижу спаржу',
  'Закат',
  'Крабик',
  'Концерт',
  'Опасность'
];

// Параметры для отоборожения модалки
const dataForModal = {
  commentsArray: [],
  commentUnlock: 0,
  COMMENT_BLOCK: 5
};

// Параметры для формы
const dataForForm = {
  MAX_HASHTAG_QUANTITY: 5,
  VALID_SYMBOLS: /^#[a-zа-яё0-9]{1,19}$/i,
  ERROR_MESSAGE_VALID_HASHTAG: 'Хэштэг должен начинаться с #. Хэштэг не может быть только # и иметь более 20 символов, а также иметь спец символы в названии такие как !"№;%: и т.д.',
  ERROR_MESSAGE_HASHTAG_QUANTITY:'Должно быть не более 5 хэштэгов',
  ERROR_MESSAGE_UNIQUE_HASHTAG: 'Хэштэги должны быть уникальными',
};

// Параметры для редактирования изображения
const dataForScale = {
  defaultValue: 100,
  step: 25,
  maxValue: 100,
  minValue: 25,
};

// Параметры для наложения эффекта
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
const DEFAULT_EFFECT = dataForEffects[0];

// Функции получения рандомных картинок и комментариев.
const generateCommentId = createIdGenerator();

const getRandomCommentLines = () => Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENT_LINES)).join(' ');

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomCommentLines(),
  name: getRandomArrayElement(NAMES)
});

const createPictures = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, LIKES_COUNT),
  comments: Array.from({length: getRandomInteger(0, COMMENT_COUNT)}, createComments)
});

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
    createPictures(pictureIndex + 1));

export { getPictures, dataForModal, dataForForm, dataForScale, dataForEffects, DEFAULT_EFFECT };

