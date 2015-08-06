var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: new google.maps.LatLng(0, 0)
  });
  
  // Create the marker
  var vancouver = new google.maps.Marker({
    position : new google.maps.LatLng(45.638728, -122.661486),
    map : map,
    title : 'Vancouver, WA'
  });
  
  var sanDiego = new google.maps.Marker({
    position : new google.maps.LatLng(32.715738, -117.161084),
    map : map,
    title : 'San Diego, CA'
  });
  
  var portoAlegre = new google.maps.Marker({
    position : new google.maps.LatLng(-30.034647, -51.217658),
    map : map,
    title : 'Porto Alegre, Brazil'
  });

  // Add the marker to the map
  vancouver.setMap(map);
  sanDiego.setMap(map);
  portoAlegre.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);