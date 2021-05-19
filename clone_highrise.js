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
      // console.log(counter)
      const sceneEl = document.querySelector('a-scene');
      const highRiseEl = document.getElementById('model_hr');
      const brickEl = document.getElementById('model_bricks');
      const fabricEl = document.getElementById('model_fabric');
      const fabric2El = document.getElementById('model_fabric2');
      const soundEl = document.querySelector('.sound_hr');
      let clone = {};
     

      // console.log('yyyyyyyyyyyyyyyyyy ' + typeof(clone))
      // const clone = highRiseEl.cloneNode();
      // const cloneSound = soundEl.cloneNode();
      // console.log(soundEl)
      const randomPos = randomPosition(500, -500)
      // console.log(randomPos)
      // console.log(clone)
      // console.log('öööö')
      // const randomPosition = randomPosition();
      if(counter === 1){
        // console.log('even!!!!!!!!!!!!!!!')
        clone = highRiseEl.cloneNode();

      }
      else if (counter === 2){
        clone = fabricEl.cloneNode();

      }
      else if(counter === 3){
        clone = brickEl.cloneNode();
        console.log('ööööööööööööööö')
        console.log(clone)

      }
      else if(counter===4){
        clone = fabric2El.cloneNode();

      }
      clone.setAttribute("static-body", "");
      clone.setAttribute("position", randomPos);
      // cloneSound.setAttribute("position", randomPos);
      // cloneSound.setAttribute("id", "bg_sound2")
      //console.log(clone.getAttribute(position))
      sceneEl.appendChild(clone); 
      // sceneEl.appendChild(cloneSound); 
    }
    
    for(let i=0 ; i<nrOfBuildings; i++){
      
      for(let j = 1; j < 5; j++){
        createHighRise(j)
      }
 
    }


  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});






