
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=provo,usa&appid=ee5f5c7992343caaee0297016e6fa338';
fetch(requestURL)
  .then((response)=> response.json())
  .then((data)=>{
      console.log(data)
      
      document.querySelector('.temperature').innerHTML = `${parseInt((data.main.temp - 273.15)*9/5+32)}&deg;F`
      const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const description = data.weather[0].description;
      const Icon = document.querySelector('.icon-src');
      const potrait = document.createElement('img')
      potrait.setAttribute('src',iconsrc);
      potrait.setAttribute('alt',description)
      Icon.appendChild(potrait)
      document.querySelector('.description').textContent = data.weather[0].description;
     
      
     })


           




      

    
