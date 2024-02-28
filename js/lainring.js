(function () {
    'use strict';
    document.addEventListener("DOMContentLoaded", function(event) {
        /* Try to retrieve the json file */
        fetch('https://turpelurpeluren.online/js/lainring.json').then(res => res.json()).then((data) => {
            let out = '';
            /* For each element in the JSON, build an anchor-image DOM structure */
            data.items.forEach(element => {
                /* This string is split in multiple lines for readability */
                out += '<a title="' + element.title + '" ' +
                    'href="' + element.url + '">' +
                    '<img src="' + element.img + '" alt="' + element.title + '" /></a>';
            });
            /* Inject the DOM structure into the element with the id 'lainring' */
            document.getElementById('lainring').innerHTML = out;
        }).catch(err => {
            /* throw an error */
            throw err
        });
    });
})();