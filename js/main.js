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

    //const aboutLink = document.getElementsByClassName('aboutHomeLink')[0];
    //const introLink = document.getElementsByClassName('introHomeLink')[0];
    //const homeLinks = document.getElementsByClassName('homeLinks')[0];
    //let introHeight = document.defaultView.getComputedStyle(introLink).height;
    //let menuHeight = document.defaultView.getComputedStyle(homeLinks).height;

    //get what page we are on
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    //set the height of 'about' button on home screen
    if (sPage === 'home.html') {
        //setAboutLinkHeight();
    }
    

    //collapsibles
    const coll = document.getElementsByClassName('collapsible');

    for (let i=0; i < coll.length; i++) {
        coll[i].nextElementSibling.style.maxHeight = null;
        //coll[i].nextElementSibling.style.display = 'none';
        coll[i].addEventListener('click', function() {
            this.classList.toggle('collapsibleActive');
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                //content.style.maxHeight = '0px';
                content.style.maxHeight = null;
                //content.style.display = 'none';
            } else {
                //content.style.maxHeight = '0px';
                content.style.maxHeight = content.scrollHeight+'px';
                //content.style.display = 'block';
            }
        });
    }


    //parallax background home
    window.onscroll = function() {scrollBackground()};

    const sidePatterns = document.getElementsByClassName('sidePattern');

    function scrollBackground() {
        
        if (sPage === 'home.html') {
            const bg = document.getElementsByClassName('background')[0];
            const menu = document.getElementsByClassName('scrollHomeLinks')[0];
            const homeContent = document.getElementsByClassName('homeContent')[0];
            bg.style.top = '-'+String(document.documentElement.scrollTop/8)+'px';

            
            if (document.documentElement.scrollTop < 600) {
                menu.style.top = '0px';
            } else {
                menu.style.top = String(600-document.documentElement.scrollTop)+'px';
            }

            /*
            if (document.documentElement.scrollTop > window.innerHeight*1.9) {
                //get up the footer
                const footer = document.getElementsByClassName('footer')[0]
                document.getElementsByClassName('homeFooterScroll')[0].style.height = String(2*window.innerHeight-footer.clientHeight)+'px';
                document.getElementsByClassName('homeFooterScroll')[0].style.display = block;
            } else {
                document.getElementsByClassName('homeFooterScroll')[0].style.height = String(2*window.innerHeight)+'px';
                document.getElementsByClassName('homeFooterScroll')[0].style.display = none;
            }*/
        }

        //Transparent header on scroll (mobile)
        transparentHeader();

        //and scroll sidepatterns
        if (sidePatterns) {
            for (let i=0; i<sidePatterns.length; i++) {
                if (!sidePatterns[i].classList.contains('goat')) {
                    if (document.documentElement.scrollTop < 100) {
                        sidePatterns[i].style.top = String(100 - document.documentElement.scrollTop)+'px';
                        sidePatterns[i].style.backgroundPosition = '0 0';
                    } else {
                        sidePatterns[i].style.top = 0;
                        console.log(document.documentElement.scrollTop)
                        sidePatterns[i].style.backgroundPosition = '0 calc(100px - '+String(document.documentElement.scrollTop)+'px';
                    }
                    // Create a media condition that targets viewports at least 1200px wide
                    const mediaQuery = window.matchMedia('(max-width: 1200px)')
                    // Check if the media query is true
                    if (mediaQuery.matches) {
                        sidePatterns[i].style.top = '160px';
                    }
                }
            }
        }
    }
    

    //Transparent header on scroll (mobile)
    function transparentHeader() {
        const header = document.getElementsByClassName('topnav')[0];
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const topnavBg = document.getElementById('topnavBg');
        if (sidebar) {
            if (document.documentElement.scrollTop > 80 && !sidebar.style.width) {
                header.style.backgroundColor = 'rgba(0,0,0,0)';
                header.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))'; //use gradient to set empty background
            } else {
                header.style.backgroundColor = 'rgb(49, 41, 33)';
                if (topnavBg) {
                    header.style.backgroundImage = topnavBg.style.backgroundImage;
                }
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