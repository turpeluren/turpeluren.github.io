///script for sidebar and mobile function

(function () {
    'use strict';
    

    let portfoliocollapse = document.getElementsByClassName('portfoliocollapse')[0];
    let portfolionav = document.getElementsByClassName('portfolionavbar')[0];
    let sidebar = document.getElementsByClassName('sidebar')[0];
    let topnavLinks = document.getElementsByClassName('topnavLinks')[0];
    let topLogo = document.getElementsByClassName('logoTopLeft')[0];
    let icons = document.getElementsByClassName('horizontal');
    let header = document.getElementsByClassName('topnav')[0];
    let topnavBg = document.getElementById('topnavBg');


    //Portfolio navbar collapsable button (mobile) 
    portfoliocollapse.addEventListener('click', function() {expandPortfolioNav()});
    

    function expandPortfolioNav() {
        //toggle active and change symbol for button
        portfoliocollapse.classList.toggle('active');
        if (portfoliocollapse.classList.contains('active')) {
            portfoliocollapse.children[0].innerHTML = '&#9587';//'&#8855'; //'&#9932';
        } else {
            portfoliocollapse.children[0].innerHTML = '&#9776';
        }

        sidebarEffects();
    }

    function sidebarEffects() {
        //button effects on sidebar etc..
        topLogo.children[0].style.left = 'calc(50% - 1em)'; //center logo (säkerhets skull)
        if (sidebar.style.width) { // fäll in sidebar
            sidebar.style.width = null;
            topnavLinks.style.width = null;
            topLogo.children[0].style.top = '1.5em'; //'calc(50% - 1em)';
            //topLogo.style.top = '1.75em'; //'calc(50% - 1em)';
            for (var i=0; i<icons.length; i++) {
                icons[i].style.width = '0';
            }
            header.style.backgroundColor = 'rgba(0,0,0,0)';
            header.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))'; //gradient to set empty bg image
            if (document.documentElement.scrollTop < 80) {
                header.style.backgroundColor = 'rgb(49, 41, 33)';
                if (topnavBg) {
                    header.style.backgroundImage = topnavBg.style.backgroundImage; //get image back from topnavBg-element
                }
            }
            //shift back body and header
            document.body.style.marginLeft = '0px';
            header.style.marginLeft = '0px';
            // remove icons
            const ic = document.getElementsByClassName('sidebarIcon');
            console.log(ic)
            const len = ic.length;
            for (let i=ic.length-1; i>=0; i--) {
                ic[i].remove();
            }


        } else { // fäll ut sidebar
            if (sidebar.children.length > 0) {
                //Only pull out the sidebar if it has content
                sidebar.style.width = '550px';
                // and shift the document body & header
                document.body.style.marginLeft = '550px';
                header.style.marginLeft = '-550px';
            } else {
                sidebar.style.width = '0px';
            }
            topnavLinks.style.width = '46%'; //Kan behöva göra längre var vaksam
            topLogo.children[0].style.top = '-100px';
            /*for (var i=0; i<icons.length; i++) {
                icons[i].style.width = '1.5em';
            }*/
            //topnav background (color or image)
            header.style.backgroundColor = 'rgb(49, 41, 33)';
            if (topnavBg) {
                header.style.backgroundImage = topnavBg.style.backgroundImage;
            }
            // copy icons to sidebar
            for (let i=icons.length-1; i >= 0; i--) {
                let iconCopy = icons[i].cloneNode(true);
                iconCopy.classList.toggle('horizontal');
                iconCopy.classList.toggle('right');
                iconCopy.classList.toggle('sidebarIcon');
                sidebar.appendChild(iconCopy);
            }
        }
    }

    //reverse any errors from dynamic page
    window.onresize = function() {checkCorrect()};

    function checkCorrect() {
        //when full width
        if (window.innerWidth > 1200) {
            //icons visible
            for (var i=0; i<icons.length; i++) {
                icons[i].style.width = '1.5em';
            }
            //remove sidebar
            sidebar.style.width = null;
            //put logo in place
            topLogo.children[0].style.top = '1.75em';
            topLogo.children[0].style.left = 'initial';
        } else {
            //when mobile width
            //put logo in place
            /*topLogo.children[0].style.top = '1.5em';
            topLogo.children[0].style.left = 'calc(50% - 1em)';*/
            //icons not visible
            /*for (var i=0; i<icons.length; i++) {
                icons[i].style.width = '0';
            }*/
            sidebarEffects();
            sidebarEffects();
        }
    }
})();