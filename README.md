# webbook-extension


### Technical Explanation

1. Changing the background of all websites

It's tricky to change the background of all the websites with the same codes. When we tried to realize this function at first, we found that change the background image of the body only works with few web pages. That's because for most websites, some colored divs or other elements are covered on top of the body. To solve this problem, we find most DOM elements that may be colored and set their background color to transparent. This method works for most web pages, but if some websites use some weird colored DOM elements that we didn't cover in the code, this method would not work.

2. The missing letters

We did this by firstly scanning through most possible DOM elements that may contain texts, and getting their innerText. Then randomly pick the index of the lost letter. The number of the lost letters would be depend on the length of the whole texts as well as how many times the page has been visited. Also, we found that in HTML, only one space would be showed on web page even if you type two. Therefore, we replace the letter with "\u00A0", which force it to render extra space on the page.

3. Sending message to the newly visited web page

In our project, we need to send message from background script to the content script of the newly opened web page about the visit count, bookmark position, etc. However, we found that the new tab always fails to receive the message. We guessed that it may because the message was sent too fast that the page hasn't loaded. Therefore, we put the send message function inside a setTimeout function to delay the message sending. This worked on most websites, but when the website takes more than the time we set to load, the content script still can't receive the message. We tried to use the chrome.webNavigation.onCompleted API in background script. It works, but leads to some other weird bugs. Finally, we found the way that let the content script to send a message to background script when the page is loaded. When the background script receives that message, it will then send all the information.
