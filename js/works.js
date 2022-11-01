///script for lightbox

(function () {
    'use strict';

    const images = document.getElementsByTagName('img');
    const lightbox = document.getElementById('lightbox');
    const prev = document.getElementsByClassName('lightboxPrev')[0];
    const next = document.getElementsByClassName('lightboxNext')[0];
    const cross = document.getElementsByClassName('lightboxCross')[0];
    const columns = document.getElementsByClassName('column');
    const grid = document.getElementsByClassName('grid')[0];
    

    if (grid) {
    
        //On resize window
        document.getElementsByTagName("BODY")[0].onresize = function() {squareImages()};
        //Make images square
        function squareImages() {

            const scale = 1;
            for (let i = 0; i < grid.children.length; i++) {  //loop though the columns children
                grid.children[i].style.height = String(grid.children[i].clientWidth*scale) + "px";
                if (grid.children[i].classList.contains('worksLink')) {
                    grid.children[i].style.height = String(grid.children[i].clientWidth*scale-6) + "px"; //workLinks blev 6px högre av nån anledning
                }
                for (let j = 0; j < grid.children[i].children.length; j++) {  
                    //loop though the columns children children... for worksLink
                    grid.children[i].children[j].style.height = String(grid.children[i].children[j].clientWidth*scale) + "px";
                }
            }
        }
        squareImages();

    }


    //Make images clickable
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () { showLightbox(images[i]) });
    }


    //Lightbox arrow buttons
    prev.addEventListener('click', function() { changeImage(-1) });
    next.addEventListener('click', function() { changeImage(1) });

    lightbox.addEventListener('click', hideLightbox);
    cross.addEventListener('click', hideLightbox);


    //Flip trough lightbox with arrows
    document.addEventListener('keydown', function(event) {
        let key = event.key;
        
        switch (key) {
            case 'ArrowLeft':
                if (!lightbox.classList.contains('hidden')) changeImage(-1);
                break;
            case 'ArrowRight':
                if (!lightbox.classList.contains('hidden')) changeImage(1);
                break;
        }      
    });

    
    function showLightbox(imageElement) {
        lightbox.classList.toggle('hidden');
        prev.classList.toggle('hidden');
        next.classList.toggle('hidden');
        cross.classList.toggle('hidden');
        //title.classList.toggle('hidden');

        //Hide the image links in the portfolio
        /*const worksLinks = document.getElementsByClassName('worksLink');
        for (let i = 0; i < worksLinks.length; i++) {
            worksLinks[i].classList.toggle('hidden');
        }*/
        
        const img = document.createElement('img');
        img.className = 'lightboxImg';
        const text = document.createElement('p');
        text.className = 'lightboxText';
        const background = document.createElement('div');
        background.className = 'lightboxBg';

        //regular image
        if (imageElement.nodeName === 'IMG') {
            const splitUrl = imageElement.src.split('.');
            const fileType = splitUrl[splitUrl.length-1];
            let correctUrl = '';
            //turpeluren.github.io/d/d/d.jpg
            //[0],       [1],   [2],     [3]    length = 4
            for (let i=0; i < splitUrl.length-1; i++){
                correctUrl = correctUrl + splitUrl[i];
                if (i < splitUrl.length-2) {
                    correctUrl = correctUrl + '.';
                }
            } //Get the url minus the file type (ex .jpg)
            if (correctUrl.includes('_full')) {
                img.src = correctUrl+'.'+fileType;
            } else {
                img.src = correctUrl+'_full.'+fileType;
            }
            //console.log(imageElement.src)
            text.innerHTML = imageElement.alt;
        }
        img.style.zIndex = '4';
        text.style.zIndex = '4';
        lightbox.appendChild(img);
        lightbox.appendChild(text);
        lightbox.appendChild(background);

        console.log(imageElement)
        if (imageElement.parentElement.classList.contains('worksLink') 
        && imageElement.parentElement.children[1].classList.contains('blogArticle')) { //nodeName === 'OBJECT') {
            //worksLink

            img.classList.add('hidden');
            text.classList.add('hidden');
            background.remove();

            const project = imageElement.parentElement.children[1]; //OBJECT element
            //const projectView = document.createElement('div'); //('OBJECT');

            const projectView = project.cloneNode(true);

            /*for (let i=0; i < project.children.length; i++) {
                projectView.appendChild(project.children[i]);
            } //projectView.data = project.data;*/
            

            lightbox.appendChild(projectView);
            /*projectView.className = 'blogArticle';*/
            projectView.style.height = 'auto';
            projectView.style.textAlign = 'left';
            projectView.style.backgroundColor = '#fff';
            projectView.classList.remove('hidden');
            lightbox.style.overflowY = 'scroll';
            lightbox.scrollTop = 0;
            /*projectView.style.maxWidth = '100%';
            projectView.style.maxHeight = '100%';
            projectView.style.height = '100%';
            projectView.style.width = '100%';*/
            projectView.style.zIndex = '4';

            document.documentElement.style.overflowY = 'hidden';
            document.documentElement.style.marginRight = '1em';

        } else {

            //regular image

            //img.style.maxWidth = '1024px';
            //img.style.maxHeight = '100%';

            /*img.style.paddingBottom = '5em';
            img.style.paddingLeft = '10px';
            img.style.paddingRight = '10px';
            img.style.paddingTop = '10px';*/

            //text.style.top = String(window.innerHeight-40) + 'px';
        }




        /*
        // Create a media condition that targets viewports at least 768px wide
        const mediaQuery = window.matchMedia('(max-width: 768px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            // Then trigger an alert
            console.log("mobil")
        }*/
    }
    
    function hideLightbox() {
        lightbox.classList.toggle('hidden');
        prev.classList.toggle('hidden');
        next.classList.toggle('hidden');
        cross.classList.toggle('hidden');
        //if (title) title.classList.toggle('hidden');
        
        //make document scrollable again
        document.documentElement.style.overflowY = 'unset';
        document.documentElement.style.marginRight = 'unset';
        lightbox.style.overflowY = 'unset';

        //Shpw the image links in the portfolio
        const worksLinks = document.getElementsByClassName('worksLink');
        for (let i = 0; i < worksLinks.length; i++) {
            worksLinks[i].classList.toggle('hidden');
        }

        while(lightbox.lastChild) {
            lightbox.removeChild(lightbox.lastChild);
        }
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
    }

    function changeImage(step) {
        //const columns = document.getElementsByClassName('column');
        let currentImage, goToImg;
        if (grid) {
            currentImage = lightbox.children[0].src.split('_full')[0]+lightbox.children[0].src.split('_full')[1];
        } else {
            currentImage = lightbox.children[0].src;
        }
        let img; //goto img nr
        const first = 5; //first lightboxable image index

        //loop through all images
        /*WARING*/ //this depends on there being 4 images before the first lightboxable image
                    //namely: logo and three icons
                    //also the lightboxImg is index 4
        
        for (let i = first; i < images.length; i++) {
            if (currentImage === images[i].src) {

                img = i+step; //get -1 eller 1
                
                if (images[img].parentElement.classList.contains('grid') ||
                images[img].parentElement.classList.contains('display') ||
                images[img].parentElement.classList.contains('blogArticle')) {
                    //lägg ngt här så bara rätt bilder visas
                    //senare ture ser ingen nytta för detta
                }

                //Check so the img is not a child of a worksLink or the lightbox
                checkIsChild()
                function checkIsChild() {
                    //När man bläddrar (bakåt) till en worksLink för att inte den 
                    //  sista bilden i artikeln ska visas utan bilden i gridet ska vara main
                    if (images[img].parentElement.parentElement) {
                        if (images[img].parentElement.parentElement.classList.contains('worksLink') ||
                        images[img].parentElement.parentElement.classList.contains('lightbox') ||
                        images[img].parentElement.parentElement.classList.contains('blogArticle')) {
                            let totProjectImgs = 0;
                            for (let j=0; j < images[img].parentElement.children.length; j++) { //bläddra vidare ett steg för varje img i artikeln
                                if (images[img].parentElement.children[j].nodeName === 'IMG') {
                                    totProjectImgs += 1;
                                }
                            }
                            img += (step) * totProjectImgs;
                        }
                    }
                }
                
                if (img >= images.length-3) { //-3 är inklusive tre icons i footern!
                    img = first; //första bild efter icons, logo & lightbox
                }
                if (img < first) {
                    img = images.length-4; //-5 för att skippa ikonerna i footern
                }

                checkIsChild();
                
                goToImg = images[img];
                break;
            }
        }
        hideLightbox();
        showLightbox(goToImg);
    }

    console.log(images)

        //find the image in the columns
        //find which column and which children index and goto next column
                /*for (let j = 0; j < columns.length; j++) {
                    if (images[i].parentElement === columns[j] || images[i].parentElement.parentElement === columns[j]) { //or statement for worksLinks
                        for (let k = 0; k < columns[j].children.length; k++) {
                            if (columns[j].children[k] === images[i] || columns[j].children[k].children[0] === images[i]) { //or statement for worksLinks
                                //console.log('i '+String(i) + ', j '+ String(j) + ', k '+String(k))
                                if (step) {
                                    //goto column j+1, image k or first column image k+1
                                    if (j >= columns.length-1) {
                                        //last column
                                        if (i >= images.length-1) {
                                            //last image
                                            col = 0;
                                            img = 0;
                                        } else {
                                            col = 0;
                                            img = k+1;
                                        }
                                    } else {
                                        col = j+1;
                                        img = k;
                                    }
                                } else {
                                    if (j <= 0) {
                                        if (k <= 0) {
                                            col = columns.length-1;
                                            img = columns[col].children.length-1;
                                        } else {
                                            col = columns.length-1;
                                            img = k-1;
                                        }
                                    } else {
                                        col = j-1;
                                        img = k;
                                    }
                                }
                            }
                        }
                    }
                }*/


        
        /*let srcArray;
        if (images[img].nodeName === 'IMG') {
            //regular image
            srcArray = images[img].src.split('/');
        }*/


        /*} else {
            //worksLink with image as child 0
            srcArray = columns[col].children[img].children[0].src.split('/');
        }*/
        /*if (srcArray[srcArray.length-1] !== "empty" && srcArray[srcArray.length-1] !== "empty1" && srcArray[srcArray.length-1] !== "empty2" && srcArray[srcArray.length-1] !== "empty3") {
            showLightbox(columns[col].children[img]);
        } else {
            showLightbox(columns[col].children[img]);
            changeImage(step);
        }*/


        /*if (columns[col].children[img].nodeName === 'IMG') {
            //regular image
            srcArray = columns[col].children[img].src.split('/');
        } else {
            //worksLink with image as child 0
            srcArray = columns[col].children[img].children[0].src.split('/');
        }
        if (srcArray[srcArray.length-1] !== "empty" && srcArray[srcArray.length-1] !== "empty1" && srcArray[srcArray.length-1] !== "empty2" && srcArray[srcArray.length-1] !== "empty3") {
            showLightbox(columns[col].children[img]);
        } else {
            showLightbox(columns[col].children[img]);
            changeImage(step);
        }*/



})();
