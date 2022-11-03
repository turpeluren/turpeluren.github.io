(function () {
    'use strict';

    window.onload = () => {

        // footer
        // copy below to add more pages
        fetch('https://turpelurpeluren.online/resources/footer.html') // the page we want to use for our footer
        .then(data => {
            return data.text()
        })
        .then( data => {
            document.getElementById("footer").innerHTML = data; // inserts to element id="footer"
        })
        // copy end

        // header
        // copy below to add more pages
        fetch('https://turpelurpeluren.online/resources/header.html') // the page we want to use for our header
        .then(data => {
            return data.text()
        })
        .then( data => {
            document.getElementById("header").innerHTML = data; // inserts to element id="header"
        })
        // copy end

        // sidepatterns
        var sPatterns = document.getElementById("sidepatterns");
        if (sPatterns) {
            // copy below to add more pages
            fetch('https://turpelurpeluren.online/resources/sidepatterns.html') // the page we want to use for our sidepatterns
            .then(data => {
                return data.text()
            })
            .then( data => {
                sPatterns.innerHTML = data; // inserts to element id="sidepatterns"
            })
            // copy end
        }
    }

})();