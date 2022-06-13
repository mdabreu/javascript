let html = '';
let red;
let green;
let blue;
let randomRGB;


function randomcolor() {
    return Math.floor(Math.random() * 256)
}

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;


for (let i = 0; i < 11; i++ ) {
	 html += `<div style="background-color: rgb(${randomcolor()}, ${randomcolor()}, ${randomcolor()})">${i}</div>`;
     
}

document.querySelector('main').innerHTML = html;


// or 

for (let i = 0; i < 11; i++ ) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;


