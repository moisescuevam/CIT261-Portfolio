var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=83287&appid=8d7178b81fed26ae734b0d4364f47036',true);
weatherObj.send();

weatherObj.onload = function(){
    var jsonRespObj = JSON.parse(weatherObj.responseText);
    
    console.log(jsonRespObj);
    
    document.getElementById("condition").innerHTML = jsonRespObj.weather[0].description;
    document.getElementById("current").innerHTML = jsonRespObj.weather[0].description;
    document.getElementById("temp").innerHTML = jsonRespObj.main.temp;
    document.getElementById("hum").innerHTML = jsonRespObj.main.humidity;
    document.getElementById("spe").innerHTML = jsonRespObj.wind.speed;
    document.getElementById('currenticon').src = "https://openweathermap.org/img/w/" + jsonRespObj.weather[0].icon + ".png";
   

}
var theObj = new XMLHttpRequest();
theObj.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=17edd760e3f4445316b1b64400eae5a2',true);
theObj.send();

theObj.onload = function(){
    var jsonResp = JSON.parse(theObj.responseText);
    console.log(jsonResp);

    document.getElementById('1').innerHTML = jsonResp.list[0].main.temp;
    document.getElementById('2').innerHTML = jsonResp.list[1].main.temp;
    document.getElementById('3').innerHTML = jsonResp.list[2].main.temp;
    document.getElementById('4').innerHTML = jsonResp.list[3].main.temp;
    document.getElementById('5').innerHTML = jsonResp.list[4].main.temp;
    
}