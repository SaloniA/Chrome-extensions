let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
  	chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){

  	let r = Math.floor(Math.random() * (8 - 0) + 0);
	let file = 'images/img' + r.toString() + '.png';

	console.log(file);
//  	let imgurl = chrome.extension.getURL("images/img1.png");
	let imgurl = chrome.extension.getURL(file);
    images[index].src = imgurl;
  });
}