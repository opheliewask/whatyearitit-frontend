fetch('http://whatyearitit-backend.vercel.app/date')
 .then(response => response.json())
 .then(data => {
    console.log(data);
    document.querySelector('#year').innerHTML += data.year
 });
