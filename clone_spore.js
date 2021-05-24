AFRAME.registerComponent('clone_spore', {
  schema: {
    
  },

  init: function () {
    const nrOfBalls = parseInt(document.querySelector('#nr_of_balls').textContent);
    function randomPosition(max, min) {
      return {
        
        x:  Math.floor(Math.random() * (max - min + 1)) + min,
        y: 100,
        z: Math.floor(Math.random() * (max - min + 1)) + min
      };
    }
    function randomRadius() {
      let radius = Math.floor(Math.random() * (4 - 0.2 + 1)) + 0.2
      // console.log('radius: ' + radius)
      return radius;

    }
    
    function createSpore(){
      const sceneEl = document.querySelector('a-scene');
      const sporeEl = document.getElementById('spore');
      const clone = sporeEl.cloneNode()
      // console.log('öööö')
      // console.log(clone)
      // console.log('öööö')
      clone.setAttribute("dynamic-body", "")
      clone.setAttribute("position", randomPosition(800, -800))
      clone.setAttribute("radius", randomRadius())
      clone.addEventListener('mousedown', () => {
    
        clone.dispatchEvent(new Event('collected'));
        
      })
      clone.addEventListener('animationcomplete', () => {
        

      });
      // setTimeout(() => {  sceneEl.appendChild(clone); }, 3000);
      sceneEl.appendChild(clone);
 
    }
    // setTimeout(() => {  console.log("World!"); }, 2000);
    for(let i=0 ; i<nrOfBalls; i++){
      // console.log(i);
  
      createSpore();
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






