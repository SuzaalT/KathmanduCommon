// <!-- StAuth10244: I Sujal Thapa, 000904603 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else. -->
let map;
let userMarker; 
let laliGurasMarker, jimbuMarker; 

function initMap() {

  const location1 = { lat: 43.64018, lng: -79.43967 }; // Lali Guras
  const location2 = { lat: 43.640419, lng: -79.438551 }; // Jimbu

  map = new google.maps.Map(document.getElementById('map'), {
    center: location1,
    zoom: 16,
  });

  laliGurasMarker = new google.maps.Marker({
    position: location1,
    title: 'Lali Guras Nepali Restaurant',
  });

  jimbuMarker = new google.maps.Marker({
    position: location2,
    title: 'Jimbu Himalayan Restaurant',
  });
}

function showLaliGuras() {
  laliGurasMarker.setMap(map);
  map.setCenter(laliGurasMarker.getPosition());
  map.setZoom(18); 
}

function showJimbu() {
  jimbuMarker.setMap(map); 
  map.setCenter(jimbuMarker.getPosition());
  map.setZoom(18); 
}

function showUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

    
      if (userMarker) {
        userMarker.setMap(null);
      }

    
      userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        icon: 'https://img.icons8.com/color/48/000000/nepal.png', 
        title: 'Your Location',
      });

    
      map.setCenter(userLocation);
      map.setZoom(12);
    }, error => {
      console.log("Geolocation error: " + error.message);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function removeAllMarkers() {
  if (laliGurasMarker) laliGurasMarker.setMap(null); 
  if (jimbuMarker) jimbuMarker.setMap(null); 
  if (userMarker) userMarker.setMap(null); 
}
initMap();
document.getElementById("show_laliguras").addEventListener("click", showLaliGuras);
document.getElementById("show_jimbu").addEventListener("click", showJimbu);
document.getElementById("show_position").addEventListener("click", showUserLocation);
document.getElementById("remove_all").addEventListener("click", removeAllMarkers);
