var widen = false;

chrome.browserAction.onClicked.addListener(function(tab){
  var githubRegex = new RegExp(/https:\/\/github.com\//);
  var gistRegex = new RegExp(/https:\/\/gist.github.com\//);
  var githubMatch = githubRegex.exec(tab.url);
  var gistMatch = gistRegex.exec(tab.url);
  if ((githubMatch || gistMatch) && tab.status === 'complete' && !widen) {
    chrome.tabs.insertCSS(tab.id, {
      file: "widen.css" });
    widen = true;
  } else {
    chrome.tabs.insertCSS(tab.id, {
      file: "regular.css" });
    widen = false;
  }
});
