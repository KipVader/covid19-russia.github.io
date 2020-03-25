let countCases = document.querySelector('.countCases'); //Cлучаи
let countDeaths = document.querySelector('.countDeaths'); //Смертей
let countRecovered = document.querySelector('.countRecovered'); //Выздоровел
let contDay = document.getElementById('ThisDate');

var d = new Date();
var curr_date = d.getDate() - 1;
var curr_month = d.getMonth() + 1;
var curr_year = d.getFullYear();
let thiscurr_month = (curr_month < 10)? '0'+curr_month : curr_month;
var lastDate = curr_year + "-" + curr_month + "-" + curr_date;
var echoDate = curr_date + "." + thiscurr_month  + "." + curr_year;


function addList(date, confirmed, recovered, deaths){
    if(lastDate == date){
        countDeaths.innerHTML = deaths;
        countCases.innerHTML = confirmed;
        countRecovered.innerHTML = (recovered == undefined) ? 'Неизвсетно': recovered;
        contDay.innerHTML = echoDate;
    }
}

fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    data["Russia"].forEach(({ date, confirmed, recovered, deaths }) =>
        addList(date, confirmed, recovered, deaths)
    )
  })