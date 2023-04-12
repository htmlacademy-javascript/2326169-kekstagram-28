import { DataForEffects, } from './data.js';

const effectsElement = document.querySelector('.effects');
const imageElement = document.querySelector('.img-upload__preview img');
const fieldEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = fieldEffectLevel.querySelector('.effect-level__slider');
const inputSlider = fieldEffectLevel.querySelector('.effect-level__value');

let chosenEffect = DataForEffects[0];

const isDefaultFillter = () => chosenEffect === DataForEffects[0];

const showSlider = () => {
  fieldEffectLevel.classList.remove('hidden');
};

const hideSlider = () => {
  fieldEffectLevel.classList.add('hidden');
};

const updateSLider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
  if(isDefaultFillter()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = DataForEffects.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSLider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = isDefaultFillter();
  if (isDefaultFillter()) {
    imageElement.style.filter = DataForEffects[0].style;
  } else {
    imageElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  inputSlider.value = sliderValue;
};

const resetEffects = () => {
  imageElement.style.filter = DataForEffects[0].style;
  imageElement.className = 'effects__preview--none';
  hideSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DataForEffects[0].min,
    max: DataForEffects[0].max,
  },
  start: DataForEffects[0].max,
  step: DataForEffects[0].step,
  connect: 'lower',
});

hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
