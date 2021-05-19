//https://stackoverflow.com/questions/65030477/component-to-play-multiple-audio-files-at-the-same-time-on-click-aframe-webvr

AFRAME.registerComponent('play-audio', {
  init: function () {

  this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    
   let entity = document.querySelectorAll('.sound');
  //  console.log(entity.length)
    for (let item of entity) {
      // console.log(item.id);
      item.components.sound.playSound();
   }
  }
}); 