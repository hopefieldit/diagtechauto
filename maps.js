// maps coverage
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -25.848860, lng: 28.142690 },
        zoom: 18,
    });
}
// end maps