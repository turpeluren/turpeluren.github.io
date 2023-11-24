///population grapher

(function () {
    'use strict';

	const e = 2.71828;

	const dots = document.getElementsByClassName('dots')[0];
	const N0Input = document.getElementsByClassName('N0')[0].children[0];
	const growthInput = document.getElementsByClassName('growth')[0].children[0];
	const rInput = document.getElementsByClassName('r')[0].children[0];
	const sizeInput = document.getElementsByClassName('size')[0].children[0];

	const ylabel = document.getElementsByClassName('ylabel')[0];
	const xlabel = document.getElementsByClassName('xlabel')[0];

	var n0 = 5;
	var growth = 10;
	var r = 15;
	var size = 100;

	var xax = "t";
	var yax = "N";

	ylabel.innerText = yax;
	xlabel.innerText = xax;

	var ypos = n0;

	n0 = N0Input.value;
	growth = growthInput.value;
	r = rInput.value;

	var step = size;

	function graph() {
		dots.innerHTML = "";
		console.log('cleared');
		for (var x = 0; x < step; x++) {
			ypos = n0 + e**x/size/size;/*x*growth*/;
			draw(x);
		}
	}

	function draw(x) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dots.appendChild(dot);

		dot.style.top = "calc(100% - " + ypos*100/size + "%)";
		dot.style.left = x/step*100 + "%";
	}

	//creates a listener for when you press a key
	window.onkeyup = keyup;
	var inputTextValue;

	function keyup(e) {

		inputTextValue = e.target.value

		n0 = parseFloat(N0Input.value);
		growth = parseFloat(growthInput.value);
		r = parseFloat(rInput.value);
		size = parseFloat(sizeInput.value);
		ypos = n0;
		step = size;

		//setting your input text to the global Javascript Variable for every key press

		if (e.keyCode == 'e') {}

		//listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
		if (e.keyCode == 13) {
			//enter
		}

		graph();
	}

})();