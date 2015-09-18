/** Global variable declaration **/ 
var map;

/** Application's Main Function **/
function main() {
  initializeMap();
  createMarker();
}

/** Initialize the map canvas **/
function initializeMap()
{
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: new google.maps.LatLng(0, 0)
  });
  map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
  console.log("Initialize Map");
}

/** Create pins**/ 
function createMarker()
{
  var vancouver = new google.maps.Marker({
    position : new google.maps.LatLng(45.638728, -122.661486),
    map : map,
    title : 'Vancouver, WA'
  }); 
  vancouver.setMap(map);
  vancouver.addListener(vancouver.setAnimation(google.maps.Animation.BOUNCE));
  console.log("Vancouver Pin");

  var sanDiego = new google.maps.Marker({
    position : new google.maps.LatLng(32.715738, -117.161084),
    map : map,
    title : 'San Diego, CA'
  });
  sanDiego.setMap(map);
  console.log("San Diego Pin");

  var portoAlegre = new google.maps.Marker({
    position : new google.maps.LatLng(-30.034647, -51.217658),
    map : map,
    title : 'Porto Alegre, Brazil'
  });
  portoAlegre.setMap(map);
  portoAlegre.addListener(portoAlegre.setAnimation(google.maps.Animation.BOUNCE));
  console.log("Porto Alegre Pin");
}

google.maps.event.addDomListener(window, 'load', main);
