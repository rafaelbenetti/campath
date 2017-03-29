let Index = (function () {
    'use strict';

    let config = function () {
        configureMap();
    };

    let configureMap = function () {
        var locations = [
            new google.maps.LatLng(-29.633678, -51.001446),
            new google.maps.LatLng(-29.673872, -51.059408),
            new google.maps.LatLng(-29.660838, -51.112399),
            new google.maps.LatLng(-29.682913, -51.133619)
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: new google.maps.LatLng(-29.673872, -51.059408),
            disableDefaultUI: true
        });

        for (var i = 0; i < locations.length; i++) {
            new google.maps.Marker({
                position: locations[i],
                map: map
            });
        }
        
        var line = new google.maps.Polyline({
            path: locations,
            strokeColor: "#019875",
            strokeOpacity: 1.0,
            strokeWeight: 3,
            map: map
        });
    };

    return {
        config
    };
})();