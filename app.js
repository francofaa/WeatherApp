$(document).ready(function(){
  var long;
  var lat; 
  var temp;
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=63a7a00cc45ff007a1202704584b9b0c'; 
      
      $.getJSON(api, function(data) {
        var weatherType = data.weather[0].description;
        var weatherIcon = 'wi-owm-' + data.weather[0].id;
        var kelvin = data.main.temp;
        var city = data.name;
        var country = data.sys.country;
        var tempInC = (Math.round(((kelvin - 273.15) * 1000)/10)/100).toFixed(1) + String.fromCharCode(176) + "C";
        var tempInF = (Math.round(((kelvin -273.15 ) * 9 / 5) + 32)).toString() + String.fromCharCode(176) + "F";
     
        $('#city').html(city);
        $('#country').html(country);
        $('#weather').html(weatherType);
        $('#icon').addClass(weatherIcon);

        $('#temp').html(tempInC);

        $('#temp').click(function(){
			var tempInUnits = $('#temp').text();
			$(this).text(tempInUnits == tempInC ? tempInF : tempInC);
        });


      });
      
    });
  };
  
  
});