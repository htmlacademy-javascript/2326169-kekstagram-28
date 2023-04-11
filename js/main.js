import { getData, sendData } from './api.js';
import { renderGallery } from './gallery.js';
import { showAlert, debounce } from './util.js';
import { submitForm, overlayClose } from './form.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';
import { sortingImages, getFilteredPictures } from './sorting.js';


submitForm (async (data) => {
  try {
    await sendData(data);
    overlayClose();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  sortingImages(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
