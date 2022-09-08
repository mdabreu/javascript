const btnCreate = document.getElementById('mainbutton');


let xhr = new XMLHttpRequest();
xhr.open("POST", "https://sondheim.braze.com/users/track");

xhr.setRequestHeader("Authorization", "Bearer 50f62077-629e-4837-bdbd-6e036b2465e5");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
  "events": [
    {
        "external_id": "mattdabreujstestwebsite",
        "name": "flight_purchased",
        "time": "2022-08-18T15:51:02+0000",
        "properties": {
            "flight_date": "tomorrow"
        }
    }
  ]
}`;

btnCreate.addEventListener('click', () => {
xhr.send(data); });
