
const jsondata = '{'+
    '"y2018": {'+
        '"jan1": {'+

        '},'+
        '"feb2": {'+
            
        '},'+
        '"mar3": {'+

        '},'+
        '"apr4": {'+
            '"n10": "R68yNfU"'+
        
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
    '"y2019": {'+
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
    '"y2020": {'+
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
    forwBtn.addEventListener('click', stepForward);

    var yy, mm, dd;
    let size = 'l'; //m: minsta, l: low, h: high: tom string: största
    var playTimeout;
    var isPlaying = false;

    updateImage();

    function play() {

        if (playIcon.classList.contains('paused')) {
            playIcon.classList.remove('paused');
            clearTimeout(playTimeout);
            isPlaying = false;
            size = 'l';
            updateImage();
        } else {
            playIcon.classList.add('paused');
            //playInterval = setInterval(playImages, 100);
            gotoCorrectDayInMonth(1);
            isPlaying = true;
            size = 'm';
        }
    }

    function playImages() {
        gotoCorrectDayInMonth(1);
    }

    function resumePlaying() {
        isPlaying = true;
        gotoCorrectDayInMonth(1);
        console.log('resumes')
    }
    
    img.addEventListener("load", event => {
        var image = document.querySelector('img');
        var isLoaded = image.complete && image.naturalHeight !== 0;
        if (isPlaying) {
            gotoCorrectDayInMonth(1);
            isPlaying = false;
            playTimeout = setTimeout(resumePlaying, 100);
        }
    });

    function updateImage() {
        // display image from the json object
        //  using the pointer array
        imgURL = eval("data."+pointer[0]+"."+pointer[1]+"."+pointer[2]);
        img.src = "https://imgur.com/" + imgURL + size + ".jpg";

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

    function stepForward() {
        //go through the json
        updateDate();

        gotoCorrectDayInMonth(1);
    }

    function stepBack() {
        //go through the json
        updateDate();

        gotoCorrectDayInMonth(-1);
    }

    function updateDate() {
        yy = parseInt(pointer[0].slice(1));
        mm = parseInt(pointer[1].slice(3));
        dd = parseInt(pointer[2].slice(1));
    }

    function gotoCorrectDayInMonth(dir) {
        yy = parseInt(pointer[0].slice(1));
        mm = parseInt(pointer[1].slice(3));
        dd = parseInt(pointer[2].slice(1));

        // while previous day data does not exist & before 1st of the month
        while (!eval("data."+pointer[0]+"."+pointer[1]+".n"+String(dd+dir)) && dd > -1 && dd < 33) {
            // step back one day in the same month
            pointer[2] = "n"+String(dd+dir);
            dd = dd + dir;
        }
        if (eval("data."+pointer[0]+"."+pointer[1]+".n"+String(dd+dir))) {
            //return if landed on a valid day
            pointer[2] = "n"+String(dd+dir);
            console.log(pointer[2]);
            updateImage()
            return
        } else {
            //else goto next month
            gotoNextMonth(dir)
            console.log("data."+pointer[0]+"."+pointer[1]+".n"+String(dd+dir));
            gotoCorrectDayInMonth(dir)
        }
    }

    //logs the month before the pointer
    function gotoNextMonth(dir) {
        if (mm == 1 && dir < 0) {
            gotoNextYear(dir);
        }
        if (mm == 12 && dir > 0) {
            gotoNextYear(dir);
        }
        for (key in Object.keys(data.y2021)) {
            if (Object.keys(data.y2021)[key].includes(String(mm+dir))) {
                //set month pointer
                pointer[1] = Object.keys(data.y2021)[key];
                //reset day pointer 
                if (dir > 0) {
                    pointer[2] = 'n0';
                } else {
                    pointer[2] = 'n32';
                }
                updateDate();
                console.log(mm + " gotoNextMonth")
                return
            }
        }
    }

    function gotoNextYear(dir) {
        if (yy == 2018 && dir < 0) {
            //loop to end
            //reset all pointers
            pointer[0] = 'y2022';
            pointer[1] = 'dec13';
            pointer[2] = 'n32';
            updateDate();
        }
        if (yy == 2021 && dir > 0) {
            //loop to start
            //reset all pointers
            pointer[0] = 'y2017';
            pointer[1] = 'jan0';
            pointer[2] = 'n0';
            updateDate();
        }
        for (key in Object.keys(data)) {
            if (Object.keys(data)[key].includes(String(yy+dir))) {
                //set month pointer
                pointer[0] = Object.keys(data)[key];
                //reset day pointer 
                if (dir > 0) {
                    pointer[1] = 'jan0';
                    pointer[2] = 'n0';
                } else {
                    pointer[1] = 'dec13';
                    pointer[2] = 'n32';
                }
                updateDate();
                return
            }
        }
    }

})();