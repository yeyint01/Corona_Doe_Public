// Shorthand for $( document ).ready()


function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}



function loadMap() {
	var mymap = L.map('map').setView([19.745589, 96.15972], 7);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);


	L.circle([16.8389525, 95.9013792], 15000, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>ရန်ကုန်</b><br /><div>ပိုးတွေ့လူနာ - 4</div><div>သံသယလူနာ - 50</div>");
	

	L.circle([21.9403451, 96.0057838], 15000, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>မန္တလေး</b><br /><div>ပိုးတွေ့လူနာ - 1</div><div>သံသယလူနာ - 30</div>");

	
	L.circle([22.5387573, 97.0141481], 15000, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>ကျောက်မဲ</b><br /><div>ပိုးတွေ့လူနာ - 1</div><div>သံသယလူနာ - 10</div>");

	L.circle([18.9092092, 95.5412722], 15000, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>ပေါက်ခေါင်း</b><br /><div>ပိုးတွေ့လူနာ - 1</div><div>သံသယလူနာ - 10</div>");

	L.circle([19.6749891, 97.1799874], 15000, {
		color: '#e5e504',
		fillColor: '#ada401',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>လွိုင်ကော်</b><br /><div>ပိုးတွေ့လူနာ - 1</div><div>သံသယလူနာ - 10</div>");

	L.circle([16.453732, 97.6241677], 15000, {
		color: '#e5e504',
		fillColor: '#ada401',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>လွိုင်ကော်</b><br /><div>ပိုးတွေ့လူနာ - 1</div><div>သံသယလူနာ - 10</div>");

	L.circle([23.1904812, 93.98853], 15000, {
		color: '#e5e504',
		fillColor: '#ada401',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>လွိုင်ကော်</b><br /><div>ပိုးတွေ့လူနာ - 1</div><div>သံသယလူနာ - 10</div>");
	
	L.circle([19.7469963, 96.0533896], 15000, {
		color: '#e5e504',
		fillColor: '#ada401',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("<b>လွိုင်ကော်</b><br /><div>ပိုးတွေ့လူနာ - 1</div><div>သံသယလူနာ - 10</div>");

	var popup = L.popup();
	mymap.on('click', onMapClick);
}