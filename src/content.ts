import { getFilterCSS } from './utils/filterUtils';

chrome.storage.sync.get('colorFilter', (data) => {
  if (data.colorFilter) {
    document.documentElement.style.filter = getFilterCSS(data.colorFilter);
  }
});
