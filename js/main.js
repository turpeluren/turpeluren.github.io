(function () {
    'use strict';

    /*console.log(document.location.href)
    let url = document.location.href;
    url = url + '/&nocache=' + new Date().getTime();
    console.log(url)
    document.location.href = url;*/

    //Change the background image
    /*(function background() {
        var sPath = window.location.pathname;
        var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
        if (sPage == "index.html" || sPage == "") {
            document.body.className = "home"
            console.log('index')
        } else if (sPage == "blog.html") {
            document.body.className = "blog";
            console.log('blog')
        } else if (sPage == "works.html") {
            document.body.className = "works";
            console.log('works')
        } else {
            document.body.className = "portfolio";
        }
    })();*/

    /*setTimeout(scrollZero, 10);

    function scrollZero () {
        console.log(window.scrollX)
        /*window.scrollX = 0;*/
    //}

    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    /*if (sPage = 'factors.html') {
        showFactors();
    }*/


    //Home Scroll (menu scrolls up at beginning)
    console.log(sPage);
    if (sPage === 'home.html') {
        console.log(document.getElementsByClassName('homeScroll')[0]);
        //document.getElementsByClassName('homeScroll')[0].style.height = '0px'; //set homescroll height to 0, it animates automaticly
    }


    window.onscroll = function() {scrollBackground()};

    function scrollBackground() {
            if (sPage === 'home.html') {
            console.log(document.documentElement.scrollTop);
            const bg = document.getElementsByClassName('background')[0];
            bg.style.top = '-'+String(document.documentElement.scrollTop/8)+'px';

            if (document.documentElement.scrollTop > window.innerHeight*1.9) {
                //get up the footer
                const footer = document.getElementsByClassName('footer')[0]
                document.getElementsByClassName('homeFooterScroll')[0].style.height = String(2*window.innerHeight-footer.clientHeight)+'px';
                document.getElementsByClassName('homeFooterScroll')[0].style.display = block;
            } else {
                document.getElementsByClassName('homeFooterScroll')[0].style.height = String(2*window.innerHeight)+'px';
                document.getElementsByClassName('homeFooterScroll')[0].style.display = none;
            }
        }
    }



    (function () {
        /*window.resizeTo(300, 300);*/

        
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.innerWidth = 768;
    }

    /*window.innerWidth = 800;*/
    /*console.log(window.innerWidth)*/

    window.scrollTo(0, window.scrollY);
    console.log(window.scrollX, window.scrollY)
})();


/*function showFactors() {
    'use strict';

    console.log('factors');

    //Vilja, Openmind, En till
    /*let paramsCurrent = [.5, .5, .5];
    let paramsGoTo = [.5, .5, .5];

    let dayByDay = [
        [.2, .6, .3],
        [.9, .75, .5],
        [.6, .5, .2]
    ];

    const frame = document.getElementsByClassName('frame')[0];
    console.log(frame);

    const row = document.createElement('div');
    row.classList.add('factorRow');
    frame.appendChild(row);
    const factorLeft = document.createElement('div');
    factorLeft.classList.add('factorLeft');
    row.appendChild(factorLeft);
    factorLeft.innerHTML = "Fokus"
    const factorRight = document.createElement('div');
    factorRight.classList.add('factorRight');
    row.appendChild(factorRight);
    factorRight.innerHTML = "Scatter-mind"
    
    const factorMiddle = document.createElement('div');
    factorMiddle.classList.add('factorMiddle');
    row.appendChild(factorMiddle);

    const slider = document.createElement('hr');
    factorMiddle.appendChild(slider);

}*/