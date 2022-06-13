let html = '';
let red;
let green;
let blue;
let randomRGB;





// or 

for (let i = 0; i < 11; i++ ) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;


