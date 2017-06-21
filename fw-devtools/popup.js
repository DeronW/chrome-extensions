
function g(id) {
    return document.getElementById(id)
}

chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function (tabs) {
    // and use that tab to fill in out title and url
    let tab = tabs[0];

    let group = tab.url.match(/(.*:\/\/)(.*\..*\.\w+)(.*)/)

    let pt = group[3]

    if (pt.startsWith('/static/loan')) {
        g('project-name').innerText = '放心花'
        showFXHValue()
    } else if (pt.startsWith('/static/wap')) {
        g('project-name').innerText = '金融工场'
    } else if (pt.startsWith('/static/mall')) {
        g('project-name').innerText = '豆哥商城'
    } else if (pt.startsWith('/static/insurance')) {
        g('project-name').innerText = '工场保险'
    }

})

function showFXHValue() {
    g('fxh-panel').style.display = 'block'


    chrome.storage.local.get(
        ['user_token', 'user_status', 'user_invite_code', 'user_id', 'user_phone'],
        items => {
            console.log('Settings retrieved', items);
        });
}
