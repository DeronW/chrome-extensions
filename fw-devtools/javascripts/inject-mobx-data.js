var s = document.createElement('script');
s.src = chrome.extension.getURL('javascripts/segment-mobx-data.js');
s.onload = function () {
    this.remove()
};
(document.head || document.documentElement).appendChild(s);