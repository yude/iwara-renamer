browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request && request.action === 'download_file') {
        browser.downloads.download({
            url: request.remoteUrl,
            filename: 'iwara.tv/' + request.fileName
        });
    }
});