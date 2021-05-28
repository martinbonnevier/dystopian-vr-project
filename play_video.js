AFRAME.registerComponent('play_videos', {
  init: function () {
    const videos = document.querySelectorAll('.videoo');

   
    //...
 



    for(let i = 0; i < videos.length; i++){
      videos[i].play();
      console.log(i);

      if (typeof videos[i].loop === 'boolean') { // loop supported
        console.log('true');
        videos[i].loop = true;
      }  if(i < 1000){ // loop property not supported
        console.log('false');
        videos[i].addEventListener('ended', function () {
          console.log('tjoho');
          this.currentTime = 0;
          this.play();
        }, false);
      }


    }


    

  //   for(let j = 0; j < videos.length; j++){
  //     videos[j].onended = function () {
  //       this.load();
  //       this.play();
  //     };

  // }
 
  }
}); 