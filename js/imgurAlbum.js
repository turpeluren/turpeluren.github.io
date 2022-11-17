(function () {
    'use strict';

    function httpGet(theUrl)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            var xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                createDiv(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", theUrl, false );
        xmlhttp.send();    
    }


    /*document.write(httpGet("https://imgur.com/a/xjqVfMC"));*/
    console.log(httpGet("https://imgur.com/a/xjqVfMC"));

    function createDiv(responsetext)
    {
        var _body = document.getElementsByTagName('body')[0];
        var _div = document.createElement('div');
        _div.innerHTML = responsetext;
        _body.appendChild(_div);
    }

    //window.onload = () => {

        // footer
        /*fetch('https://imgur.com/a/xjqVfMC', 'no-cors') // the page we want to use for our album
        .then(data => {
            console.log(data.text());
            return data.text()
        })
        .then( data => {
            document.getElementById("imguralbum").innerHTML = data; // inserts to element id="footer"
        })*/

})();