(function() {
	var bio = {
		name: "marioNuevo",
		role: ".frontEndWebDeveloper",
		welcomeMessage: "Welcome to my resume page",
		contacts: {
				github: ["marionuevo", "https://github.com/marionuevo"],
				twitter: ["@marionuevo","https://twitter.com/marionuevo"],
				linkedin: ["marionuevo","http://www.linkedin.com/in/marionuevo"],
				location: ["Canary Islands | Spain","https://www.google.es/maps/place/Adeje,+Santa+Cruz+de+Tenerife/@28.1217968,-16.7339215,15z/data=!3m1!4b1!4m2!3m1!1s0xc6a909bd5432ced:0x2abb5d93f23f4103?hl=en"]
		},
		skills: ["Front-end Development", "JavaScript", "jQuery", "MVC architecture", "KnockoutJS", "AngularJS", "Bootstrap", "HTML5",
		"CSS", "Aeronautics", "Radar", "Radio Communications", "Network Engineering", "Telecom Network Design", "Wireless Engineering"],

		biopic: "images/selfie-wide.jpg"
	};

	var works = [
		{
			employer: "AENA",
			title: "Aerial Navigation Systems (CNS) Tower Manager",
			location: "Tenerife Sur Airport, Canary Islands",
			dates: "2013-today",
			description: "Manage Navigation Systems Operation & Maintenance"
		},
		{
			employer: "AENA",
			title: "Radio Communications Area Manager. Western Sector",
			location: "Tenerife Norte Airport, Canary Islands",
			dates: "2009-2013",
			description: "Manage Radio Comm. Systems Operation & Maintenance"
		},
		{
			employer: "AENA",
			title: "Aerial Navigation Technician. Radar surveillance",
			location: "Tenerife Norte Airport, Canary Islands",
			dates: "2007-2009",
			description: "MSSR, PSR, SMR and MLAT Technical operation"
		},
		{
			employer: "Freelance",
			title: "Programmer - Graphic Designer",
			location: "Santa Cruz, Canary Islands",
			dates: "2003-2007",
			description: "WWW design and development. HTML, PHP, MySQL, ActionScript"
		},
		{
			employer: "Tacto Comunicacion & RR.PP.",
			title: "Graphic & CGI Designer",
			location: "Santa Cruz, Canary Islands",
			dates: "1997-2002",
			description: "Graphics, CGI animation and postproduction."
		}];

	var projects = [
		{
			title: ".arcadeGame",
			dates: "2014",
			description: "A first simple Arcade Game running HTML5 canvas and JS",
			image: "images/arcadegame.png",
			url: "http://www.marionuevo.com/frontend-nanodegree-arcade-game/"
		},
		{
			title: ".feedreaderJasmineTestSuite",
			dates: "2015",
			description: "A feedreader app under Jasmine test environement",
			image: "images/feedreader.png",
			url: "http://www.marionuevo.com/frontend-nanodegree-feedreader/"
		},
		{
			title: ".neighborhoodMap",
			dates: "2015",
			description: "Frontend nanodegree Neighborhood Map Single Page Application. Using Knockout, Bootstrap, jQuery, Google Maps API and Google StreetView API.",
			image: "images/neighborhoodmap.png",
			url: "http://www.marionuevo.com/neighborhood-map/"
		},
		{
			title: ".self",
			dates: "2015",
			description: "My Own Portfilio / Resume. Using AngularJS, Bootstrap and jQuery.",
			image: "images/portfolio.png",
			url: "http://www.marionuevo.com/"
		}];

	var education = {
		schools:[
			{
				name: "UOC",
				location: "Barcelona",
				degree: "Telecommunications Engineering - Short Cycle Degree",
				majors: ["Fund. on computers and programming", "Electronic digital systems", "Protocol engineering",
				"Telematics systems", "Telematic instrumentation", "Data transmission", "Nodes architecture", 
				"Systems and services", "Projects"],
				dates: "2014",
				url: "images/edu.jpg"
			}],
		onlineCourses: [
			{
				title: "Front-End Web Developer Nanodegree",
				school: "Udacity",
				dates: "2015",
				url: "http://www.udacity.com/course/nd001"
			},
			{
				title: "Object-Oriented JavaScript",
				school: "Udacity",
				dates: "2015",
				url: "http://www.udacity.com/course/ud015"
			},
			{
				title: "JavaScript Design Patterns",
				school: "Udacity",
				dates: "2015",
				url: "http://www.udacity.com/course/ud989"
			},
			{
				title: "Website Performance Optimization",
				school: "Udacity",
				dates: "2015",
				url: "http://www.udacity.com/course/ud884"
			},
			{
				title: "Intro to HTML and CSS",
				school: "Udacity",
				dates: "2014",
				url: "http://www.udacity.com/course/ud304"
			},
			{
				title: "JavaScript Basics",
				school: "Udacity",
				dates: "2014",
				url: "http://www.udacity.com/course/ud804"
			},
			{
				title: "Intro to Computer Science",
				school: "Udacity",
				dates: "2013",
				url: "http://www.udacity.com/course/cs101"
			},
			{
				title: "Introduction to Digital Sound Design",
				school: "Coursera",
				dates: "2013",
				url: "http://www.coursera.org/course/digitalsounddesign"
			},
			{
				title: "Introduction to Artificial Intelligence",
				school: "Udacity (ai-class)",
				dates: "2011",
				url: "http://www.udacity.com/course/cs271"
			}]
	};

	var app = angular.module('resumeWebPage', []);
	app.controller ('resumeController', function(){
		this.bio = bio;
		this.works = works;
		this.projects = projects;
		this.education = education;
	});
	app.controller ('carouselController', function(){

	});
	var map;

	/*
	Start here! initializeMap() is called when page is loaded.
	*/
	function initializeMap() {

		var locations;
		var mapOptions = {
			disableDefaultUI: true
		};

		var styles = [{
			"stylers": [
				{ "visibility": "simplified" },
				{ "saturation": -60 },
				{ "gamma": 1.26 }
				]
			}];

		// This next line makes `map` a new Google Map JavaScript Object and attaches it to
		// <div id="map">, which is appended as part of an exercise late in the course.
		map = new google.maps.Map(document.querySelector('#map'), mapOptions);
		map.setOptions({styles: styles});

		/*
		locationFinder() returns an array of every location string from the JSONs
		written for bio, education, and work.
		*/
		function locationFinder() {

			// initializes an empty array
			var locations = [];

			// adds the single location property from bio to the locations array
			locations.push(bio.contacts.location);

			// iterates through school locations and appends each location to
			// the locations array
			for (var school in education.schools) {
				locations.push(education.schools[school].location);
			}

			// iterates through work locations and appends each location to
			// the locations array
			for (var job in works) {
				locations.push(works[job].location);
			}

			return locations;
		}

		/*
		createMapMarker(placeData) reads Google Places search results to create map pins.
		placeData is the object returned from search results containing information
		about a single location.
		*/
		function createMapMarker(placeData) {

			// The next lines save location data from the search result object to local variables
			var lat = placeData.geometry.location.lat();  // latitude from the place service
			var lon = placeData.geometry.location.lng();  // longitude from the place service
			var name = placeData.formatted_address;   // name of the place from the place service
			var bounds = window.mapBounds;            // current boundaries of the map window

			// marker is an object with additional data about the pin for a single location
			var marker = new google.maps.Marker({
				map: map,
				position: placeData.geometry.location,
				title: name
			});

			// infoWindows are the little helper windows that open when you click
			// or hover over a pin on a map. They usually contain more information
			// about a location.
			var infoWindow = new google.maps.InfoWindow({
				content: name
			});

			// hmmmm, I wonder what this is about...
			google.maps.event.addListener(marker, 'click', function() {
				map.setZoom(8);
      			map.setCenter(marker.getPosition());
			});

			// this is where the pin actually gets added to the map.
			// bounds.extend() takes in a map location object
			bounds.extend(new google.maps.LatLng(lat, lon));
			// fit the map to the new marker
			map.fitBounds(bounds);
			// center the map
			map.setCenter(bounds.getCenter());
		}

		/*
		callback(results, status) makes sure the search returned results for a location.
		If so, it creates a new map marker for that location.
		*/
		function callback(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				createMapMarker(results[0]);
			}
		}

		/*
		pinPoster(locations) takes in the array of locations created by locationFinder()
		and fires off Google place searches for each location
		*/
		function pinPoster(locations) {

			// creates a Google place search service object. PlacesService does the work of
			// actually searching for location data.
			var service = new google.maps.places.PlacesService(map);

			// Iterates through the array of locations, creates a search object for each location
			for (var place in locations) {

				// the search request object
				var request = {
					query: locations[place]
				};

				// Actually searches the Google Maps API for location data and runs the callback
				// function with the search results after each search.
				service.textSearch(request, callback);
			}
		}

		// Sets the boundaries of the map based on pin locations
		window.mapBounds = new google.maps.LatLngBounds();

		// locations is an array of location strings returned from locationFinder()
		locations = locationFinder();

		// pinPoster(locations) creates pins on the map for each location in
		// the locations array
		pinPoster(locations);
	}

	$(initializeMap);

	$(window).resize(function() {
		map.fitBounds(mapBounds);
	});

})();





