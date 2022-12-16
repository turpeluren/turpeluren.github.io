
const jsondata = '{'+
    '"y2018": {'+
        '"jan1": {'+
            '"n1": "xsvUvrE",'+
            '"n2": "na7Clg7",'+
            '"n3": "zXN6UWC",'+
            '"n4": "oLX18RW",'+
            '"n5": "kIzMRCs",'+
            '"n6": "PTTKDK8",'+
            '"n7": "U0QAFOv",'+
            '"n8": "n0lDiad",'+
            '"n9": "Jvkztea",'+
            '"n10": "n0FPtEp",'+
            '"n11": "",'+
            '"n12": "",'+
            '"n13": "",'+
            '"n14": "",'+
            '"n15": "",'+
            '"n16": "",'+
            '"n17": "",'+
            '"n18": "",'+
            '"n19": "",'+
            '"n20": "",'+
            '"n21": "",'+
            '"n22": "",'+
            '"n23": "",'+
            '"n24": "",'+
            '"n25": "",'+
            '"n26": "",'+
            '"n27": "",'+
            '"n28": "",'+
            '"n29": "",'+
            '"n30": "",'+
            '"n31": ""'+
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
    const firstBtn = document.getElementsByClassName('firstStep')[0];
    const lastBtn = document.getElementsByClassName('lastStep')[0];
    const date = document.getElementById('date');
    const img = document.getElementById('image');
    const slider = document.getElementsByClassName('slider')[0].children[0];
    const sliderFps = document.getElementsByClassName('slider')[0].children[2];
    let imgURL = "";

    playBtn.addEventListener('click', play);
    backBtn.addEventListener('click', stepBack);
    forwBtn.addEventListener('click', stepForward);
    firstBtn.addEventListener('click', gotoFirst);
    lastBtn.addEventListener('click', gotoLast);
    slider.addEventListener('input', updateFps);

    img.addEventListener("load", event => {
        //onload for the image, if playing change to next image
        var image = document.querySelector('img');
        var isLoaded = image.complete && image.naturalHeight !== 0;
        if (isPlaying) {
            gotoCorrectDayInMonth(1);
            //set timeout to not change image too fast
            isPlaying = false;
            clearTimeout(playTimeout);
            playTimeout = setTimeout(resumePlaying, fps);
            console.log('updates')
        }
    });

    var yy, mm, dd;
    let size = 'l'; //m: minsta, l: low, h: high: tom string: största
    var playTimeout;
    var isPlaying = false;
    var fps = (1000 / slider.value);

    updateImage();

    function updateImage() {
        // display image from the json object
        //  using the pointer array
        imgURL = eval("data."+pointer[0]+"."+pointer[1]+"."+pointer[2]);
        img.src = "https://imgur.com/" + imgURL + size + ".jpg";

        //update date
        date.innerHTML = getDate();
    }

    function updateFps() {
        fps = (1000 / slider.value);
    }

    function play() {
        if (playBtn.classList.contains('paused')) {
            //pause
            playBtn.classList.remove('paused');
            clearTimeout(playTimeout);
            isPlaying = false;
            size = 'h';
            updateImage();
        } else {
            //play
            playBtn.classList.add('paused');
            resumePlaying();
            size = 'l';
        }
    }

    function resumePlaying() {
        //when the minimum interval has passed for playing 
        //  goto next image
        gotoCorrectDayInMonth(1);
        isPlaying = false;
        playTimeout = setTimeout(resumePlaying, fps);
        console.log('resumes')
    }

    function gotoFirst() {
        pointer[0] = 'y2018';
        pointer[1] = 'jan1';
        pointer[2] = 'n1';
        updateImage();
    }

    function gotoLast() {
        pointer[0] = 'y2021';
        pointer[1] = 'dec12';
        pointer[2] = 'n31';
        updateImage();
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
            /*console.log(pointer[2]);*/
            updateImage()
            return
        } else {
            //else goto next month
            gotoNextMonth(dir)
            /*console.log("data."+pointer[0]+"."+pointer[1]+".n"+String(dd+dir));*/
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
                /*console.log(mm + " gotoNextMonth")*/
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