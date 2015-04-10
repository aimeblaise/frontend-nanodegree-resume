
// Needed objects.
var work = {
  "jobs": [{
    "employer": "Planet Express",
    "title": "Delivery Boy",
    "location": "1525 Market Street, San Francisco, CA 94103, United States",
    "dates": "January 3000 - Future",
    "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese..."
  }, {
    "employer": "Panucci's Pizza",
    "title": "Delivery Boy",
    "location": "1525 Market Street, San Francisco, CA 94103, United States",
    "dates": "1998 - December 31, 1999",
    "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese..."
  }],
  "display": function() {
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
};

var projects = {
	"projects": [{
		"title": "Burundi Safaris & Souvenirs",
		"dates": "2011",
		"description": "BurundiSafari.com brings you an Online Hotels, Restaurants, and Vacation Rentals booking, ratings, recommendations and reviews with a Unique Souvenir Shop.",
		"images": [
			"https://img.agoda.net/images/MVC/default/logo-agoda-mobile.png",
			"https://img.agoda.net/images/MVC/default/logo-agoda-mobile.png"
		]
	}],
	"display": function() {
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
		}
	}
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
	"bioPic": "images/fry.jpg",
	"display": function() {
		// Top header.
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		// Personal contact.
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['mobile']);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts['email']);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts['github']);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts['twitter']);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts['location']);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);

		// Profile image.
		if(bio.bioPic) {
			var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
			$("#header").append(formattedImage);
		}

		// Short profile description.
		var formattedDescription = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedDescription);

		if(bio.skills.length != 0) {
			$("#header").append(HTMLskillsStart);
			for(var i=0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			};
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
	}
};

var education = {
	"schools": [{
		"name": "Nova Southeastern University",
		"city": "Fort Lauderdale, Fl",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": 2013,
		"url": "http://example.com"
	}, {
		"name": "Eckerd College",
		"city": "Saint Petersburg, Fl",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2003,
		"url": "http://example.com"
	}],
	"onlineCourses": [{
		"title": "Javascript Crash Course",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com/course/ud804"
	}],
	"display": function() {
		$("#education").append(HTMLschoolStart);

		for(school in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolMajors);
		}

		for(onlineCourse in education.onlineCourses) {
			$(".education-entry:last").append(HTMLonlineClasses);

			var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedOnlineName + formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};


bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);

