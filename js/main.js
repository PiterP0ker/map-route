; (function () {
	'use strict';


	function initBaMap() {

		// The location of mapCenter
		let poltava = new google.maps.LatLng(49.589100, 34.557851);
		// The map, centered at mapCenter
		let mapEl = document.getElementById('map');

		let mapOptions =
		{
			zoom: 9,
			center: poltava,
			disableDefaultUI: true
		};
		let baMap = new google.maps.Map(mapEl, mapOptions);
		let directionsService = new google.maps.DirectionsService();
		let directionsRenderer = new google.maps.DirectionsRenderer();

		directionsRenderer.setMap(baMap);

		let newFuncOnSubmit = function () {
			calcRoute(directionsService, directionsRenderer);
	  };

	  document.querySelector('.ba-form').addEventListener('submit', function(event){ event.preventDefault();
	  });
	  document.querySelector('.ba-form').addEventListener('submit', newFuncOnSubmit);
	  
	  function calcRoute(directionsService, directionsRenderer) {
			directionsService.route({
				 origin: document.getElementById('ba-start').value,
				 destination: document.getElementById('ba-end').value,
				 travelMode: 'DRIVING'
			}, function (response, status) {
				 if (status === 'OK') {
					directionsRenderer.setDirections(response);
				 } else {
					  window.alert('Нет такого направления');
				 }
			});

	  }
	}
	document.addEventListener('DOMContentLoaded', initBaMap);
})();

