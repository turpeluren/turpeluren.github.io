
const jsondata = '{'+
    '"y2018": {'+
        '"jan1": {'+

        '},'+
        '"feb2": {'+
            
        '},'+
        '"mar3": {'+

        '},'+
        '"apr4": {'+
            
        '},'+
        '"maj5": {'+

        '},'+
        '"jun6": {'+
            
        '},'+
        '"jul7": {'+

        '},'+
        '"aug8": {'+
            
        '},'+
        '"sep9": {'+

        '},'+
        '"okt10": {'+
            
        '},'+
        '"nov11": {'+

        '},'+
        '"dec12": {'+
            
        '}'+
    '},'+
    '"y2021": {'+
        '"jan1": {'+
            
        '},'+
        '"feb2": {'+
            
        '},'+
        '"mar3": {'+

        '},'+
        '"apr4": {'+
            
        '},'+
        '"maj5": {'+

        '},'+
        '"jun6": {'+
            
        '},'+
        '"jul7": {'+

        '},'+
        '"aug8": {'+
            
        '},'+
        '"sep9": {'+

        '},'+
        '"okt10": {'+
            
        '},'+
        '"nov11": {'+
            '"n13": "lLHotkQ"'+
        '},'+
        '"dec12": {'+
            '"n3": "ZxLCTHw",'+
            '"n24": "l8Iag8t",'+
            '"n31": "O2f81WH"'+
        '}'+
    '}'+
'}';

(function () {
    //'use strict';


    const data = JSON.parse(jsondata);
    const pointer = ["y2021", "dec12", "n31"];
    const playBtn = document.getElementsByClassName('play')[0];
    const playIcon = playBtn.children[0];
    const backBtn = document.getElementsByClassName('backStep')[0];
    const forwBtn = document.getElementsByClassName('frontStep')[0];
    const date = document.getElementById('date');
    const img = document.getElementById('image');
    let imgURL = "";

    playBtn.addEventListener('click', play);
    backBtn.addEventListener('click', stepBack);

    updateImage();

    function play() {
        playIcon.classList.toggle('paused');
    }

    function updateImage() {
        // display image from the json object
        //  using the pointer array
        imgURL = eval("data."+pointer[0]+"."+pointer[1]+"."+pointer[2]);
        img.src = "https://imgur.com/" + imgURL + "h.jpg";

        //update date
        date.innerHTML = getDate();
    }

    function getDate() {
        //day
        let date = pointer[2].slice(1) + " ";
        //month
        if (pointer[1] === "jan1") {
            date += "januray";
        } else if (pointer[1] === "feb2") {
            date += "february";
        } else if (pointer[1] === "mar3") {
            date += "mars";
        } else if (pointer[1] === "apr4") {
            date += "april";
        } else if (pointer[1] === "maj5") {
            date += "may";
        } else if (pointer[1] === "jun6") {
            date += "june";
        } else if (pointer[1] === "jul7") {
            date += "july";
        } else if (pointer[1] === "aug8") {
            date += "august";
        } else if (pointer[1] === "sep9") {
            date += "september";
        } else if (pointer[1] === "okt10") {
            date += "october";
        } else if (pointer[1] === "nov11") {
            date += "november";
        } else if (pointer[1] === "dec12") {
            date += "december";
        }
        //year
        date += " " + pointer[0].slice(1);
        return date;
    }

    function stepBack() {
        //go through the json
        var yy = parseInt(pointer[0].slice(1));
        var mm = parseInt(pointer[1].slice(3));
        var dd = parseInt(pointer[2].slice(1));
        console.log(String(yy)+" "+String(mm)+" "+String(dd));

        gotoCorrectDayInMonth();
        
        function gotoCorrectDayInMonth() {
            // while previous day data does not exist & before 1st of the month
            while (!eval("data."+pointer[0]+"."+pointer[1]+".n"+String(dd-1)) && dd > 1) {
                // step back one day in the same month
                pointer[2] = "n"+String(dd-1);
                dd = dd - 1;
            }
            if (eval("data."+pointer[0]+"."+pointer[1]+".n"+String(dd-1))) {
                //return if landed on a valid day
                pointer[2] = "n"+String(dd-1);
                console.log(pointer[2]);
                updateImage()
                return
            }
        }

        //logs the month before the pointer
        for (key in Object.keys(data.y2021)) {
            if (Object.keys(data.y2021)[key].includes(String(mm-1))) {
                console.log(Object.keys(data.y2021)[key])
            }
        }


    }

})();