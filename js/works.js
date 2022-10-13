///script for lightbox

(function () {
    'use strict';

    const images = document.getElementsByTagName('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxBG = document.getElementsByClassName('lightboxBackground')[0];
    const prev = document.getElementsByClassName('lightboxPrev')[0];
    const next = document.getElementsByClassName('lightboxNext')[0];
    const cross = document.getElementsByClassName('lightboxCross')[0];
    const columns = document.getElementsByClassName('column');
    const grid = document.getElementsByClassName('grid')[0];
    

    const spook = document.getElementsByClassName('spook')[0];
    
    //On resize window
    document.getElementsByTagName("BODY")[0].onresize = function() {squareImages()};
    //Make images square
    function squareImages() {

        for (let i = 0; i < grid.children.length; i++) {  //loop though the columns children
            grid.children[i].style.height = String(grid.children[i].clientWidth) + "px";
            for (let j = 0; j < grid.children[i].children.length; j++) {  
                //loop though the columns children children... for worksLink
                grid.children[i].children[j].style.height = String(grid.children[i].children[j].clientWidth) + "px";
            }
        }
    }
    squareImages();

    

    //Image hover
    for (var i = 0; i < images.length; i++) {
        //images[i].onmouseover = function() {imageMouseOver(images[i])};
        images[i].addEventListener('mouseover', function() {imageMouseOver()});
        images[i].onmouseout = function() {imageMouseOut(images[i])};
    }
    function imageMouseOver() {
        var image = event.target;
        
        //spook.style.display = 'block';
        spook.children[0].src = image.src;

        var rect = image.getBoundingClientRect();
        spook.style.left=String(rect.left) + 'px';
        spook.style.top=String(rect.top) + 'px';
        console.log(rect.left, rect.top)

        
        spook.children[0].style.width = image.style.width;
    };
    function imageMouseOut(e) {
        //
    };

    //Make images clickable
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () { showLightbox(images[i]) });
    }


    //Lightbox arrow buttons
    prev.addEventListener('click', function() { changeImage(false) });
    next.addEventListener('click', function() { changeImage(true) });

    lightboxBG.addEventListener('click', hideLightbox);
    cross.addEventListener('click', hideLightbox);


    //Flip trough lightbox with arrows
    document.addEventListener('keydown', function(event) {
        let key = event.key;
        
        switch (key) {
            case 'ArrowLeft':
                if (!lightbox.classList.contains('hidden')) changeImage(false);
                break;
            case 'ArrowRight':
                if (!lightbox.classList.contains('hidden')) changeImage(true);
                break;
        }      
    });

    
    function showLightbox(imageElement) {
        lightboxBG.classList.toggle('hidden');
        lightbox.classList.toggle('hidden');
        prev.classList.toggle('hidden');
        next.classList.toggle('hidden');
        cross.classList.toggle('hidden');
        //title.classList.toggle('hidden');

        //Hide the image links in the portfolio
        const worksLinks = document.getElementsByClassName('worksLink');
        for (let i = 0; i < worksLinks.length; i++) {
            worksLinks[i].classList.toggle('hidden');
        }
        
        const img = document.createElement('img');
        const text = document.createElement('p');
        text.className = 'lightboxText';

        //regular image
        if (imageElement.nodeName === 'IMG') {
            img.src = imageElement.src;
            text.innerHTML = imageElement.alt;
        } else {
            //its a worksLink
            //the image is its first child
            img.src = imageElement.children[0].src;
            text.innerHTML = imageElement.children[0].alt;
            const link = document.createElement('a');
            link.href = imageElement.children[1].href;
            link.innerHTML = ' ...Goto Project &#10095'
            text.appendChild(link)
        }
        lightbox.appendChild(img);
        lightbox.appendChild(text);

        //lightbox.style.width = String(img.clientWidth+50) + 'px';
        //lightbox.style.height = String(img.clientHeight+50) + 'px';

        lightboxBG.innerHTML = String(window.innerWidth-100) + 'px';

        //lightbox.style.width = String(window.innerWidth-100) + 'px';
        //lightbox.style.height = String(window.innerHeight-100) + 'px';
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        lightbox.style.width = String(img.clientWidth) + 'px';
        lightbox.style.height = String(img.clientHeight) + 'px';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.paddingBottom = '5em';
        img.style.paddingLeft = '10px';
        img.style.paddingRight = '10px';
        img.style.paddingTop = '10px';
        lightbox.style.width = String(img.clientWidth+20) + 'px';
        lightbox.style.height = String(img.clientHeight+20) + 'px';
        text.style.top = String(img.clientHeight-40) + 'px';
        /*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            text.innerHTML = "MOBILLLL";
        } else {
            text.innerHTML = "DATOOOR";
        }*/

        // Create a media condition that targets viewports at least 768px wide
        const mediaQuery = window.matchMedia('(max-width: 768px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            // Then trigger an alert
            console.log("mobil")
            lightbox.style.width = '90%';
            lightbox.style.height = '90%';
            text.style.top = '88%';
        }
    }
    
    function hideLightbox() {
        lightboxBG.classList.toggle('hidden');
        lightbox.classList.toggle('hidden');
        prev.classList.toggle('hidden');
        next.classList.toggle('hidden');
        cross.classList.toggle('hidden');
        //if (title) title.classList.toggle('hidden');

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
        const columns = document.getElementsByClassName('column');
        const currentImage = lightbox.children[0].src;
        let col, img; //goto column nr and image nr

        //find the image in the columns
        //find which column and which children index and goto next column
        for (let i = 0; i < images.length; i++) {
            if (currentImage === images[i].src) {
                for (let j = 0; j < columns.length; j++) {
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
                }
            }
        }

        hideLightbox();
        //console.log("col: "+ String(col) + " img:" + String(img));
        let srcArray;
        if (columns[col].children[img].nodeName === 'IMG') {
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
        }
    }

})();
