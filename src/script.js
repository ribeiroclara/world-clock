function updateTime() {

let newYorkElement = document.querySelector("#newyork");
let nyDateElement = newYorkElement.querySelector(".date");
let nyTimeElement = newYorkElement.querySelector(".time");

let nyMoment = moment().tz("America/New_York");

nyDateElement.innerHTML = nyMoment.format("MMMM Do YYYY");
nyTimeElement.innerHTML = nyMoment.format("h:mm:ss [<small>]A[</small>]");

let hongKongElement = document.querySelector("#hongkong");
let hongKongDateElement = hongKongElement.querySelector(".date");
let hongKongTimeElement = hongKongElement.querySelector(".time");

let hongKongMoment = moment().tz("Asia/Hong_Kong");

hongKongDateElement.innerHTML = hongKongMoment.format("MMMM Do YYYY");
hongKongTimeElement.innerHTML = hongKongMoment.format("h:mm:ss [<small>]A[</small>]");

let brasilElement = document.querySelector("#brasilia");
let brasilDateElement = brasilElement.querySelector(".date");
let brasilTimeElement = brasilElement.querySelector(".time");

let brasilMoment = moment().tz("America/Sao_Paulo");

brasilDateElement.innerHTML = brasilMoment.format("MMMM Do YYYY");
brasilTimeElement.innerHTML = brasilMoment.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
