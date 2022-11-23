(function () {
    'use strict';

    //essentials
    
    // header handled in sidebar.js

    // footer
    loadResource("footer", 'https://turpelurpeluren.online/resources/footer.html', false);

    // sidepatterns
    loadResource("sidepatterns", 'https://turpelurpeluren.online/resources/sidepatterns.html', false);



    //related articles
    //projects top
    loadResource("related_projects", 'https://turpelurpeluren.online/resources/related/related_projects.html', true);
    //articles top
    loadResource("related_articles", 'https://turpelurpeluren.online/resources/related/related_articles.html', true);

    // vessel
    loadResource("related_vessel", 'https://turpelurpeluren.online/resources/related/related_vessel.html', false);

    // boundless
    loadResource("related_boundless", 'https://turpelurpeluren.online/resources/related/related_boundless.html', false);

    // table
    loadResource("related_table", 'https://turpelurpeluren.online/resources/related/related_table.html', false);

    // pheasant
    loadResource("related_pheasant", 'https://turpelurpeluren.online/resources/related/related_pheasant.html', false);

    // rightfully
    loadResource("related_rightfully", 'https://turpelurpeluren.online/resources/related/related_rightfully.html', false);

    // soapholder
    loadResource("related_soapholder", 'https://turpelurpeluren.online/resources/related/related_soapholder.html', false);


    //loadResource function
    function loadResource(elementId, resourceUrl, add) {
        /// loads a resource from a file url to a given element

        if (document.getElementById(elementId)) { // if element exists

            var content = null;
            if (add === true) {
                content = document.getElementById(elementId).innerHTML;
            }

            fetch(resourceUrl) //fetch resource
            .then(data => {
                return data.text() //get data
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data + content; //paste in element
            })
        }
    }

})();