function initMap() {
    let mapNew = document.getElementById('map');
    let option = {
        zoom: 15,
        center: {
            lat: 40.7152035,
            lng: -74.0099986
        },
        styles: [
            {elementType: 'geometry', stylers: [{color: '#282828'}]},
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
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#383838'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#004044'}]
            },

        ]

    };
    let myMap = new google.maps.Map(mapNew, option);

        let markers = [
            {
                coordinates:  {lat: 40.7133826, lng: -74.0112926},
                info: '<h4>Little Park</h4>'
            },

            {
                coordinates:  {lat: 40.7162669,lng: -73.9957915},
                info: 'Mahayana Temple Buddhist Association'

            },


        ];

        for(let i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }

    function addMarker(properties) {
        let marker = new google.maps.Marker ({
            position: properties.coordinates,
            map: myMap
        });
        if(properties.image) {
            marker.setIcon(properties.image);
        }
        if(properties.info) {
            let InfoWindow = new google.maps.InfoWindow ({
                content: properties.info
            });


            marker.addListener('click', function () {
                InfoWindow.open(myMap, marker);
            })
        }

    }


}

