var widen = false;

chrome.browserAction.onClicked.addListener(function(tab){
	var regexPage = new RegExp(/https:\/\/github.com\//);
  var match = regexPage.exec(tab.url);
  if(match && tab.status === 'complete' && !widen) {
		chrome.tabs.insertCSS(tab.id, {
      file: "widen.css"
  	});
  	widen = true;
  }else{
  	chrome.tabs.insertCSS(tab.id, {
      file: "regular.css"
  	});
  	widen = false;
  }
});
