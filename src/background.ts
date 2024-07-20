chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ colorFilter: 'none' });
});
  