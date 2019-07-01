document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);


// Manifest
// {
//   "manifest_version": 2,

//   "name": "Flowers everywhere",
//   "description": "Replace images",
//   "version": "1.0",
//   "icons": {
//     "16": "tv16.png",
//     "32": "tv32.png",
//     "128": "tv128.png"
//   },
//   "content_scripts": [{
//       "matches": ["<all_urls>"],
//       "all_frames": true,
//       "js":      ["contentScript.js"]
//   }]
// }