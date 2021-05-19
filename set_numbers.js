AFRAME.registerComponent('set_nr', {
  init: function () {

 // Parse number of buildings and balls from form on index.html. Also checks if entered values are numbers and in the specified range.
      const url = document.URL;    
      const sub = url.substr(url.indexOf('=')+1, url.length);
      const nrOfBuildings = sub.substr(0, sub.indexOf('balls')-1);
      const nrOfBalls = sub.substr(sub.indexOf('=')+1, sub.length)
      if(Number.isNaN(parseInt(nrOfBuildings)) || parseInt(nrOfBuildings) > 200 || parseInt(nrOfBuildings) < 1){
        nrOfBuildings = 200;
      }
      if(Number.isNaN(parseInt(nrOfBalls)) || parseInt(nrOfBalls) > 400 || parseInt(nrOfBalls) < 1){
        nrOfBalls = 400;
      }
      const divBuildings = document.querySelector('#nr_of_buildings');
      divBuildings.textContent = nrOfBuildings.toString();
      const divBalls = document.querySelector('#nr_of_balls');
      divBalls.textContent = nrOfBalls.toString();
  
      // alert(nrOfBuildings);    
      // alert(nrOfBalls);
  }
}); 