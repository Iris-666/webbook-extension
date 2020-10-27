function gotMessage(message, sender, sendResponse) {
    console.log(message);

    if (message.thisPageVisitCount > 3) {
        let tagNames = ['div', 'header', 'section']
        for (let i = 0; i < tagNames.length; i++) {}

        // document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/f0/18/8a/f0188a4680b2ef1ef813b9602b990798.jpg')"
        let allDivs = document.getElementsByTagName('div');
        let allHeaders = document.getElementsByTagName('header')
        let allSections = document.getElementsByTagName('section')
        let allMains = document.getElementsByTagName('main')
        let allPres = document.getElementsByTagName('pre')
        let allTables = document.getElementsByTagName('table')
        let allPs = document.getElementsByTagName('p')
        let allh3s = document.getElementsByTagName('h3')


        console.log(allTables)

        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.backgroundColor = "transparent"
        }

        for (let i = 0; i < allHeaders.length; i++) {
            allHeaders[i].style.backgroundColor = "transparent"
        }

        for (let i = 0; i < allSections.length; i++) {
            allSections[i].style.backgroundColor = "transparent"
        }

        for (let i = 0; i < allMains.length; i++) {
            allMains[i].style.backgroundColor = "transparent"
        }

        for (let i = 0; i < allPres.length; i++) {
            allPres[i].style.backgroundColor = "transparent"
        }

        for (let i = 0; i < allTables.length; i++) {
            allTables[i].style.backgroundColor = "transparent"
        }

        for (let i = 0; i < allPs.length; i++) {
            allPs[i].style.backgroundColor = "transparent"
        }

        for (let i = 0; i < allh3s.length; i++) {
            allh3s[i].style.backgroundColor = "transparent"
        }

        if (message.thisPageVisitCount < 10) {
            document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/11/29/36/112936939ca1abe3c4615adeeeb42cfb.jpg')"
        } else if (message.thisPageVisitCount < 20) {
            document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/f0/18/8a/f0188a4680b2ef1ef813b9602b990798.jpg')"
        } else {
            document.body.style.backgroundImage = "url('https://i.pinimg.com/474x/28/10/d6/2810d6f8b870137056dbfaf7645506ba.jpg')"

        }
    }

}

chrome.runtime.onMessage.addListener(gotMessage);

// let tagNames = ['div', 'header', 'section']
// for (let i = 0; i < tagNames.length; i++) {}

// document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/f0/18/8a/f0188a4680b2ef1ef813b9602b990798.jpg')"
// let allDivs = document.getElementsByTagName('div');
// let allHeaders = document.getElementsByTagName('header')
// let allSections = document.getElementsByTagName('section')
// let allMains = document.getElementsByTagName('main')
// let allPres = document.getElementsByTagName('pre')
// let allTables = document.getElementsByTagName('table')
// let allPs = document.getElementsByTagName('p')
// let allh3s = document.getElementsByTagName('h3')


// console.log(allTables)

// for (let i = 0; i < allDivs.length; i++) {
//     allDivs[i].style.backgroundColor = "transparent"
// }

// for (let i = 0; i < allHeaders.length; i++) {
//     allHeaders[i].style.backgroundColor = "transparent"
// }

// for (let i = 0; i < allSections.length; i++) {
//     allSections[i].style.backgroundColor = "transparent"
// }

// for (let i = 0; i < allMains.length; i++) {
//     allMains[i].style.backgroundColor = "transparent"
// }

// for (let i = 0; i < allPres.length; i++) {
//     allPres[i].style.backgroundColor = "transparent"
// }

// for (let i = 0; i < allTables.length; i++) {
//     allTables[i].style.backgroundColor = "transparent"
// }

// for (let i = 0; i < allPs.length; i++) {
//     allPs[i].style.backgroundColor = "transparent"
// }

// for (let i = 0; i < allh3s.length; i++) {
//     allh3s[i].style.backgroundColor = "transparent"
// }