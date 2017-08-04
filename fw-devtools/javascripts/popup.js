
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
    } else if (pt.startsWith('/static/wap')) {
        g('project-name').innerText = '金融工场'
    } else if (pt.startsWith('/static/mall')) {
        g('project-name').innerText = '豆哥商城'
    } else if (pt.startsWith('/static/insurance')) {
        g('project-name').innerText = '工场保险'
    }

})

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mobx_store')
        .addEventListener('click', function () {
            chrome.tabs.executeScript(null, {
                file: "javascripts/inject-mobx-stores.js"
            }, function () {
                window.close()
            })
        })

    document.getElementById('mobx_data')
        .addEventListener('click', function () {


            chrome.tabs.executeScript(null, {
                file: "javascripts/inject-mobx-data.js"
            }, function () {
                window.close()
            })
        })
});