let historyList = [];

chrome.history.search({ text: '' }, function(data) {
    data.forEach(function(page) {
        // console.log(page.visitCount);
        // console.log(page.url)
        historyList.push(page)
    });
});

chrome.history.onVisited.addListener(function(data) {
    historyList.push(data)
    console.log(data.visitCount)
    console.log(historyList)
    historyList.forEach(function(page) {
        // console.log(page.visitCount)
    })
    setTimeout(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log(tabs[0])
            chrome.tabs.sendMessage(tabs[0].id, { historyList: historyList, thisPageVisitCount: data.visitCount });
        });
    }, 1000); //Without setTimeout, it will send the request too fast that the tab can't receive it
})