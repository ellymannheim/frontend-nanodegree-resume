/*
 This is empty on purpose! Your code to build the resume will go here.
 */
/*
 $("#main").append("Elly Mannheim");
 var awesomeThoughts;
 awesomeThoughts="I am Elly and I am awesome!";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("awesome","fun");
 $("#main").append(funThoughts);*/
var bio = {
    "name": "Elly Mannheim",
    "role": "artist",
    "contacts": {
        "email": "ellymannheim@web.de",
        "github": "@ellymannheim",
        "homepage": "www.ellymannheim.de"
    },
    "WelcomeMsg": "Hi there, hope you're having a good time!",
    "biopic": "images/Elly.jpg",
    "skills": ["painting", "2D and 3D computergraphics"]
};
var projects = {
    "projects": [
        {
            "title": "painting",
            "dates": "since 1989",
            "description": "Ölmalerei (Fotokopie), Acryl (frei/figürlich)",
            "images": ["images/Elly.jpg", "images/fry.jpg"]
        }, {
            "title": "2D Computer Graphics",
            "dates": "since 2000",
            "description": "Bildchen allerart für web und print",
            "images": ["images/Elly.jpg", "images/fry.jpg"]
        },
        {
            "title": "3D Computer Graphics",
            "dates": "since 2013",
            "description": "Filmchen mit Blender",
            "images": ["images/Elly.jpg", "images/fry.jpg"]
        }
    ]
};
//employer, title, location, dates worked and description strings.
var work = {
    "jobs": [{
        "employer": "Life",
        "title": "looser",
        "location": "Frankfurt am Main",
        "dates worked": "2007 to 2010",
        "description": "sleep, eat junkfood, hang out in pubs"
    }, {
        "employer": "I",
        "title": "artist",
        "location": "Berlin",
        "dates worked": "2010 till now",
        "description": "trying to sell all that paintings, 2D and 3D stuff, not winning any competitive"
    }]
};


var uni = {};
uni["name"] = "J.-W.-Goethe-Universität";
uni["years"] = 11;
uni["city"] = "Frankfurt am Main";

var education = {
    "schools": [{
        "name": "J.-W.-Goethe Universität",
        "years": 11,
        "degree": "Master of arts"
    }, {
        "name": "CDI",
        "years": 1.5,
        "degree": "software dveloper .net"
    }]

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedEMail = HTMLemail.replace("%data%", bio.email);
var formattedWelcomemessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMsg);
var formattedPic = HTMLbioPic.replace("%data%", bio.imageURL);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var skills = HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
$("#lets-connect").append(formattedEMail);
$("#header").append(formattedWelcomemessage);
$("#education").prepend(skills);
$("#main").append(education["name"]);
$("#main").append(work.position);
