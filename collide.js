// Function for playing sounds on collission

AFRAME.registerComponent('play_colission_sound', {

  init: function () {
    var playerEl = document.getElementById('cameraRig');
    var ouch = document.getElementById('ouch');
    var ting = document.getElementById('ting');
    var klick = document.getElementById('klick');

      playerEl.addEventListener('collide', function (e) {

        if(e.detail.body.el.id === 'spore3'){
          ouch.play();
        }
        else if(e.detail.body.el.id === 'spore'){
          ting.play();
        }
        else if(e.detail.body.el.id === 'model_bricks' || e.detail.body.el.id === 'model_fabric' || e.detail.body.el.id === 'model_fabric2' || e.detail.body.el.id === 'model_hr'){
          klick.play();

        }
  });
  }
});



