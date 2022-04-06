const content = document.querySelector('.content');
const requestURL = 'https://ochen1997.github.io/templeinandsuites/data/data.json';


fetch(requestURL)
.then(function(response){
    return response.json()
})
.then(function(jsonObject){
    console.table(jsonObject)
    const temples = (jsonObject)['temples']
    temples.forEach(displayDirectory);
})



function displayDirectory(mydata){
    let card = document.createElement('section');
    let potrait = document.createElement('img');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')
    let p6 = document.createElement('p')
    let p7 = document.createElement('p')
    let p8 = document.createElement('p')
    let p9 = document.createElement('p')

    p.textContent = `${mydata.address}`;
    p2.textContent = `${mydata.telephone}`;
    p3.textContent = `${mydata.email}`;
    p4.textContent = `${mydata.services}`
    p5.textContent = `${mydata.history}`
    p6.textContent = `${mydata.ordinancesschedule}`
    p7.textContent = `${mydata.sessionschedule}`
    p8.textContent = `${mydata.templeclosureschedule}`

    potrait.setAttribute('src', mydata.imageurl);
    potrait.setAttribute('alt', `temples`);


    card.appendChild(potrait);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(p8);
    card.appendChild(p);
    content.appendChild(card)
   

}