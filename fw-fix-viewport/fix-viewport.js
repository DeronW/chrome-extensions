// auto run in matched pattern urls

// chrome.browserAction.onClicked.addListener(function (tab) {
// 	// No tabs or host permissions needed!
// 	chrome.tabs.executeScript({
// 		code: 'sessionStorage.__fix_viewport = 1; location.reload()'
// 	});
// });

(function () {
	var cw = document.documentElement.clientWidth;
	var metas = document.getElementsByTagName('meta'), vw;
	for (var i = 0; i < metas.length; i++) {
		if (metas[i].name == 'viewport') vw = metas[i]
	}
	if (vw) vw.setAttribute('content', 'width=' + (720 * 720 / cw) + ', user-scalable=no');

	console.log('%c auto fix viewport in chrome extensions', 'color: #bcbcbc');
})()