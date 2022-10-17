///script for sidebar and mobile function

(function () {
    'use strict';

    const portfoliocollapse = document.getElementsByClassName('portfoliocollapse')[0];
    const portfolionav = document.getElementsByClassName('portfolionavbar')[0];
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const topnavLinks = document.getElementsByClassName('topnavLinks')[0];
    const topLogo = document.getElementsByClassName('logoTopLeft')[0];
    const icons = document.getElementsByClassName('horizontal');



    //Portfolio navbar collapsable button (mobile) 
    portfoliocollapse.addEventListener('click', function() {expandPortfolioNav()});

    function expandPortfolioNav() {
        //toggle active and change symbol for button
        portfoliocollapse.classList.toggle('active');
        if (portfoliocollapse.classList.contains('active')) {
            portfoliocollapse.children[0].innerHTML = '&#8855'; //'&#9932';
        } else {
            portfoliocollapse.children[0].innerHTML = '&#9776';
        }

        sidebarEffects();
    }

    function sidebarEffects() {
        //button effects on sidebar etc..
        topLogo.children[0].style.left = 'calc(50% - 1em)'; //center logo (säkerhets skull)
        if (sidebar.style.width) {
            sidebar.style.width = null;
            topnavLinks.style.width = null;
            topLogo.children[0].style.top = '1.5em'; //'calc(50% - 1em)';
            for (var i=0; i<icons.length; i++) {
                icons[i].style.width = '0';
            }
            //grid.style.marginLeft = null;
        } else {
            if (sidebar.children.length > 0) {
                //Only pull out the sidebar if it has content
                sidebar.style.width = '350px';
            } else {
                sidebar.style.width = '0px';
            }
            topnavLinks.style.width = '40%'; //Kan behöva göra längre var vaksam
            topLogo.children[0].style.top = '-100px';
            for (var i=0; i<icons.length; i++) {
                icons[i].style.width = '1.5em';
            }
            //grid.style.marginLeft = '350px';
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
            topLogo.children[0].style.top = '1.5em';
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