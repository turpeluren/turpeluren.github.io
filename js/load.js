(function () {
    'use strict';

    // footer
    fetch('https://turpelurpeluren.online/resources/footer.html') // the page we want to use for our footer
    .then(data => {
        return data.text()
    })
    .then( data => {
        document.getElementById("footer").innerHTML = data; // inserts to element id="footer"
    })
    // copy end

    // header
    //  handled in sidebar.js

    // sidepatterns
    var sPatterns = document.getElementById("sidepatterns");
    if (sPatterns) {
        fetch('https://turpelurpeluren.online/resources/sidepatterns.html') // the page we want to use for our sidepatterns
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data; // inserts to element id="sidepatterns"
        })
    }




    //related articles

    // sidepatterns
    var sPatterns = document.getElementById("related_vessel");
    if (sPatterns) {
        fetch('https://turpelurpeluren.online/resources/related/related_vessel.html') // the page we want to use for our sidepatterns
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data; // inserts to element id="sidepatterns"
        })
    }


})();