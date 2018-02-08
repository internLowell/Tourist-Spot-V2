$(document).ready(function() {

	try 
	{

		window.setTimeout(function(){
			$('#wrapper')
				.load("content/components/info.php",
				function(responseTxt, statusTxt, xhr){
			        if(statusTxt == "success")
			        	console.log('infoDialog :: success -> Loaded')
			        if(statusTxt == "error")
			            console.log("infoDialog :: Error -> " + xhr.status + ": " + xhr.statusText);
			    });
		}, 3000);
	} catch( err ){
		console.log(err);
	}
});
$("#accountDialog .charm-closer").click(function accountSetClose() {
	$("#accountDialog .content .input-control input").val("");
	if ($("#accountDialog .content").css("display")=='block') {$("#accountDialog .heading").click();}
});
$("#configCharm .charm-closer").click(function accountSetClose() {
	$("#configCharm .input-control input, #configCharm .input-control textarea").val("");
});
$("#accountDialog .heading").click(function(){
	$("#accWindow").toggleClass("atTop");
});

function initMap() {
  var taguig = {lat: 14.4908689, lng: 121.0551628};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    mapTypeControl: false,
    center: taguig
  });

  // // Add a style-selector control to the map.
  //  var styleControl = document.getElementById('style-selector-control');
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

  // // Set the map's style to the initial value of the selector.
  // var styleSelector = document.getElementById('style-selector');
  // map.setOptions({styles: styles[styleSelector.value]});

  // // Apply new JSON when the user selects a different style.
  // styleSelector.addEventListener('change', function() {
  //   map.setOptions({styles: styles[styleSelector.value]});
  // });

  var infoWindow = new google.maps.InfoWindow;

      // // Change this depending on the name of your PHP or XML file
      // downloadUrl('http://touristspot.x10host.com/db_load.php', function(data) {
      //   var xml = data.responseXML;
      //   var markers = xml.documentElement.getElementsByTagName('marker');
      //   Array.prototype.forEach.call(markers, function(markerElem) {
      //     var id = markerElem.getAttribute('id');
      //     var name = markerElem.getAttribute('name');
      //     var content = markerElem.getAttribute('content');
      //     var point = new google.maps.LatLng(
      //         parseFloat(markerElem.getAttribute('lat')),
      //         parseFloat(markerElem.getAttribute('lng')));

      //     var infowincontent = document.createElement('div');
      //     var strong = document.createElement('strong');
      //     strong.textContent = name
      //     infowincontent.appendChild(strong);
      //     infowincontent.appendChild(document.createElement('br'));

      //     var text = document.createElement('text');
      //     text.textContent = content
      //     infowincontent.appendChild(text);
         
      //     var marker = new google.maps.Marker({
      //       map: map,
      //       position: point,
      //       icon: 'images/icons/star.png'
      //     });
      //     marker.addListener('click', function() {
      //       infoWindow.setContent(infowincontent);
      //       infoWindow.open(map, marker);
      //     });
      //   });
      // });
    
  try{  


     var infowindowx = new google.maps.InfoWindow({
      content: '<h3> Hello there! </h3><br><h4>Find out why It\'s more fun in the <strong>Philippines</strong> and explore great tourist spots near you</h4><br><small><p>This is your current location <code>'+ position.coords.latitude +',' + position.coords.longitude +'</code><h6>if you we locate you wrong try to refresh the page or just click <a href="index.php">refresh</a> and also check your internet connection. </h6> </p></small>'
    });

    if (navigator.geolocation) {

     var infowindowx = new google.maps.InfoWindow({
      content: '<h3> Hello there! </h3><br><h4>Find out why It\'s more fun in the <strong>Philippines</strong> and explore great tourist spots near you</h4><br><small><p>This is your current location <code>'+ position.coords.latitude +',' + position.coords.longitude +'</code><h6>if you we locate you wrong try to refresh the page or just click <a href="index.php">refresh</a> and also check your internet connection. </h6> </p></small>'
    });

        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          var markerx = new google.maps.Marker({
            position: pos,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'images/icons/position.png'
          });

          markerx.addListener('click', function() {
            infowindowx.open(map, markerx);
          });
          
          map.setCenter(pos);
          infowindowx.open(map, markerx);
        }, function() {
          handleLocationError(true, infoWindowx, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation

         var infowindox = new google.maps.InfoWindow();

        handleLocationError(false, infoWindox, map.getCenter());
      }
    

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }
  }
  catch(err){
    mod();
  }

}

 var styles = {
  default: null,
  silver: [
    {
      elementType: 'geometry',
      stylers: [{color: '#f5f5f5'}]
    },
    {
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{color: '#616161'}]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{color: '#f5f5f5'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#bdbdbd'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#ffffff'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#dadada'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#616161'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#c9c9c9'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    }
  ],

  night: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ],

  retro: [
    {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{color: '#c9b2a6'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [{color: '#dcd2be'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ae9e90'}]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#93817c'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{color: '#a5b076'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#447530'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#f5f1e6'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{color: '#fdfcf8'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#f8c967'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#e9bc62'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{color: '#e98d58'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [{color: '#db8555'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#806b63'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.fill',
      stylers: [{color: '#8f7d77'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#ebe3cd'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{color: '#b9d3c2'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#92998d'}]
    }
  ],

  hiding: [
    {
      featureType: 'poi.business',
      stylers: [{visibility: 'off'}]
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}]
    }
  ]
};