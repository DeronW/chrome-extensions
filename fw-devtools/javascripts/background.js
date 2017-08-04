chrome.runtime.onStartup.addListener(function () {
    chrome.storage.local.get(null, obj => {
        console.log(JSON.stringify(ojb))
    })
})