document.getElementById('gaIdGrabber').addEventListener('click', function () {
    chrome.tabs.executeScript({
        file: "grab.js"
    });
});