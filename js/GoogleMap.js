// Default link
let link;
function initializeMap(){
    // Initialize map through JS
    const APIkey = "AIzaSyAsQAFFhdmT6pO-G077_mFuZPpmoDcKNB0";
    const defaultLoc = "&q=Philippines";
    link = "https://www.google.com/maps/embed/v1/place?key=" + APIkey;
    $(document).ready(function(){
        $("#googlemapembed").attr("src", link + defaultLoc);
    });
}
function findLocation(){
    // Use HTML5 Geolocation
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            // Successful
            (position) => { 
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const pos = "&q=" + lat + "," + lng;
                const zoom = "&zoom=18";
                $(document).ready(function(){
                    $("#googlemapembed").attr("src", link + pos + zoom);
                });
        },
            // Error
            () => {handleLocationError(true)}
        );
    } else{
        // Does not support
        handleLocationError(false)
    }
}

function handleLocationError(browserHasGeolocation){
    $(document).ready(function(){
        // Reset Map to default
        $("#googlemapembed").attr("src", link);
        // Send message
        (browserHasGeolocation === true) ? $("#googlemapinfotext").text("Somethings not right...") : $("#googlemapinfotext").text("Need Geolocation support...")
    });
}