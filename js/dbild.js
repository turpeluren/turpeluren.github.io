
const jsondata = '{'+
    '"y2018": {'+
        '"jan": {'+

        '},'+
        '"feb": {'+
            
        '},'+
        '"mar": {'+

        '},'+
        '"apr": {'+
            
        '},'+
        '"maj": {'+

        '},'+
        '"jun": {'+
            
        '},'+
        '"jul": {'+

        '},'+
        '"aug": {'+
            
        '},'+
        '"sep": {'+

        '},'+
        '"okt": {'+
            
        '},'+
        '"nov": {'+

        '},'+
        '"dec": {'+
            
        '}'+
    '},'+
    '"y2021": {'+
        '"jan": {'+
            
        '},'+
        '"feb": {'+
            
        '},'+
        '"mar": {'+

        '},'+
        '"apr": {'+
            
        '},'+
        '"maj": {'+

        '},'+
        '"jun": {'+
            
        '},'+
        '"jul": {'+

        '},'+
        '"aug": {'+
            
        '},'+
        '"sep": {'+

        '},'+
        '"okt": {'+
            
        '},'+
        '"nov": {'+
            '"n13": "lLHotkQ"'+
        '},'+
        '"dec": {'+
            '"n31": "O2f81WH"'+
        '}'+
    '}'+
'}';

(function () {
    //'use strict';


    const data = JSON.parse(jsondata);
    const pointer = ["y2021", "nov", "n13"];
    const playBtn = document.getElementsByClassName('play')[0];
    const playIcon = playBtn.children[0];
    const date = document.getElementById('date');
    const img = document.getElementById('image');
    let imgURL = "";

    playBtn.addEventListener('click', play);

    function play() {
        playIcon.classList.toggle('paused');
    }

    // display image from the json object
    //  using the pointer array
    imgURL = eval("data."+pointer[0]+"."+pointer[1]+"."+pointer[2]);
    img.src = "https://imgur.com/" + imgURL + "h.jpg";

    date.innerHTML = getDate();

    function getDate() {
        //day
        let date = pointer[2].slice(1) + " ";
        //month
        if (pointer[1] === "jan") {
            date += "januray";
        } else if (pointer[1] === "feb") {
            date += "february";
        } else if (pointer[1] === "mar") {
            date += "mars";
        } else if (pointer[1] === "apr") {
            date += "april";
        } else if (pointer[1] === "maj") {
            date += "may";
        } else if (pointer[1] === "jun") {
            date += "june";
        } else if (pointer[1] === "jul") {
            date += "july";
        } else if (pointer[1] === "aug") {
            date += "august";
        } else if (pointer[1] === "sep") {
            date += "september";
        } else if (pointer[1] === "okt") {
            date += "october";
        } else if (pointer[1] === "nov") {
            date += "november";
        } else if (pointer[1] === "dec") {
            date += "december";
        }
        //year
        date += " " + pointer[0].slice(1);
        return date;
    }

    function stepBack() {
        //go through the json
    }

})();