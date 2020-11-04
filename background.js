console.log("this is background script");

// https://stackoverflow.com/questions/7303452/how-to-get-current-tabid-from-background-page
// get all active tabs in window
// chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){console.log(d[0].id);})
let historyList = [];
let historyVisit = [];

// chrome.history.search({ text: '' }, function(data) {
//     data.forEach(function(page) {
//         historyVisit.push(page)
//     });
// });


//when a new website has been visited
chrome.history.onVisited.addListener(function(data) {
    historyVisit.push(data)
    console.log(data.visitCount)
    console.log(historyVisit)
    let whetherBookmark = false;

    // the following is for getting window scroll position of the active tab
    //when tab is active
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {

        //visit count
        let visitCount = {
            historyVisit: historyVisit,
            thisPageVisitCount: data.visitCount
        }
        chrome.tabs.sendMessage(tabs[0].id, visitCount);
        console.log(visitCount);

        //history websites info
        for (let i = 0; i < historyList.length; i++) {
            if (tabs[0].url == historyList[i].storedURL) {
                console.log('this website is revisited')
                chrome.tabs.sendMessage(tabs[0].id, {
                    bookmarkPos: "bookmarkPos",
                    posY: historyList[i].windowY,
                })
            }
        }

        //when bookmark is clicked, receive button click message from popup script
        chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

            if (message.loaded == 'pageLoaded') {

                for (let i = 0; i < historyList.length; i++) {
                    if (tabs[0].url == historyList[i].storedURL) {
                        whetherBookmark = true;
                        posY = historyList[i].windowY
                    }
                }

                if (whetherBookmark == true) {
                    chrome.tabs.sendMessage(tabs[0].id, {
                        thisPageVisitCount: data.visitCount,
                        posY: posY,
                        historyVisit: historyVisit,
                        whetherBookmark: "bookmarkTrue"
                    })
                } else {
                    chrome.tabs.sendMessage(tabs[0].id, {
                        thisPageVisitCount: data.visitCount,
                        historyVisit: historyVisit,
                        whetherBookmark: "bookmarkFalse"
                    })

                }
            }

            // console.log(message.type);
            if (message.type = "getTabId") {
                //send tabID to content script
                //(tabs.sendmessage: specific for sending message to content script)
                chrome.tabs.sendMessage(tabs[0].id, tabs[0].id
                    //get response: scrolling position
                    , (response) => {
                        console.log("X: " + response.scrollX + " , " + "Y: " + response.scrollY);

                        //store window Y position and urls
                        var windowY = response.scrollY;
                        console.log(windowY);

                        //create a pair for website url and position
                        let websiteInfo = {
                            windowY: windowY,
                            storedURL: data.url
                        }

                        let revisit = false;

                        for (let i = 0; i < historyList.length; i++) {
                            if (historyList[i].storedURL == data.url) {
                                historyList[i].windowY = windowY
                                revisit = true
                            }
                        }

                        if (revisit == false) {
                            historyList.push(websiteInfo);
                        }

                        console.log(historyList);

                        historyList.push(websiteInfo);
                        console.log(historyList);

                        chrome.storage.local.set(websiteInfo, function() {
                            console.log("windowY position and url are stored at", windowY, historyList);
                        });

                        //get window Y position and urls
                        chrome.storage.local.get(websiteInfo, function(result) {
                            console.log("get window position and url");
                            console.log(websiteInfo);
                        })
                    })
            }

        })
    })


})