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

    // vessel
    if (document.getElementById("related_vessel")) {
        fetch('https://turpelurpeluren.online/resources/related/related_vessel.html') 
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data;
        })
    }
    // boundless
    if (document.getElementById("related_boundless")) {
        fetch('https://turpelurpeluren.online/resources/related/related_boundless.html') 
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data;
        })
    }
    // table
    if (document.getElementById("related_table")) {
        fetch('https://turpelurpeluren.online/resources/related/related_table.html') 
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data;
        })
    }
    // pheasant
    if (document.getElementById("related_pheasant")) {
        fetch('https://turpelurpeluren.online/resources/related/related_pheasant.html') 
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data;
        })
    }
    // rightfully
    if (document.getElementById("related_rightfully")) {
        fetch('https://turpelurpeluren.online/resources/related/related_rightfully.html') 
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data;
        })
    }
    // soapholder
    if (document.getElementById("related_soapholder")) {
        fetch('https://turpelurpeluren.online/resources/related/related_soapholder.html') 
        .then(data => {
            return data.text()
        })
        .then( data => {
            sPatterns.innerHTML = data;
        })
    }

})();