AFRAME.registerComponent('clone_spore', {
  schema: {
    
  },

  init: function () {
    const nrOfBalls = parseInt(document.querySelector('#nr_of_balls').textContent);
    function randomPosition(max, min) {
      return {
        
        x: Math.floor(Math.random() * (max - min + 1)) + min,
        y: Math.floor(Math.random() * (800 - 100 + 1)) + 100,
        z: Math.floor(Math.random() * (max - min + 1)) + min
      };
    }
    function randomRadius() {
      let radius = Math.floor(Math.random() * (12 - 0.2 + 1)) + 0.2
      return radius;

    }
    
    function createSpore(){
      const sceneEl = document.querySelector('a-scene');
      const sporeEl = document.getElementById('spore');
      const clone = sporeEl.cloneNode()
      clone.setAttribute("dynamic-body", "")
      clone.setAttribute("position", randomPosition(800, -800))
      clone.setAttribute("radius", randomRadius())

      sceneEl.appendChild(clone);
 
    }
    for(let i=0 ; i<nrOfBalls; i++){
      createSpore();
    }
  }
});






