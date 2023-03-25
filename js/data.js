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

export {getPictures};

