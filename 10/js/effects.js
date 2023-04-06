import { dataForEffects, DEFAULT_EFFECT } from './data.js';

const effectsElement = document.querySelector('.effects');
const imageElement = document.querySelector('.img-upload__preview img');
const fieldEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = fieldEffectLevel.querySelector('.effect-level__slider');
const inputSlider = fieldEffectLevel.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefaultFillter = () => chosenEffect === DEFAULT_EFFECT;

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
  chosenEffect = dataForEffects.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSLider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = isDefaultFillter()
    ? DEFAULT_EFFECT.style
    : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  inputSlider.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
