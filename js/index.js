(function () {
    'use strict';

	const input = document.getElementById('cmd');
	const maintext = document.getElementById('maintext');
	const userline = document.getElementById('user');
	const user = 'user'+ String(Date.now()) + '@turpelurpeluren.online:~$ ';
	userline.innerText = user;
	userline.appendChild(input);

	console.log(Date.now())

	input.select();

	document.addEventListener('click', function(){
		input.select();
	});

	document.addEventListener('keydown', function(event) {
        //enter
        if(event.key == "Enter") {
			
			printCommand(input.value);

			matchCommand(input.value);
			
			input.value = "";
			window.scrollTo(0, document.body.scrollHeight);
        }
    });

	function printCommand(line) {
		var cmdline = document.createElement('p');
		var textline = document.createElement('pre');
		cmdline.innerHTML = user;
		textline.innerText = line + '\n';
		cmdline.appendChild(textline);
		maintext.appendChild(cmdline);
	}

	function printLineText(line) {
		var textline = document.createElement('pre');
		textline.innerText = line + '\n';
		maintext.appendChild(textline);
	}

	function printLine(line) {
		var textline = document.createElement('pre');
		textline.innerHTML = line + '\n';
		maintext.appendChild(textline);
	}

	function matchCommand(val) {
		val = val.replace(/\s+/g, ' ');
		console.log(val)
		var args = val.split(' ');
		console.log(args);
		switch (args[0]) {

		case 'goto':
			switch (args[1]) {
				case undefined:
				case '':
				case ' ':
					printLineText('Usage: goto [subpath]\n');
					break;
				default:	
					var tryPath = 'https://turpelurpeluren.online/' + args[1];
					printLineText('trying to access: turpelurpeluren.online/' + args[1] + ' ...\n');
					window.location = tryPath;
			}
			break;

		case 'help':
			printLineText('goto [subpath]\t\t- follows the URL path (from turpelurpeluren.online/)\n'+
					  'help\t\t\t- displays a list of commands\n'+
					  'index [-all]\t\t- indexes site pages\n'
					  ); /* ändra username?*/
			break;

		case 'index':
			switch (args[1]) {
				case '-all':
					printLine('Index of turpelurpeluren.online:\n\n'+
							'* <a href="404.html">404.html</a>\n'+
							'* <a href="about.html">about.html</a>\n'+
							'* <a href="ads.txt">ads.txt</a>\n'+
							'* <a href="blog.html">blog.html</a>\n'+
							'* <a href="dbild.html">dbild.html</a>\n'+
							'* <a href="digital.html">digital.html</a>\n'+
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
							'\n\tblog_posts/\n'+
							'\t* <a href="blog_posts/dbild_blogpost.html">dbild_blogpost.html</a>\n'+
							'\t* <a href="blog_posts/example_post.html">example_post.html</a>\n'+
							'\t* <a href="blog_posts/microdosing.html">microdosing.html</a>\n'+
							'\n\tprojects/\n'+
							'\t* <a href="projects/project_boundless.html">project_boundless.html</a>\n'+
							'\t* <a href="projects/project_eirik.html">project_eirik.html</a>\n'+
							'\t* <a href="projects/project_pheasant.html">project_pheasant.html</a>\n'+
							'\t* <a href="projects/project_rightfully.html">project_rightfully.html</a>\n'+
							'\t* <a href="projects/project_soapholder.html">project_soapholder.html</a>\n'+
							'\t* <a href="projects/project_table.html">project_table.html</a>\n'+
							'\t* <a href="projects/project_vessel.html">project_vessel.html</a>\n'+
							'\t* <a href="projects/related_projects.txt">related_projects.txt</a>\n'+
							'\n\tresources/\n'+
							'\t* <a href="resources/footer.html">footer.html</a>\n'+
							'\t* <a href="resources/footer.html">header.html</a>\n'+
							'\t* <a href="resources/related_articles.html">related_articles.html</a>\n'+
							'\t* <a href="resources/related_projects.html">related_projects.html</a>\n'+
							'\t* <a href="resources/sidepatterns.html">sidepatterns.html</a>\n'+
							'\n\t\trelated/\n'+
							'\t\t* <a href="resources/related/related_boundless.html">related_boundless.html</a>\n'+
							'\t\t* <a href="resources/related/related_dbild.html">related_dbild.html</a>\n'+
							'\t\t* <a href="resources/related/related_pheasant.html">related_pheasant.html</a>\n'+
							'\t\t* <a href="resources/related/related_rightfully.html">related_rightfully.html</a>\n'+
							'\t\t* <a href="resources/related/related_soapholder.html">related_soapholder.html</a>\n'+
							'\t\t* <a href="resources/related/related_table.html">related_table.html</a>\n'+
							'\t\t* <a href="resources/related/related_vessel.html">related_vessel.html</a>\n'+
							'');
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

		default:
			printLineText('command not found: ' + val + '\n');
		}
	}


})();