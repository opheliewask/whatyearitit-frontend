fetch('http://localhost:3000/date')
 .then(response => response.json())
 .then(data => {
    console.log(data);
    document.querySelector('#year').innerHTML += data.year
 });
