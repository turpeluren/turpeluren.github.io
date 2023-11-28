(function () {
    'use strict';

	const siteIndex = {
		"pages": [
			{"name": "404.html", "href": "404.html"},
			{"name": "about.html", "href": "about.html"},
			{"name": "ads.txt", "href": "ads.txt"},
			{"name": "blog.html", "href": "blog.html"},
			{"name": "dbild.html", "href": "dbild.html"},
			{"name": "digital.html", "href": "digital.html"},
			{"name": "drawings.html", "href": "drawings.html"},
			{"name": "home.html", "href": "home.html"},
			{"name": "index_old.html", "href": "index_old.html"},
			{"name": "index.html", "href": "index.html"},
			{"name": "miscellaneous.html", "href": "miscellaneous.html"},
			{"name": "package.json", "href": "package.json"},
			{"name": "paitings.html", "href": "paitings.html"},
			{"name": "randomantagning.html", "href": "randomantagning.html"},
			{"name": "robots.txt", "href": "robots.txt"},
			{"name": "sculpture.html", "href": "sculpture.html"},
			{"name": "videos.html", "href": "videos.html"},
			{"name": "works.html", "href": "works.html"},
			{"name": "blog_posts/", "href": 0, "subpages": [
				{"name": "dbild_blogpost.html", "href": "blog_posts/dbild_blogpost.html"},
				{"name": "example_post.html", "href": "blog_posts/example_post.html"},
				{"name": "microdosing.html", "href": "blog_posts/microdosing.html"}
			]
			},
			{"name": "projects/", "href": 0, "subpages": [
				{"name": "project_boundless.html", "href": "projects/project_boundless.html"},
				{"name": "project_eirik.html", "href": "projects/project_eirik.html"},
				{"name": "project_pheasant.html", "href": "projects/project_pheasant.html"},
				{"name": "project_rightfully.html", "href": "projects/project_rightfully.html"},
				{"name": "project_soapholder.html", "href": "projects/project_soapholder.html"},
				{"name": "project_table.html", "href": "projects/project_table.html"},
				{"name": "project_vessel.html", "href": "projects/project_vessel.html"},
				{"name": "related_projects.txt", "href": "projects/related_projects.txt"}
			]
			},
			{"name": "resources/", "href": 0, "subpages": [
				{"name": "footer.html", "href": "resources/footer.html"},
				{"name": "header.html", "href": "resources/header.html"},
				{"name": "related_articles.html", "href": "resources/related_articles.html"},
				{"name": "related_projects.html", "href": "resources/related_projects.html"},
				{"name": "sidepatterns.html", "href": "resources/sidepatterns.html"},
				{"name": "related/", "href": 0, "subpages": [
					{"name": "related_boundless.html", "href": "resources/related/related_boundless.html"},
					{"name": "related_dbild.html", "href": "resources/related/related_dbild.html"},
					{"name": "related_pheasant.html", "href": "resources/related/related_pheasant.html"},
					{"name": "related_rightfully.html", "href": "resources/related/related_rightfully.html"},
					{"name": "related_soapholder.html", "href": "resources/related/related_soapholder.html"},
					{"name": "related_table.html", "href": "resources/related/related_table.html"},
					{"name": "related_vessel.html", "href": "resources/related/related_vessel.html"},
				]
				}
			]
			},
			{"name": "a/", "href": 0, "subpages": [
				{"name": "b", "href": "a/b"},
				{"name": "c", "href": "a/c.html"},
				{"name": "d", "href": "d"}
			]
			}
		]
		/*printLine('Index of turpelurpeluren.online:\n\n'+
								
								'* <a href="drawings.html">drawings.html</a>\n'+
								'* <a href="home.html">home.html</a>\n'+
								'* <a href="index_old.html">index_old.html</a>\n'+
								'* <a href="miscellaneous.html">miscellaneous.html</a>\n'+
								'* <a href="package.json">package.json</a>\n'+
								'* <a href="paitings.html">paitings.html</a>\n'+
								'* <a href="randomantaning.html">randomantagning.html</a>\n'+
								'* <a href="robots.txt">robots.txt</a>\n'+
								'* <a href="sculpture.html">sculpture.html</a>\n'+
								'* <a href="videos.html">videos.html</a>\n'+
								'* <a href="works.html">works.html</a>\n'+
								'* <a href="works.html">works.html</a>\n'+
								'blog_posts/\n'+
								'\t* <a href="blog_posts/dbild_blogpost.html">dbild_blogpost.html</a>\n'+
								'\t* <a href="blog_posts/example_post.html">example_post.html</a>\n'+
								'\t* <a href="blog_posts/microdosing.html">microdosing.html</a>\n'+
								'projects/\n'+
								'\t* <a href="projects/project_boundless.html">project_boundless.html</a>\n'+
								'\t* <a href="projects/project_eirik.html">project_eirik.html</a>\n'+
								'\t* <a href="projects/project_pheasant.html">project_pheasant.html</a>\n'+
								'\t* <a href="projects/project_rightfully.html">project_rightfully.html</a>\n'+
								'\t* <a href="projects/project_soapholder.html">project_soapholder.html</a>\n'+
								'\t* <a href="projects/project_table.html">project_table.html</a>\n'+
								'\t* <a href="projects/project_vessel.html">project_vessel.html</a>\n'+
								'\t* <a href="projects/related_projects.txt">related_projects.txt</a>\n'+
								'resources/\n'+
								'\t* <a href="resources/footer.html">footer.html</a>\n'+
								'\t* <a href="resources/header.html">header.html</a>\n'+
								'\t* <a href="resources/related_articles.html">related_articles.html</a>\n'+
								'\t* <a href="resources/related_projects.html">related_projects.html</a>\n'+
								'\t* <a href="resources/sidepatterns.html">sidepatterns.html</a>\n'+
								'\trelated/\n'+
								'\t\t* <a href="resources/related/related_boundless.html">related_boundless.html</a>\n'+
								'\t\t* <a href="resources/related/related_dbild.html">related_dbild.html</a>\n'+
								'\t\t* <a href="resources/related/related_pheasant.html">related_pheasant.html</a>\n'+
								'\t\t* <a href="resources/related/related_rightfully.html">related_rightfully.html</a>\n'+
								'\t\t* <a href="resources/related/related_soapholder.html">related_soapholder.html</a>\n'+
								'\t\t* <a href="resources/related/related_table.html">related_table.html</a>\n'+
								'\t\t* <a href="resources/related/related_vessel.html">related_vessel.html</a>\n'+
								'');*/
	}
	var history = [];
	var present = "";
	var historyindex = -1;

	var input = document.getElementById('cmd');
	const freshinput = document.getElementById('ccmd');
	const maintext = document.getElementById('maintext');
	const userline = document.getElementById('user');
	const user = 'user'+ String(Date.now()) + '@turpelurpeluren.online:~$ ';
	userline.innerText = user;
	userline.appendChild(input);

	input.focus();

	document.addEventListener('click', function(){
		input.focus();
	});

	document.addEventListener('keydown', function(event) {
		//save current input field
		if (historyindex == -1) {
			present = input.innerText;
		} else {
			//history[historyindex] = input.innerText; //do not rewrite history
		}

        //enter
        if(event.key == "Enter") {
			
			printCommand(input.innerText);

			matchCommand(input.innerText);
			
			//replace input element. otherwise it did a line break
			input.remove();
			input = freshinput.cloneNode();
			input.classList.add('input');
			userline.appendChild(input);
			setTimeout(function(){ input.focus(); }, 1);

			historyindex = -1;
			present = "";

			window.scrollTo(0, document.body.scrollHeight);
        }
		//scroll through history
		else if ((event.key == "ArrowUp" || event.key == "ArrowDown") && historyindex < history.length) {
			if (historyindex === -1) historyindex = history.length; //history.length-1 is newest entry
			historyindex += parseInt((event.key === "ArrowDown") - (event.key === "ArrowUp"));
			if (historyindex < 0) historyindex = 0; //0 is oldest entry
			if (historyindex >= history.length) historyindex = -1; //past newest entry is present
			
			if (historyindex >= 0) {
				input.innerText = history[historyindex];
			} else {
				//historyindex = -1;
				input.innerText = present;
			}
		}
    });

	function printCommand(line) {
		var cmdline = document.createElement('p');
		var textline = document.createElement('p');
		cmdline.innerHTML = user;
		cmdline.classList.add('user');
		textline.innerText = line + '\n';
		maintext.appendChild(cmdline);
		maintext.appendChild(textline);
	}

	function printLineText(line) {
		var textline = document.createElement('p');
		textline.innerText = line + '\n';
		maintext.appendChild(textline);
	}

	function printLine(line) {
		var textline = document.createElement('p');
		textline.innerHTML = line + '\n';
		maintext.appendChild(textline);
	}

	function printIndex(ntabs, start) {
	// loops through siteIndex json object and prints it all
		const tabs = '\t'.repeat(ntabs);
		for(var i = 0; i < start.length; i++) {
			if (start[i].href == 0) 
			{
				printLineText(tabs+start[i].name);
				printIndex(ntabs+1, start[i].subpages);
				
			} else
			{
				printLine(tabs+'* <a href=' + start[i].href + '>' + start[i].name + '</a>');
			}
		}
	}

	function isPath(tryPath, start) {
	// loops through siteIndex json object and checks if a given path is there
		for(var i = 0; i < start.length; i++) {
			if (start[i].href == 0) 
			{
				if(isPath(/*start[i].name + */tryPath, start[i].subpages)) return true;
			} else
			{
				if (tryPath === start[i].href || tryPath === (start[i].href).split('.')[0]) {
					return true;
				}
			}
		}
		return false;
	}

	function sendMessage(name, info, message) {

		var request = new XMLHttpRequest();
		request.open("POST", "https://discordapp.com/api/webhooks/1039221226712875170/COYPEqaVrlKTWCnqrjCPjyea9nlrHi-wdBpvLwXW4VyswzOeNogUbkkVoCuSEu2MdMKK");
		request.setRequestHeader('Content-type', 'application/json');
		// the below variables combine a label (text) + the textarea value + a newline (\n)
		// add up to 2,000 characters (Discord's character limit)
	
		// you have to combine both into one single variable before you can pass it to discord
		var date = new Date();
		var f_date = date.toLocaleDateString('sv-SE');
		var username = name + " " + f_date;
		var msg = "\n\nCONTACT: " + info + "\n\n-----START-OF-MESSAGE-----\n\n" + message + "\n\n------END-OF-MESSAGE------\n";
		// play with it a bit until you get a feel for how you want the incoming messages to look!
	
		var params = {
		// you can set the username to anything you want
			username: username,
			content: msg,
		}
		request.send(JSON.stringify(params));
	
	}

	function matchCommand(val) {
		val = val.replace(/\s+/g, ' '); //replace extra whitespace with one space
		var args = val.split(' '); //split into args

		history[history.length] = val;

		switch (args[0]) {

			case 'help':
				printLineText('goto [subpath]\t\t- follows the URL path (from turpelurpeluren.online/)\n'+
						'help\t\t\t- displays a list of commands\n'+
						'index [-all]\t\t- indexes site pages\n'+
						'links\t\t\t- lists my external links\n'+
						'message [name] [contact] [message]\n\t\t\t- send me a message\n'
						); /* ändra username?*/
				break;

			case 'message':
				if (args.length >= 4) {
					var msg = args[3];
					for (var i = 4; i < args.length; i++) {
						msg += " " + args[i];
					}
					sendMessage(args[1], args[2], msg);
					printLineText("Message: '" + msg + "' was sent from " + args[1] +
					" who can be reached on " + args[2] + ".\n");
				} else {
					printLineText('Usage: message [name] [contact] [message]\neg: message Steve steve@email.online whatsup B)\n');
				}
				break;

			case 'goto':
				switch (args[1]) {
					case undefined:
					case '':
					case ' ':
						printLineText('Usage: goto [subpath]\neg: goto projects/project_table\n');
						break;
					default:	
						var tryPath = 'https://turpelurpeluren.online/' + args[1];
						printLineText('trying to access: turpelurpeluren.online/' + args[1] + ' ...');
						if (isPath(args[1], siteIndex.pages)) {
							printLineText('opening turpelurpeluren.online/' + args[1] + ' ...\n');
							window.location = tryPath;
						} else {
							printLineText('turpelurpeluren.online/' + args[1] + ' is not a vaild path.\n');
						}
				}
				break;

			case 'index':
				switch (args[1]) {
					case '-all':
						printLineText('Index of turpelurpeluren.online:\n');
						printIndex(0, siteIndex.pages);
						printLineText('');
						break;

					case undefined:
					case '':
					case ' ':
						printLine('Index of turpelurpeluren.online:\n\n'+
								'* <a href="about">about</a>\n'+
								'* <a href="blog">blog</a>\n'+
								'* <a href="home">home</a>\n'+
								'* <a href="works">works</a>\n');
						break;

					default:
						printLineText('Usage: index [-all]\n');
				}
				break;

			case 'links':
				printLine("Turpelurpeluren's links:\n\n"+
						'* <a href="https://www.instagram.com/turpelurpeluren/">instagram</a>\n'+
						'* <a href="https://ko-fi.com/turpelurpeluren">ko-fi</a>\n'+
						/*'* <a href="https://gamejolt.com/@turpeluren/games">gamejolt</a>\n'+*/
						'* <a href="https://feraldreamssanctuary.bigcartel.com/">shop</a>\n'+
						'* <a href="https://randomantagning.se/">randomantagning.se</a>\n'+
						'* <a href="https://twitter.com/turpeluren">twitter</a>\n'+
						'* <a href="https://www.youtube.com/channel/UCp84o6z4oaivyHp9REwZT6g">youtube</a>\n');
						/* redbubble / teepublic? */
						/* gamejolt */
				break;

			default:
				printLineText('command not found: ' + val + '\n');
		}
	}

	printLineText('\nWelcome to\n'+
	' _                   _                 _                           _ _         \n'+
	'| |_ _ _ ___ ___ ___| |_ _ ___ ___ ___| |_ _ ___ ___ ___   ___ ___| |_|___ ___ \n'+
	'|  _| | |  _| . | -_| | | |  _| . | -_| | | |  _| -_|   |_| . |   | | |   | -_|\n'+
	'|_| |___|_| |  _|___|_|___|_| |  _|___|_|___|_| |___|_|_|_|___|_|_|_|_|_|_|___|\n'+
	'            |_|               |_|                                              \n\n'+
	'Glad you could make it to my domain on the internet!\n'+
	'Type help for a list of commands.\n');

})();