// Copyright (c) 2017 Dien Luong. All rights reserved.

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    file: 'getHistoricalPrices_content_script.js'
  });
});
