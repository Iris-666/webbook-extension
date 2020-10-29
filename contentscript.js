function gotMessage(message, sender, sendResponse) {
    console.log(message);

    if (message.thisPageVisitCount > 3) {
        let tagNames = ['div', 'header', 'section', 'main', 'pre', 'table', 'p', 'h3', 'h2', 'h1', 'li']
        for (let i = 0; i < tagNames.length; i++) {
            let thisAllTag = document.getElementsByTagName(tagNames[i]);
            for (let j = 0; j < thisAllTag.length; j++) {
                thisAllTag[j].style.backgroundColor = "transparent";
                thisAllTag[j].style.backgroundImage = "none";

            }
        }


        if (message.thisPageVisitCount < 10) {
            document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/11/29/36/112936939ca1abe3c4615adeeeb42cfb.jpg')"
        } else if (message.thisPageVisitCount < 20) {
            document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/f0/18/8a/f0188a4680b2ef1ef813b9602b990798.jpg')"

        } else {
            document.body.style.backgroundImage = "url('https://i.pinimg.com/474x/28/10/d6/2810d6f8b870137056dbfaf7645506ba.jpg')"
        }
    }

    let allpTags = document.getElementsByTagName('p')
    for (let i = 0; i < allpTags.length; i++) {
        let thisText = allpTags[i].innerText
        let thisTextLength = thisText.length
        let thisLostLetterNum = Math.floor(mapRange(thisTextLength, 0, 200, 0, 50));
        for (let n = 0; n < thisLostLetterNum; n++) {
            let lostLetter = Math.floor(Math.random() * thisTextLength);
            console.log(thisText[lostLetter])
            thisText = thisText.replaceAt(lostLetter, `\u00A0`)
            console.log(thisText)
        }
        allpTags[i].innerText = thisText
    }
}

chrome.runtime.onMessage.addListener(gotMessage);

function mapRange(value, a, b, c, d) { //Simulating the map function in p5.js
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}

// var str = "Hello World";
// str = str.replaceAt(5, '_');
// console.log(str);