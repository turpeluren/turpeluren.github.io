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
    }

})();