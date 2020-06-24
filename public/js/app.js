console.log("Client side javascript is loaded.")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const contentDiv = document.querySelector('.weather')
const loader = '<div class="loader"></div>'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    contentDiv.innerHTML = loader
    const address = search.value

    fetch('http://localhost:3000/weather?address=' + address)
        .then(response => {
            response.json().then(data => {
                if (data.error) {
                    const errorNode = `<h1 class="error">${data.error}</h1>`
                    contentDiv.innerHTML = errorNode
                } else {
                    const weatherNode =
                        `<div class="weather-details">
                            <img class="weather-img"
                                src=${data.weather_icons[0]}>
                            <h5>${data.weather_descriptions[0]}</h5>
                            <h3>${data.location}</h3>
                            <h1>${data.temperature} °C</h1>
                            <h4>Humidity: ${data.humidity}</h4>
                            <h4>Wind Speed: ${data.wind_speed} KM/H</h4>
                            <h4>Wind Direction: ${data.wind_dir}</h4>
                        </div>`
                    contentDiv.innerHTML = weatherNode
                }
            })
        })
})