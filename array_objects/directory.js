let html = ''

for (i in pets ) {
    html +=  
     `<h2> ${pets[i].name} </h2>
      <h3> ${pets[i].type} | ${pets[i].breed} </h3>
      <p> ${pets[i].age} </p>
      <img src="${pets[i].photo}" alt="${pets[i].breed}">`;
}

document.querySelector('main').insertAdjacentHTML('beforeend',html)
          
