fetch('https://whatyearitit-backend.vercel.app/year')
 .then(response => response.json())
 .then(data => {
    document.querySelector('#year').textContent = data.year;
 });
