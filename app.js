// Get from external API
window.onload = function getExternal() {
  fetch('https://jamgarageapi.azurewebsites.net/api/garages')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(garage) {
        var style = "style=color:green";
        var percent = Math.trunc((garage.numParkingSpotsOccupied/garage.maxParkingSpots)*100);
        if (percent >= 85) {
          style = "style=color:red";
        }
        output += `<div class="garage"><ul class"garagename">${garage.garageName}/ Id ${garage.id}<li>${garage.numParkingSpotsOccupied} Out of ${garage.maxParkingSpots} Used</li><li ${style}>${percent}% Capacity</li></ul></div>`;        
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}