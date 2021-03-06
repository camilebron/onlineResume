var bio = {
    "name": "Camille Lebrón Brayfield",
    "role": "Front-End-Developer",
    "contacts": {
        "mobile": "787-464-4142",
        "email": "camilebron@gmail.com",
        "github": "camilebron",
        "twitter": "camileb28",
        "location": "Puerto Rico"
    },
    "welcomeMessage": "Welcome to my resume! Let's create great things together...",
    "skills": ["HTML5", "CSS", "JS"],
    "biopic": "images/bioPic.jpg"
};


var work = {
    "jobs": [{
        "employer": "Paralle 18",
        "title": "Fellow",
        "location": "San Juan, PR",
        "dates": "April 2016 - Current",
        "description": "Support the Parallel18 startups in short-term projects. Provide assistance to the Parallel18 team, including receiving guests who visit the coworking space, helping set up for events and speakers, and miscellaneous tasks."
    }, {
        "employer": "Tu Islita PR",
        "title": "Founder",
        "location": "Puerto Rico",
        "dates": "Feb 2016 - Current",
        "description": " Launched the only small online store that ships frozen 'antojitos' from the Puerto Rican cuisine to the United States and Puerto Rico"
    }]
};

var education = {
    "schools": [{
        "name": "Palo Alto University",
        "url": "http://www.paloaltou.edu",
        "location": "Palo Alto, CA",
        "degree": "Masters",
        "majors": ["Psychology"],
        "dates": "2012 - 2014"
    }, {
        "name": "University of Puerto Rico, Mayaguez Campus",
        "url": "http://www.uprm.edu",
        "location": "Puerto Rico",
        "degree": "BA",
        "majors": ["Psychology"],
        "dates": "2008 - 2012"
    }],
    "onlineCourses": [{
        "title": "Front-End-Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};
var projects = {
    "projects": [{
        "title": "Resume-Website",
        "dates": "2016",
        "description": "This is my resume website which has all my information and shows my dev skills!",
        "images": ["http://lorempixel.com/400/200/"]
    }, {
        "title": "Another Cool Project",
        "dates": "2016",
        "description": "This is a really cool project that shows all of my super awesome skills!!",
        "images": ["http://lorempixel.com/400/200/"]
    }]
};
var data = "%data%";

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $('#topContacts').append(formattedMobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $('#topContacts').append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $('#topContacts').append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $('#topContacts').append(formattedGithub);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $('#topContacts').append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    $('#header').append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $('#header').append(formattedWelcomeMsg);
    $('#footerContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

};

bio.display();

work.display = function() {

    work.jobs.forEach(function(jobs) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", jobs.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", jobs.location);
        $(".work-entry:last").append(formattedLocation);


    });
};
work.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


function inName(name) {
    var finalName = name.split(" ");
    var firstName = name.slice(0, name.indexOf(" "));
    var firstLetter = firstName.substring(0, 1).toUpperCase();
    var lastName = name.slice(name.indexOf(" ") + 1);
    var space = (" ");

    var finalIntName = firstLetter + firstName.slice(1).toLowerCase() + space + lastName.toUpperCase();

    return finalIntName;

}
$("#main").append(internationalizeButton);

projects.display = function() {

    projects.projects.forEach(function(projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.description);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);

        for (var i = 0; i < projects.images.length; i++) {
            var formattedProjectImage = HTMLprojectImage.replace(data, projects.images[i]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    });
};

projects.display();

education.display = function() {
    education.schools.forEach(function(schools) {

        $('#education').append(HTMLschoolStart);

        var formattedEduNameDegree = HTMLschoolName.replace("#", schools.url).replace("%data%", schools.name) + HTMLschoolDegree.replace("%data%", schools.degree);

        $(".education-entry:last").append(formattedEduNameDegree);

        var formattedEduDates = HTMLschoolDates.replace('%data%', schools.dates);
        $(".education-entry:last").append(formattedEduDates);

        var formattedEduLocation = HTMLschoolLocation.replace('%data%', schools.location);
        $(".education-entry:last").append(formattedEduLocation);


        for (var i = 0; i < schools.majors.length; i++) {
            var formattedEduMajor = HTMLschoolMajor.replace('%data%', schools.majors[i]);
            $(".education-entry:last").append(formattedEduMajor);
        }

    });

    $('#education').append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        $('#education').append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].url);

        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates;
        $('.education-entry:last').append(formattedOnlineTitleSchool);
        $('.education-entry:last').append(formattedOnlineURL);

    }
};
education.display();

$('#mapDiv').append(googleMap);
