const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};
const imgFiltersFromUsers = document.querySelector('.img-filters');
let defaultFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomPictures = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilteredPictures = () => {
  switch (defaultFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomPictures).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
};

const onClickFilter = (cb) => {
  imgFiltersFromUsers.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickButton = evt.target;
    if (clickButton.id === defaultFilter) {
      return;
    }

    imgFiltersFromUsers.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickButton.classList.add('img-filters__button--active');
    defaultFilter = clickButton.id;
    cb(getFilteredPictures());
  });
};

const sortingImages = (data, cb) => {
  imgFiltersFromUsers.classList.remove('img-filters--inactive');
  pictures = [...data];
  onClickFilter(cb);
};

export { sortingImages, getFilteredPictures };
