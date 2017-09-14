//  修复windows高清屏下viewport显示不正确的问题
(function () {
	if (!location.pathname.startsWith('/static/') && location.hostname == 'm.9888.cn') return;

	var cw = document.documentElement.clientWidth;
	var metas = document.getElementsByTagName('meta'), vw;
	for (var i = 0; i < metas.length; i++) {
		if (metas[i].name == 'viewport') vw = metas[i]
	}
	if (vw) vw.setAttribute('content', 'width=' + (720 * 720 / cw) + ', user-scalable=no');

	console.log('%c auto fix viewport in chrome extensions', 'color: #bcbcbc');
})()