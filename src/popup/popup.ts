import { getFilterCSS } from '../utils/filterUtils';

document.getElementById('protanopia')?.addEventListener('click', () => setColorFilter('protanopia'));
document.getElementById('deuteranopia')?.addEventListener('click', () => setColorFilter('deuteranopia'));
document.getElementById('tritanopia')?.addEventListener('click', () => setColorFilter('tritanopia'));

function setColorFilter(type: string) {
  chrome.storage.sync.set({ colorFilter: type }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: applyColorFilter,
          args: [type]
        });
      }
    });
  });
}

function applyColorFilter(type: string) {
  chrome.storage.sync.get('colorFilter', (data) => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.filter = getFilterCSS(data.colorFilter || type);
    }
  });
}
