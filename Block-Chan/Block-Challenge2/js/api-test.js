var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5061036&appid=17edd760e3f4445316b1b64400eae5a2',true);
weatherObj.send();

weatherObj.onload = function(){
    var jsonRespObj = JSON.parse(weatherObj.responseText);
    
    console.log(jsonRespObj);
    
    document.getElementById("condition").innerHTML = jsonRespObj.weather[0].description;
    document.getElementById("current").innerHTML = jsonRespObj.weather[0].description;
    document.getElementById("temp").innerHTML = jsonRespObj.main.temp;
    document.getElementById("hum").innerHTML = jsonRespObj.main.humidity;
    document.getElementById("Preci").innerHTML = jsonRespObj.main.pressure;

    document.getElementById("spe").innerHTML = jsonRespObj.wind.speed;
    document.getElementById('icon').src = "https://openweathermap.org/img/w/" + jsonRespObj.weather[0].icon + ".png";
   

}

var theObj = new XMLHttpRequest();
theObj.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5061036&appid=17edd760e3f4445316b1b64400eae5a2',true);
theObj.send();

theObj.onload = function(){
    var jsonResp = JSON.parse(theObj.responseText);
    console.log(jsonResp);

    document.getElementById('1').innerHTML = jsonResp.list[3].main.temp;
    document.getElementById('2').innerHTML = jsonResp.list[9].main.temp;
    document.getElementById('3').innerHTML = jsonResp.list[21].main.temp;
    document.getElementById('4').innerHTML = jsonResp.list[31].main.temp;
    document.getElementById('5').innerHTML = jsonResp.list[36].main.temp;
    
}