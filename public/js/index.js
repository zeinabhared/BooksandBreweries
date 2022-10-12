var submit = document.getElementById("cityInputSubmit");

//function to make sure only one checkbox can be selected at a time
// $(document).ready(function(){
//     $('.check').click(function() {
//         $('.check').not(this).prop('checked', false);
//     });
//   });

document.getElementById("cityInputSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    // let selectedRadius = $("select").val();
    // let cityName = "Seattle, WA";
    console.log('Test!');
    // mapTask(selectedRadius, cityName, searchTerm);
});

// function mainTask() {

//         // fuction to use GOOGLE Maps API, using variables
//         function mapTask(selectedRadius, cityName, searchTerm) {
//                 infowindow = new google.maps.InfoWindow();
//                 map = new google.maps.Map(
//                     document.getElementById('map'), {center: cityName, zoom: 13});
//                 let request = {
//                     location: cityName,
//                     radius: selectedRadius,
//                     query: searchTerm,
//                 };
//                 service = new google.maps.places.PlacesService(map);
//                 service.textSearch(request, callback);
//                 }
//                 //function to check if marker has already been placed 
//                 function callback(results, status) {
//                 if (status == google.maps.places.PlacesServiceStatus.OK) {
//                     for (var i = 0; i < results.length; i++) {
//                     createMarker(results[i]);
//                     }
//                 }
//                 }
//                 //function to place markers on the map produced from google API
//                 function createMarker(place) {
//                     new google.maps.Marker({
//                         position: place.geometry.location,
//                         map: map
//                     });
//                 };
// };