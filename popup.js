 let changeColor1 = document.getElementById('changeColor1');
 let changeColor2 = document.getElementById('changeColor2');

  // chrome.storage.sync.get('color', function(data) {
  //   changeColor.style.backgroundColor = data.color;
  //   changeColor.setAttribute('value', data.color);
  // });
  changeColor1.style.backgroundColor = '#4688f1';
  changeColor2.style.backgroundColor = '#f9bb2d';

  changeColor1.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + '#4688f1' + '";'});
    });
  };
  changeColor2.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + '#f9bb2d' + '";'});
    });
  };