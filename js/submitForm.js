(function () {
    'use strict';

    document.getElementById('send').onclick = function() {
        var request = new XMLHttpRequest();
        request.open("POST", "https://discordapp.com/api/webhooks/1331284332702204015/LvYccn2hXRzIRSR6-ehIDpVwtz4vn_tcJyQ6ND9f--kEq06JmH5uA6ShkAeXzYqnO2qE");
        request.setRequestHeader('Content-type', 'application/json');
        // the below variables combine a label (text) + the textarea value + a newline (\n)
        // add up to 2,000 characters (Discord's character limit)
        var name = document.getElementById("name").value;
        var email = 'Mail: ' + document.getElementById("email").value + "\n";
        var message = 'Message: ' + document.getElementById("question").value;
    
        // you have to combine both into one single variable before you can pass it to discord
        var date = new Date();
        var f_date = date.toLocaleDateString('sv-SE');
        var username = name + " " + f_date;
        var msg = email + message;
        // play with it a bit until you get a feel for how you want the incoming messages to look!
    
        var params = {
        // you can set the username to anything you want
            username: username,
            content: msg,
        }
        request.send(JSON.stringify(params));

        // below gives your user some helpful feedback letting them know their message has been sent
        alert('Thanks, your message has been sent.');
        // below clears the form fields after submission
        document.getElementById("question").value = '';
    }

})();