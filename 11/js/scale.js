import { dataForScale } from './data.js';

const scaleField = document.querySelector('.img-upload__scale');
const scaleSmallerButton = scaleField.querySelector('.scale__control--smaller');
const scale = scaleField.querySelector('.scale__control--value');
const scaleBiggerButton = scaleField.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');


const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scale.value = `${value}%`;
};
const onClickSmallerButton = () => {
  const newValue = parseInt (scale.value, 10);
  const calcSmaller = newValue - dataForScale.step;
  scale.value = calcSmaller;
  if (scale.value < dataForScale.minValue) {
    scale.value = dataForScale.minValue;
  }
  scaleImage(scale.value);
};

const onClickBiggerButton = () => {
  const newValue = parseInt (scale.value, 10);
  const calcBigger = newValue + dataForScale.step;
  scale.value = calcBigger;
  if(scale.value > dataForScale.maxValue) {
    scale.value = dataForScale.maxValue;
  }
  scaleImage(scale.value);
};

scaleSmallerButton.addEventListener('click', onClickSmallerButton);
scaleBiggerButton.addEventListener('click', onClickBiggerButton);

const resetScale = () => scaleImage(dataForScale.defaultValue);

export { resetScale };
