//document.getElementById('button3').addEventListener('click', getExternal);
setInterval(getExternal,10);

// Get from external API
function getExternal() {
  fetch('https://jamgarageapi.azurewebsites.net/api/garages')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(garage) {
        output += `<div class="garage"><ul class"garagename">${garage.garageName}<li>${garage.numParkingSpotsOccupied} Out of ${garage.maxParkingSpots} Used</li><li>${Math.trunc((garage.numParkingSpotsOccupied/garage.maxParkingSpots)*100)}% Capacity</li></ul></div>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}