(function () {
    'use strict';

	const version = '1.0.6'

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
			{"name": "qr.html", "href": "qr.html"},
			{"name": "randomantagning.html", "href": "randomantagning.html"},
			{"name": "robots.txt", "href": "robots.txt"},
			{"name": "sculpture.html", "href": "sculpture.html"},
			{"name": "videos.html", "href": "videos.html"},
			{"name": "works.html", "href": "works.html"},
			{"name": "blog_posts/", "href": 0, "subpages": [
				{"name": "blogelogeluren.html", "href": "blog_posts/blogelogeluren.html"},
				{"name": "dbild_blogpost.html", "href": "blog_posts/dbild_blogpost.html"},
				{"name": "example_post.html", "href": "blog_posts/example_post.html"},
				{"name": "microdosing.html", "href": "blog_posts/microdosing.html"}
			]
			},
            {"name": "js/", "href": 0, "subpages": [
				{"name": "dbild.js", "href": "js/dbild.js"},
				{"name": "dbild.json", "href": "js/dbild.json"},
				{"name": "imgurAlbum.js", "href": "js/imgurAlbum.js"},
				{"name": "index.js", "href": "js/index.js"},
				{"name": "lainring.json", "href": "js/lainring.json"},
				{"name": "load.js", "href": "js/load.js"},
				{"name": "main.js", "href": "js/main.js"},
				{"name": "qr.js", "href": "js/qr.js"},
				{"name": "randomantagning.js", "href": "js/randomantagning.js"},
				{"name": "sidebar.js", "href": "js/sidebar.js"},
				{"name": "submitForm.js", "href": "js/submitForm.js"},
				{"name": "works.js", "href": "js/works.js"},
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
	const cmdline = document.getElementById('cmdline');
	const userline = document.getElementById('user');
	const user = 'user'+ String(Date.now()-1701444160000);
	cmdline.innerHTML = '<p class="user" id="user">'+user+'</p>'+'@turpelurpeluren.terminal:~$ ';
	cmdline.appendChild(input);

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
			cmdline.appendChild(input);
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
		var donecmdline = document.createElement('p');
		var textline = document.createElement('p');
		donecmdline.innerHTML = '<p class="user" id="user">'+user+'</p>'+'@turpelurpeluren.terminal:~$ ';
		donecmdline.classList.add('cmdline');
		textline.innerText = line + '\n';
		maintext.appendChild(donecmdline);
		maintext.appendChild(textline);
	}

	function printLineText(line, parentElement=maintext) {
		var textline = document.createElement('p');
		textline.innerText = line + '\n';
		parentElement.appendChild(textline);
	}

	function printLine(line, parentElement=maintext) {
		var textline = document.createElement('p');
		textline.innerHTML = line + '\n';
		parentElement.appendChild(textline);
	}

	function printIndex(ntabs, start, vline=false) {
	// loops through siteIndex json object and prints it all
		//const tabs = '\t'.repeat(ntabs);
		const tabs = '─'.repeat(ntabs*3);
		var structure = '│'.repeat(Math.min(ntabs,vline))+'\t'.repeat(ntabs)+'├';
		for(var i = 0; i < start.length; i++) {
			if (i == start.length-1) structure = structure.replace('├', '└');
			if (start[i].href == 0) 
			{
				printLineText(structure+tabs+' '+start[i].name);
				printIndex(ntabs+1, start[i].subpages, i!=start.length-1);
				
			} else
			{
				printLine(structure+tabs+' <a href=' + start[i].href + '>' + start[i].name + '</a>');
				if (i == start.length-1 && ntabs > 0) printLine('│'.repeat(Math.min(ntabs,vline)));
			}
		}
	}

	function isPath(tryPath, start, strict=false) {
	// loops through siteIndex json object and checks if a given path is there
		for(var i = 0; i < start.length; i++) {
			if (start[i].href == 0) 
			{
				if(isPath(/*start[i].name + */tryPath, start[i].subpages)) return true;
			} else
			{
				if (tryPath === start[i].href) {
					return true;
				}
				if (!strict && tryPath === (start[i].href).split('.')[0]) {
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
	
		//var date = new Date();
		//var f_date = date.toLocaleDateString('sv-SE');
		var username = name; // + " " + f_date;
		var msg = "\n\nCONTACT: " + info + "\n\n-----START-OF-MESSAGE-----\n\n" + message + "\n\n------END-OF-MESSAGE------\n";
	
		var params = {
			username: username,
			content: msg,
		}
		request.send(JSON.stringify(params));
	
	}

	function printWeb(path, mobile=false, wide=false) {
		if (isPath(path, siteIndex.pages, true)) {
			fetch('https://turpelurpeluren.online/' + path) //fetch resource
			.then(data => {
				return data.text() //get data
			})
			.then(data => {
				//print iframe
				var frame = document.createElement('iframe');
				var wrap = document.createElement('div');
				wrap.classList.add('frameWrap');
				if (mobile) {
					frame.classList.add('mobileView');
					wrap.classList.add('mobileView');
				}
				if (wide) {
					frame.classList.add('wideView');
					wrap.classList.add('wideView');
				}
				wrap.appendChild(frame);
				maintext.appendChild(wrap);
				frame.srcdoc = data;
			})
		} else {
			printLineText('cathtml: ' + path + ': No such file.\n');
		}
	}

    function webrings() {
        printLine("\nThe <a href='https://lainchan.org/%CE%A9/res/73638.html' >Lainchan webring</a>: "+
        "A decentralized <a href='https://indieweb.org/webring' >webring</a> from the Lainchan image board. "+
        "You can read my <a href='https://blogelogeluren.netlify.app/posts/lainring/'>blog post</a> about it.\n\n"+
        "The member list was fetched 2024-02-28 from <a href='https://sizeof.cat/post/lainring/'>sizeof.cat</a>. "+
        "\n\n"+
        "Clearnet sites:\n");
        printLine("<div id='lain-clearnet'>... Loading, please wait ...</div>");
        printLineText("\nOnion sites (accessible via the Tor browser):\n");
        printLine("<div id='lain-tor'>... Loading, please wait ...</div>");
        printLineText("\nI2p sites (accessible over the I2p protocol):\n");
        printLine("<div id='lain-i2p'>... Loading, please wait ...</div>");
        printLineText("\nOffline:\n");
        printLine("<div id='lain-offline'>... Loading, please wait ...</div>");
        loadLainring();
    }

    function loadLainring() {
        'use strict';
        //document.addEventListener("DOMContentLoaded", function(event) {
            /* Try to retrieve the json file */
            fetch('https://turpelurpeluren.online/js/lainring.json').then(res => res.json()).then((data) => {
                let clearnet = '';
                let tor = '';
                let i2p = '';
                let offline = '';
                let w = Math.min(768, document.body.clientWidth);
                let nrbannersperrow = Math.floor(w / 240);
                let margin = (w - nrbannersperrow * 240) / (nrbannersperrow) - 1;

                /* For each element in the JSON, build an anchor-image DOM structure */
                data.items.forEach(element => {
                    /* This string is split in multiple lines for readability */
                    let outstart = '<a title="' + element.title + '" href="';
                    let outend = '"><img style="height:60px; width:240px; margin-right: '+ margin +'px;" src="img/lainring_banners/' +
                        element.img + '" alt="' + element.title + '" /></a>';
                    if (element.offline) {
                        offline += outstart + element.url + outend;
                    } else {
                        if (element.url) clearnet += outstart + element.url + outend;
                        if (element.tor) tor += outstart + element.tor + outend;
                        if (element.i2p) i2p += outstart + element.i2p + outend;
                    }
                    
                });
                /* Inject the DOM structure into the element with the id 'lainring' */
                document.getElementById('lain-clearnet').innerHTML = clearnet;
                document.getElementById('lain-tor').innerHTML = tor;
                document.getElementById('lain-i2p').innerHTML = i2p;
                document.getElementById('lain-offline').innerHTML = offline;
            }).catch(err => {
                /* throw an error */
                throw err
            });
        //});
    };

	function helpListCommands() {
		printLineText('use help [command] to find out more about given command\n\n'+
					'about\t\t\t- about me and the page\n'+
					'cat [file]\t\t- prints contents of a file as text\n'+
					'cathtml [file]\t\t- prints contents of a file as a webpage\n'+
					'clear\t\t\t- clears the screen\n'+
					'goto [subpath]\t\t- follows the URL path (from turpelurpeluren.online/)\n'+
					'help\t\t\t- displays information about builtin commands\n'+
					'history\t\t\t- view command history\n'+
					'index\t\t\t- indexes site pages\n'+
					'links\t\t\t- lists my external links\n'+
					//'ls\t\t\t- lists current directory\n'+
					'message [name] [cont... - sends me a message\n'+
					//'projects\t\t\t- lists my projects\n'+
					'webring\t\t\t- displays all members of the Lainchan webring\n'+
					'welcome\t\t\t- displays the boot message\n'
					);
	}

	function matchCommand(val) {
		val = val.replace(/\s+/g, ' '); //replace extra whitespace with one space
		var args = val.split(' '); //split into args

		history[history.length] = val;

		switch (args[0]) {

			case 'help':
				if (args.length === 1) {
					helpListCommands();
				} else if (args.length === 2) {
					switch (args[1]) {
						case 'about':
							printLineText('Usage: about\n\n   Prints out info about me and the page.\n');
							break;
						case 'cat':
							printLineText('Usage: cat [file]\n\n   Prints contents of a file as text.\n\n   eg: cat projects/related_projects.txt\n');
							break;
						case 'cathtml':
							printLineText('Usage: cathtml [file] [OPTIONS]\n\n   Prints contents of a file as a webpage.\n\n   '+
							'OPTIONS:\t-d\t\tdesktop version (default)\n\t\t-m\t\tmobile version\n\t\t-w\t\tfull page width\n\n   '+
							'eg: cathtml blog_posts/dbild_blogpost.html -m\n');
							break;
						case 'clear':
							printLineText('Usage: clear\n\n   Clears the screen.\n');
							break;
						case 'goto':
							printLineText('Usage: goto [subpath]\n\n   Follows the URL path (from turpelurpeluren.online/).\n\n   '+
							'eg: goto projects/project_table\n');
							break;
						case 'help':
							printLineText('Usage: help\n\n   Displays information about builtin commands.\n\n   '+
							'OPTIONS: [command]\n\n   eg: help help\n');
							break;
						case 'history':
							printLineText('Usage: history\n\n   View command history.\n');
							break;
						case 'index':
							printLineText('Usage: index\n\n   Indexes site pages.\n\n   OPTIONS: -all\n\n   eg: index -all\n');
							break;
						case 'links':
							printLineText('Usage: links\n\n   Lists my external links.\n');
							break;
						case 'message':
							printLineText('Usage: message [name] [contact] [message]\n\n   Sends me a message.\n\n   '+
							'eg: message Steve steve@email.online whatsup B)\n');
							break;
                        case 'webring':
							printLineText('Usage: webring\n\n   Displays members of the Lainchain webring.\n');
							break;
						case 'welcome':
							printLineText('Usage: welcome\n\n   Displays the boot message.\n');
							break;
						case undefined:
						case '':
						case ' ':
							helpListCommands();
							//printLineText('Usage: help\n   OPTIONS: [command]\n   eg: help help\n');
							break;
						default:
							printLineText('help: no command matches: ' + args[1] + '\n');
							break;
					}
				} else {
					printLineText('Usage: help\n   OPTIONS: [command]\n   eg: help help\n')
				}
				break;

			case 'about':
				var portrait = ''+
'                                 ,                                          \n'+
'                        ╓╥▄▄█████████████▄▄,                                \n'+
'                     ╓▒▓█████████████████████▄,,                            \n'+
'                    Æ▓██████████████████████████▄                           \n'+
'                  ,╫█████████████████████████████▓M,                        \n'+
'                  ▓█████████████████▓▓▓▓███████████▒                        \n'+
'                 ╒█████████████████▓▓╣╣╫▓███████████▌                       \n'+
'                 ████████████▀▀▀▓▓▒▒║▒▒▒╢████████████                       \n'+
'                 ███████████████@▒▒▒▒▒███████████████Ç                      \n'+
'                 ██████▓▓▓████▀██▓╣▓███████▓▓████████▌                      \n'+
'                 ██████▓╣╢╢▓▓▓▓▓▓╣▒╫▓▓▓▓▓▓▓▓▓▓███████▌                      \n'+
'                 ]██▓▓█╣╢╢▒╣▒▒╢╫╣╣╣▓▓▓▒╢╣╣╢╢╫▓███████▌                      \n'+
'                  ▓▓▓▓██╣╢▒▒▒▒▒▓▓╣▒╢▓▓▒▒▒▒▒╢▓▓██████▓[                      \n'+
'                   ╙╩▓▓█╣╣╣▒▒▒╢╢▓▒▓▓▓╣╣▒╢╢╢╫▓▓▓█████▓                       \n'+
'                     ╟██╣╢╢╢▒╢╢╢╣▒╢╢╢╢▓▓╣╢╢▓▓█████▓▓                        \n'+
'                      ██╣╣╣╢╫▒▓█▓▓▓▓▓▓▓╣╣╢▓▓▓████▓▓                         \n'+
'                    ,███▓▓╣▓╢╢╢╢╢╫▓╣╢╢╣╫▓▓▓▓█▓███╜                          \n'+
'                     ███▓▓▓▓╣╣╢╢╢╢╢╢╣▓▓▓▓▓▓▓▓╟██▌                           \n'+
'                    ▄██▓ `▓▓╫▓▓▓▓▓▓▓▓▓▓▓▓╢▓▓▒╙███                           \n'+
'                    ██░║▒░▓▓▓▓▓╢╢╢▓╢╢╢▓▓▓▓▓▓▌▓▐██                           \n'+
'                   ██▌░▒▄█▓▓▓▓▓▓▓╣╣▓▓▓▓▓▓▓▓▓M▓▐█▌▒▒                         \n'+
'                ,░░██▒░]░█▓▓▓╢▓▓▓▓▓▓▓▓▓▓▓▓▓╛]▒██▌░░░▒╖                      \n'+
'              ¿░░░░█▌░ `╙,"▓╣╣╣▓▓▓▓▓▓▓▓▓╢▓`░░░▐█▌░░░░░░▒,,                  \n'+
'         ,░░░░░░░░░█░       `▀╣╢▓▓▓▓▓▓╣╢╜   ░,░▐█▒░    ░░░░░¿,              \n'+
'     ,░░░       ╫███  "´ ~=    "▀█████▀`,=´    ²▀██░         ░░░,           \n'+
'  ,░░░░          -"               ,█▌                           ░░▒¿        \n'+
' ░░                                █                               ░░       \n'+
'¡░                                ╘▓                                 ▒      ';
				var textline = document.createElement('p');
				textline.style.fontSize = '16px';
				textline.style.lineHeight = '1.2em';
				//textline.style.lineHeight = '0.8em';
				textline.style.display = 'block';
				/*var smallerportrait = '';
				for (var i = 0; i < portrait.length-1; i+=2) {
					var chars = portrait.substring(i,i+1);
					console.log(chars)
					smallerportrait += portrait.substring(i,i+1);
				}*/
				textline.innerText = portrait + '\n';
				maintext.appendChild(textline);
				printLine(
				'First of all, I am very glad you could make it to my page! My name is turpelurpeluren '+
				'and I am a student of comput(er/ational) science and a hobby artist. I like to work in a variety of different fields '+
				'and disciplines, mostly in the visual realm altough the conceptual entises my brain the most.'+
				"\n\nThe internet has long been my favourite place. It's like swimming in the primordial soup of human thought. "+
				"This website index aims to be my contribution to that soup. Much of the concept I took from "+
				'<a target="_blank" href="https://terminal.satnaing.dev/">Sat Naing</a> who in turn was inspired by '+
				'<a target="_blank" href="https://term.m4tt72.com/">m4tt72</a> and <a target="_blank" href="https://fkcodes.com/">Forrest</a> '+
				"\n\nI run a blog/digital garden which is currently separate from this site and always under construction. It is obviously called "+
                "<a target='_blank' href='https://blogelogeluren.netlify.app'>blogelogeluren</a>. "+
                "If you'd like to check out my other projects, it is one possible entry point, although my projects have a tendency of sprawling all over. "+
				"The 'links' command can also be somewhat useful for investigating me further. "+
                "Feel perfectly free to click around as much as you can!\n");
				break;

			case 'cat':
				switch (args[1]) {
					case undefined:
					case '':
					case ' ':
						printLineText('Usage: cat [file]\n   eg: cat projects/related_projects.txt\n');
						break;

					default:
						if (isPath(args[1], siteIndex.pages, true)) {
							fetch('https://turpelurpeluren.online/' + args[1]) //fetch resource
							.then(data => {
								return data.text() //get data
							})
							.then(data => {
								printLineText(data); //paste in element
							})
						} else {
							printLineText('cat: ' + args[1] + ': No such file.\n');
						}
				}
				break;
			
			case 'cathtml':
				switch (args[1]) {
					case undefined:
					case '':
					case ' ':
						printLineText('Usage: cathtml [file] [OPTIONS]\n   '+
						'eg: cathtml blog_posts/dbild_blogpost.html -m\n');
						break;

					default:
						switch (args[2]) {
							case '-m':
								printWeb(args[1], true); //print mobile version
								break;

							case '-w':
								printWeb(args[1], false, true); //print wide version
								break;

							case undefined:
							case ' ':
							case '':
							case '-d':
								printWeb(args[1]); //print desktop version
								break;

							default:
								printLineText('Unknown flag: ' + args[2] + '\nUsage: cathtml [file] [OPTIONS]\n   '+
								'eg: cathtml blog_posts/dbild_blogpost.html -m\n');
						}
				}
				break;
			
			case 'clear':
				maintext.innerHTML = "";
				printLineText('');
				break;

			case 'history':
				for (var i = 0; i < history.length; i++) {
					printLineText(history[i]);
				}
				printLineText('');
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
					printLineText('Usage: message [name] [contact] [message]\n   eg: message Steve steve@email.online whatsup B)\n');
				}
				break;

			case 'goto':
				switch (args[1]) {
					case undefined:
					case '':
					case ' ':
						printLineText('Usage: goto [subpath]\n   eg: goto projects/project_table\n');
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
						printLineText('Index of turpelurpeluren.online:\n\n/');
						printIndex(0, siteIndex.pages);
						break;

					case undefined:
					case '':
					case ' ':
						printLine('Index of turpelurpeluren.online:\n\n'+
								'* <a href="about">about</a>\n'+
								'* <a href="https://blog.turpelurpeluren.online">blog</a> '+
                                '& <a href="blog">(old blog)</a>\n'+
								'* <a href="home">home</a>\n'+
								'* <a href="works">works</a>\n');
						break;

					default:
						printLineText('Usage: index\n   OPTIONS: -all\n   eg: index -all\n');
				}
				break;

			case 'links':
				printLine("Turpelurpeluren's links:\n\n"+
						'* <a target="_blank" href="https://blog.turpelurpeluren.online">blogelogeluren</a>\n'+
						'* <a target="_blank" href="https://www.instagram.com/turpelurpeluren/">instagram</a>\n'+
						'* <a target="_blank" href="https://ko-fi.com/turpelurpeluren">ko-fi</a>\n'+
						'* <a target="_blank" href="https://mas.to/@turpelurpeluren">mastodon</a>\n'+
						/*'* <a target="_blank" href="https://gamejolt.com/@turpeluren/games">gamejolt</a>\n'+*/
						'* <a target="_blank" href="https://feraldreamssanctuary.bigcartel.com/">shop</a>\n'+
						'* <a target="_blank" href="https://randomantagning.se/">randomantagning.se</a>\n'+
						'* <a target="_blank" href="https://twitter.com/turpeluren">twitter</a>\n'+
						'* <a target="_blank" href="https://www.youtube.com/channel/UCp84o6z4oaivyHp9REwZT6g">youtube</a>\n');
						/* redbubble / teepublic? */
				break;

            case 'webring':
                webrings();
                break;

            case 'boot':
			case 'welcome':
				boot();
				break;

			default:
				printLineText('command not found: ' + val + '\n');
		}
	}

	function boot() {
		printLineText('\nRunning turpelurpeluren.terminal [Version '+version+']');
        printLine('<a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1">CC0 1.0</a> turpelurpeluren.online 2024');
        const header = 
		' _                   _                 _                           _ _         \n'+
		'| |_ _ _ ___ ___ ___| |_ _ ___ ___ ___| |_ _ ___ ___ ___   ___ ___| |_|___ ___ \n'+
		'|  _| | |  _| . | -_| | | |  _| . | -_| | | |  _| -_|   |_| . |   | | |   | -_|\n'+
		'|_| |___|_| |  _|___|_|___|_| |  _|___|_|___|_| |___|_|_|_|___|_|_|_|_|_|_|___|\n'+
		'            |_|               |_|                                              \n\n';
		var textline = document.createElement('p');
		textline.style.fontSize = '16px';
		textline.style.display = 'block';
		textline.innerText = header;
		maintext.appendChild(textline);
		printLine('Glad you could make it to my domain on the internet!\n\n'+
		'If you find the terminal interface overwhelming I advise you to go '+
		'<a href="https://turpelurpeluren.online/home">home</a> or to the '+
        '<a href="https://blog.turpelurpeluren.online">blog</a>. '+
		'Otherwise, type help for a list of commands.\n');
	}
	boot();

})();