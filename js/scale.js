import { DataForScale } from './data.js';

const scaleField = document.querySelector('.img-upload__scale');
const scaleSmallerButton = scaleField.querySelector('.scale__control--smaller');
const scaleControl = scaleField.querySelector('.scale__control--value');
const scaleBiggerButton = scaleField.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const zoomingPicture = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleControl.value = `${value}%`;
};

const onClickSmallerButton = () => {
  const newValue = parseInt (scaleControl.value, 10);
  const calcSmaller = newValue - DataForScale.step;
  scaleControl.value = calcSmaller;
  if (scaleControl.value < DataForScale.minValue) {
    scaleControl.value = DataForScale.minValue;
  }
  zoomingPicture(scaleControl.value);
};

const onClickBiggerButton = () => {
  const newValue = parseInt (scaleControl.value, 10);
  const calcBigger = newValue + DataForScale.step;
  scaleControl.value = calcBigger;
  if(scaleControl.value > DataForScale.maxValue) {
    scaleControl.value = DataForScale.maxValue;
  }
  zoomingPicture(scaleControl.value);
};

scaleSmallerButton.addEventListener('click', onClickSmallerButton);
scaleBiggerButton.addEventListener('click', onClickBiggerButton);

const resetScale = () => zoomingPicture(DataForScale.standartValue);

export { resetScale };
