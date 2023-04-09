import { getData, sendData } from './api.js';
import { renderGallery } from './gallery.js';
import { showAlert } from './util.js';
import { submitForm, overlayClose } from './form.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';


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
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
