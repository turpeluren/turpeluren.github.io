(function () {
    'use strict';

    document.getElementById('send').onclick = function() {
        var request = new XMLHttpRequest();
        request.open("POST", "WEBHOOK_URL_HERE");
            request.setRequestHeader('Content-type', 'application/json');
        var params = {
            username: "Question"+new Date().getTime(), // you can make this whatever you want
            content: document.getElementById("question").value
        }
        request.send(JSON.stringify(params));

        // below gives your user some helpful feedback letting them know their message has been sent
        alert('Thanks, your message has been sent.');
        // below clears the form fields after submission
        document.getElementById("question").value = '';
    }

})();