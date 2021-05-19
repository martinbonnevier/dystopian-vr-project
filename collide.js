AFRAME.registerComponent('print_colission', {
  schema: {
    
  },

  init: function () {
    var playerEl = document.getElementById('cameraRig');
    var ouch = document.getElementById('ouch');
    var ting = document.getElementById('ting');
    var klick = document.getElementById('klick');
    // ting.setAttribute('poolSize', '100')
      playerEl.addEventListener('collide', function (e) {
    // console.log('Player has collided with body #' + e.detail.body.id + e.detail.body.el.id);
    // console.log(e.detail.body.el.id);

        if(e.detail.body.el.id === 'spore3'){
          ouch.play();
          // console.log('played ouch');
        }
        else if(e.detail.body.el.id === 'spore'){
          ting.play();
          // console.log('played ting');
        }
        else if(e.detail.body.el.id === 'model_bricks' || e.detail.body.el.id === 'model_fabric' || e.detail.body.el.id === 'model_fabric2' || e.detail.body.el.id === 'model_hr'){
          klick.play();

        }
    // e.detail.target.el;  // Original entity (playerEl).
    // e.detail.body.el;    // Other entity, which playerEl touched.
    // e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
    // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
  });
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



