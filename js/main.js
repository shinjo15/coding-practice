document.addEventListener('DOMContentLoaded',
  function(){
    // サウンドの切り替え
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

    // フッターボタンの表示
    const story = document.querySelector('#footer-observer');
    const footerBtn = document.querySelector('.footer__box-btn');

    const btnActive = function(entries, observer){
      entries.forEach(entry =>{
          if(entry.isIntersecting){
            footerBtn.classList.add('active');
              console.log("in");
          } else{
            footerBtn.classList.remove('active');
              console.log("out");
          }
      });
  }
  
  const option = {
    rootMargin: "10000px 0px 0px 0px",
  }

  const io = new IntersectionObserver(btnActive, option);
  io.observe(story);
  }
);

window.onload = function() {
  const spinner = document.querySelector('.loading');
  spinner.classList.add('loaded');
}

