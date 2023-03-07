import {PICTURE_COUNT, AVATAR_COUNT, LIKES_COUNT, COMMENT_COUNT, COMMENT_LINES, NAMES, DESCRIPTIONS} from './data.js';

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

export const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};


// 1. Функции получения рандомных картинок и комментариев.
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

const getPicture = () => Array.from({length: PICTURE_COUNT}, (_, pictureIndex) => createPictures(pictureIndex + 1));

export {getPicture};

