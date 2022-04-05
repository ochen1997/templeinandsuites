const requestURL =
"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ee5f5c7992343caaee0297016e6fa338}"
fetch(requestURL)
.then(response => {
    return response.json()
})
.then(data =>{
    console.log(data)
})