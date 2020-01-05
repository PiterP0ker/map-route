; (function () {
	'use strict';


	function initBaMap() {

		// The location of mapCenter
		let poltava = new google.maps.LatLng(49.589100, 34.557851);
		let myrgorod = new google.maps.LatLng(49.9658184, 33.5463908);
		let buhalovka = new google.maps.LatLng(49.9512775, 34.4902803);
		// The map, centered at mapCenter
		let mapEl = document.getElementById('map');

		let mapOptions =
		{
			zoom: 9,
			center: poltava,
			disableDefaultUI: true,
			styles: [
				{
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#bdbdbd"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dadada"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#c9c9c9"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				}
			]
		};
		let baMap = new google.maps.Map(mapEl, mapOptions);
		let directionsService = new google.maps.DirectionsService();
		let directionsRenderer = new google.maps.DirectionsRenderer();

		directionsRenderer.setMap(baMap);


		function calcRoute() {
			var request = {
				origin: poltava,
				destination: poltava,
				travelMode: 'DRIVING',
				waypoints: [
					{
						location: buhalovka,
						stopover: true
					},
					{
						location: myrgorod,
						stopover: true
					}
				],
				optimizeWaypoints: true
			};
			directionsService.route(request, function (result, status) {

				if (status == 'OK') {
					directionsRenderer.setDirections(result);
				}
			});
		}

		document.querySelector('[data-route]').onclick = function () {
			calcRoute();
		}
	}
	document.addEventListener('DOMContentLoaded', initBaMap);
})();