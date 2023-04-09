document.addEventListener('DOMContentLoaded',
  function(){
    const soundOff = document.querySelector('.sound-off');
    const soundOn = document.querySelector('.sound-on');
    const bgm = document.querySelector('.bgm');

    function soundOffCb(){
        soundOff.classList.remove('active');
        soundOn.classList.add('active');
        bgm.play();
    }

    function soundOnCb(){
        soundOn.classList.remove('active');
        soundOff.classList.add('active');
        bgm.pause();
    }

    soundOff.addEventListener('click',soundOffCb);
    soundOn.addEventListener('click',soundOnCb);
  }
);

window.onload = function() {
  const spinner = document.querySelector('.loading');
  spinner.classList.add('loaded');
}