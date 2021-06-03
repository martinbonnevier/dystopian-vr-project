

//Function for stopping background sounds/music when user moves out of range (60 m:s)

AFRAME.registerComponent('distance_to_sound', {

  init: function () {
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },

   tick: function (time, timeDelta) {
    var camera = document.querySelector('#cameraRig');
    var soundSources = document.querySelectorAll('#bg_sound2');
    for(let i = 0; i < soundSources.length; i++){
      if((camera.object3D.position.distanceTo(soundSources[i].object3D.position) > 60)){        
        soundSources[i].components.sound.pause();
      }
      else{
        soundSources[i].components.sound.play();        
      }
    }
  }
});
