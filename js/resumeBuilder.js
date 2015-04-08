
var formattedName = HTMLheaderName.replace("%data%", "Aime Blaise");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");


$("#header").append(formattedName);
$("#header").append(formattedRole);


// Needed objects.
var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese..."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "",
			"dates": "1998 - December 31, 1999",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese..."
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese...",
			"images": [
				"url",
				"url"
			]
		}
	]
};
var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "john@example.com",
		"github": "jonhdoe",
		"twitter": "@jonhdoe",
		"location": "San Francisco"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep",
		"saving the universe"
	],
	"bioPic": "images/fry.jpg"
};
var education = {
	"schools": [
		{
			"name": "Nova Southeastern University",
			"city": "Fort Lauderdale, Fl",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://example.com"
		},
		{
			"name": "Eckerd College",
			"city": "Saint Petersburg, Fl",
			"degree": "BA",
			"majors": ["CS"],
			"dates": 2003,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Crash Course",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

if(bio.skills.length != 0) {
	$("#header").append(HTMLskillsStart);
	for(var i=0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	};
}

projects.display();

$("#mapDiv").append(googleMap);


