var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ada28d82c17078da7e6577a7d71c38de&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var cityNameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  input.value ="";
  main.innerHTML = cityNameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  
  

})


.catch(err => alert("Wrong city name!"));
})