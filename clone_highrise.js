AFRAME.registerComponent('clone_highrise', {
  schema: {
    
  },

  init: function () {
    const nrOfBuildings = parseInt(document.querySelector('#nr_of_buildings').textContent)/4;
    function randomPosition(max, min) {
      return {
        
        x:  Math.floor(Math.random() * (max - min + 1)) + min,
        y: Math.floor(Math.random() * (50 - 1 + 1)) + 1,
        z: Math.floor(Math.random() * (max - min + 1)) + min
      };
    }


    function createHighRise(counter){
      const sceneEl = document.querySelector('a-scene');
      const highRiseEl = document.getElementById('model_hr');
      const brickEl = document.getElementById('model_bricks');
      const fabricEl = document.getElementById('model_fabric');
      const fabric2El = document.getElementById('model_fabric2');
      const soundEl = document.querySelector('.sound_hr');
      let clone = {};
          
      const randomPos = randomPosition(600, -600)

      if(counter === 1){
        clone = highRiseEl.cloneNode();
      }
      else if (counter === 2){
        clone = fabricEl.cloneNode();
      }
      else if(counter === 3){
        clone = brickEl.cloneNode();
      }
      else if(counter===4){
        clone = fabric2El.cloneNode();
      }
      clone.setAttribute("static-body", "");
      clone.setAttribute("position", randomPos);
      sceneEl.appendChild(clone); 
    }
    
    for(let i=0 ; i<nrOfBuildings; i++){
      
      for(let j = 1; j < 5; j++){
        createHighRise(j)
      } 
    }
  }
});






