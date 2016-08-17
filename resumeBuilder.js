
var name = "Camille Lebrón Brayfield";
var role = "Front-End-Developer";
var skills = ["HTML5", "CSS", "JS"];


var bio = {};
bio.name = name;
bio.role = role;
bio.skills = skills;
bio.mobile = "787-464-4142";
bio.email= "camilebron@gmail.com";
bio.github = "camilebron";
bio.currentLocation = "Puerto Rico";
bio.welcomeMessage = "Welcome to my resume! Let's create great things together...";
bio.img = "images/bioPic.jpg";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
  "job": [
    {
      "employer": "Paralle 18",
      "title": "Fellow",
      "location": "San Juan, PR",
      "dates": "April 2016 - Current",
      "description":"Support the Parallel18 startups in short-term projects. Provide assistance to the Parallel18 team, including receiving guests who visit the coworking space, helping set up for events and speakers, and miscellaneous tasks."
    },
    {
      "employer": "Tu Islita PR",
      "title": "Founder",
      "location": "Puerto Rico",
      "dates": "Feb 2016 - Current",
      "description":" Launched the only small online store that ships frozen 'antojitos' from the Puerto Rican cuisine to the United States and Puerto Rico"
    }
  ]
};

var education = {
	"schools": [{
		"name": "Palo Alto University",
		"location": "Palo Alto, CA",
		"degree": "Masters",
		"major": "Psychology",
		"dates": "2012-2014"
	}, {
		"name": "University of Puerto Rico, Mayaguez Campus",
		"location": "Puerto Rico",
		"degree": "BA",
		"major": "Psychology",
		"dates": "2008-2012"
	}],
		"onlineCourses": [{
			"title": "Front-End-Developer Nanodegree",
			"school": "Udacity",
			"dates": "2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}]
	};
var projects = {
  "project":[{
    "title": "Resume-Website",
    "dates": "2016",
    "description": "This is my resume wedsite which has all my information and shows my dev skills!"
  }, {
    "title": "Another Cool Project",
    "dates": "2016",
    "description": "This is a really cool project that shows all of my super awesome skills!!"
  }]
}


var formattedEmail = HTMLemail.replace("%data%", bio.email);
    $("#topContacts").append(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
    $("#topContacts").append(formattedMobile);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
    $("#topContacts").append(formattedGithub);
var formattedCurrentLocation = HTMLlocation.replace("%data%", bio.currentLocation);
    $("#topContacts").append(formattedCurrentLocation);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.img);
    $("#header").append(formattedBioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);


if(bio.skills.length>0){
      $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills [0]);
      $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills [1]);
      $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills [2]);
      $("#skills").append(formattedSkills);
}
function displayWork() {
  for (job in work.job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.job[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.job[job].title );
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.job[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%",work.job[job].description);
      $(".work-entry:last").append(formattedDescription);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.job[job].location);
      $(".work-entry:last").append(formattedLocation);

}
};
displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


function inName(name){
    var finalName = name.split(" ");
    var firstName = name.slice(0,name.indexOf(" "));
    var firstLetter = firstName.substring(0, 1).toUpperCase();
    var lastName = name.slice(name.indexOf(" ") +1);
    var space = (" ");

    var finalName = firstLetter + firstName.slice(1).toLowerCase() + space + lastName.toUpperCase();

    return finalName;

}
$("#main").append(internationalizeButton);

projects.display = function() {

    projects.project.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);


    });
};

projects.display();

education.display = function() {
  education.schools.forEach(function(schools) {

      $('#education').append(HTMLschoolStart);

      var formattedEduName = HTMLschoolName.replace('%data%', schools.name);
      var formattedEduDegree = HTMLschoolDegree.replace('%data%', schools.degree);
      var formattedEduNameDegree = formattedEduName + formattedEduDegree;
      $(".education-entry:last").append(formattedEduNameDegree);

      var formattedEduDates = HTMLschoolDates.replace('%data%',schools.dates);
      $(".education-entry:last").append(formattedEduDates);

      var formattedEduLocation = HTMLschoolLocation.replace('%data%', schools.location);
      $(".education-entry:last").append(formattedEduLocation);

      var formattedEduMajor = HTMLschoolMajor.replace('%data%', schools.major);
      $(".education-entry:last").append(formattedEduMajor);

    })
      $('#education').append(HTMLonlineClasses);
      for (var i = 0; i < education.onlineCourses.length; i++) {
        $('#education').append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

      var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates;
      $('.education-entry:last').append(formattedOnlineTitleSchool);
      $('.education-entry:last').append(formattedOnlineURL);

    }
  };
education.display();

  $('#mapDiv').append(googleMap);
