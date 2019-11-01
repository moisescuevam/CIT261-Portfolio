var header = document.querySelector('section');
var townObj = new XMLHttpRequest();
    townObj.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');
    townObj.send();

    townObj.onload = function(){
        var townRespObj = JSON.parse(townObj.responseText);
        console.log(townRespObj);

        document.getElementById('APreston').innerHTML = townRespObj.towns[4].name;
        document.getElementById('PrestonCity').innerHTML = townRespObj.towns[4].motto;
        document.getElementById('RainInPreston').innerHTML = townRespObj.towns[4].averageRainfall;
        document.getElementById('YearOfPreston').innerHTML = townRespObj.towns[4].yearFounded;
        document.getElementById('PopulationOfPreston').innerHTML = townRespObj.towns[4].currentPopulation;

        document.getElementById('BGreenville').innerHTML = townRespObj.towns[2].name;
        document.getElementById('GreenvilleCity').innerHTML = townRespObj.towns[2].motto;
        document.getElementById('RainInGreenville').innerHTML = townRespObj.towns[2].averageRainfall;
        document.getElementById('YearOfGreenville').innerHTML = townRespObj.towns[2].yearFounded;
        document.getElementById('PopulationOfGreenville').innerHTML = townRespObj.towns[2].currentPopulation;

        document.getElementById('CPlacerton').innerHTML = townRespObj.towns[3].name;
        document.getElementById('PlacertonCity').innerHTML = townRespObj.towns[3].motto;
        document.getElementById('RainInPlacerton').innerHTML = townRespObj.towns[3].averageRainfall;
        document.getElementById('YearOfPlacerton').innerHTML = townRespObj.towns[3].yearFounded;
        document.getElementById('PopulationOfPlacerton').innerHTML = townRespObj.towns[3].currentPopulation;
    }