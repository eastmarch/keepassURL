'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  var url = new URL(tab.url);
  chrome.tabs.executeScript({
    code:  `document.title = "${url.hostname} // " + document.title;`
  });
});
