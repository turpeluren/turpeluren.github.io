(function () {
    'use strict';

    //essentials
    
    // header handled in sidebar.js

    // footer
    loadResource("footer", 'https://turpelurpeluren.online/resources/footer.html');

    // sidepatterns
    loadResource("sidepatterns", 'https://turpelurpeluren.online/resources/sidepatterns.html');



    //related articles
    //projects top
    loadResource("related_projects", 'https://turpelurpeluren.online/resources/related_projects.html', true);
    //articles top
    loadResource("related_articles", 'https://turpelurpeluren.online/resources/related_articles.html', true);

    // vessel
    loadResource("related_vessel", 'https://turpelurpeluren.online/resources/related/related_vessel.html');

    // boundless
    loadResource("related_boundless", 'https://turpelurpeluren.online/resources/related/related_boundless.html');

    // table
    loadResource("related_table", 'https://turpelurpeluren.online/resources/related/related_table.html');

    // pheasant
    loadResource("related_pheasant", 'https://turpelurpeluren.online/resources/related/related_pheasant.html');

    // rightfully
    loadResource("related_rightfully", 'https://turpelurpeluren.online/resources/related/related_rightfully.html');

    // soapholder
    loadResource("related_soapholder", 'https://turpelurpeluren.online/resources/related/related_soapholder.html');


    //loadResource function
    function loadResource(elementId, resourceUrl, add=false) {
        /// loads a resource from a file url to a given element

        if (document.getElementById(elementId)) { // if element exists

            var content = "";
            var holder;
            if (add === true) { //auto false
                content = document.getElementById(elementId).innerHTML;
                holder = document.createElement('div');
                holder.innerHTML = content;
            }

            fetch(resourceUrl) //fetch resource
            .then(data => {
                return data.text() //get data
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data; //paste in element
                if (add) {
                    //for related content to be pasted under the title
                    document.getElementById(elementId).children[0].appendChild(holder); //append the old content inside first child at end
                }
            })
        }
    }

})();