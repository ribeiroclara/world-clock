function getUserTimeZone() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const apiKey = "436e9e6a4f4041e28b10cae4809b8084"; // Sua chave de API
            const apiUrl = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${latitude}&long=${longitude}`;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Falha ao buscar dados de fuso horário');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data.timezone) {
                        const userTimeZone = data.timezone;

                        updateUserTime(userTimeZone);
                    } else {
                        throw new Error('Dados de fuso horário não encontrados');
                    }
                })
                .catch(error => {
                    console.error("Erro ao obter fuso horário:", error);
                    alert("Não foi possível obter os dados de fuso horário. Verifique sua chave de API ou tente novamente mais tarde.");
                });
        });
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}

function updateUserTime(timeZone) {
    let userElement = document.querySelector("#user-time");
    let userDateElement = userElement.querySelector(".date");
    let userTimeElement = userElement.querySelector(".time");

    let userMoment = moment().tz(timeZone);

    userDateElement.innerHTML = userMoment.format("MMMM Do YYYY");
    userTimeElement.innerHTML = userMoment.format("h:mm:ss [<small>]A[</small>]");
}

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
    let brasilMoment = moment().tz("Europe/London");

    brasilDateElement.innerHTML = brasilMoment.format("MMMM Do YYYY");
    brasilTimeElement.innerHTML = brasilMoment.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace ("_", " ").split("/")[1]; 
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
<div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

let getTimeButton = document.querySelector("#get-time");
getTimeButton.addEventListener("click", getUserTimeZone);

setInterval(updateTime, 1000);
updateTime();