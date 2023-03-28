// const trainer = document.querySelecter('.trainer__switching__t');
// const staff = document.querySelecter('.trainer__switching__s');

// function toggleactive(el){
//     el.classList.toggle('active')
// }

// trainer.addEventListener('click', toggleactive(this));
// staff.addEventListener('click', toggleactive(this));

// headerのスクロールオブザーバー
const title = document.querySelector('.mv__title');
const header = document.querySelector('.header');

const headerBg = function(entries, observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            header.classList.remove('h-scroll');
            console.log("in");
        } else{
            header.classList.add('h-scroll');
            console.log("out");
        }
    });
}

const option = {
    rootMargin: "-60px",
}

const io = new IntersectionObserver(headerBg, option);
io.observe(title);


//feature__card-containerのスクロールオブザーバー
const training = document.querySelector('.feature__img__training');
const food = document.querySelector('.feature__img__food');
const card = document.querySelectorAll('.feature__card-container');


const featureCard = function(entries, observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            card.forEach(el =>el.classList.add('inview'));
            console.log("card-in");
            observer.unobserve(entry.target);
        } else{
            card.forEach(el =>el.classList.remove('inview'));
            console.log("card-out");
        }
    });
}

const io2 = new IntersectionObserver(featureCard);
io2.observe(training);
io2.observe(food);


//trainerの画面切り替え
const trainer = document.querySelector('.trainer__switching__t');
const staff = document.querySelector('.trainer__switching__s');
const trainerContent = document.querySelector('.trainer__content');
const staffContent = document.querySelector('.staff__content');

function displayTrainer(){
    trainer.classList.add('active');
    staff.classList.remove('active');
    trainerContent.classList.add('active');
    staffContent.classList.remove('active');
}

function displayStaff(){
    staff.classList.add('active');
    trainer.classList.remove('active');
    staffContent.classList.add('active');
    trainerContent.classList.remove('active');
}

trainer.addEventListener('click', displayTrainer);
staff.addEventListener('click', displayStaff);


const swiper = new Swiper(".swiper", {
  loop: true,
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
      // ナビボタンが必要なら追加
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
});

//price__scrollのスクロールオブザーバー
const priceScroll = document.querySelector('.price__scroll');
const priceCard = document.querySelector('.price__card');

function scrollX(){
    if(priceCard.scrollLeft() > 20){
        priceScroll.classList.add('active')
    };
};

const priceCb = function(entries, observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            priceScroll.classList.add('active');
            console.log("scroll-in");
        } else{
            priceScroll.classList.remove('active');
            console.log("scroll-out");
            // observer.unobserve(entry.target);
        }
    });
}

const option2 = {
    rootMargin: "0px 0px 0px -320px",
}

const io4 = new IntersectionObserver(priceCb, option2);
io4.observe(priceCard);


/* =================================================== */
// slideUp, slideDown, slideToggle関数を定義
/* =================================================== */

// 要素をスライドしながら非表示にする関数(jQueryのslideUpと同じ)
const slideUp = (el, duration = 300) => {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
      el.classList.remove("is-open");
    }, duration);
  };
  
  // 要素をスライドしながら表示する関数(jQueryのslideDownと同じ)
  const slideDown = (el, duration = 300) => {
    el.classList.add("is-open");
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  };
  
  // 要素をスライドしながら交互に表示/非表示にする関数(jQueryのslideToggleと同じ)
  const slideToggle = (el, duration = 300) => {
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, duration);
    } else {
      return slideUp(el, duration);
    }
  };
  
  /* =================================================== */
  // DOM操作
  /* =================================================== */
  
  // アコーディオンを全て取得
  const accordions = document.querySelectorAll(".js-accordion");
  // 取得したアコーディオンをArrayに変換(IE対策)
  const accordionsArr = Array.prototype.slice.call(accordions);
  
  accordionsArr.forEach((accordion) => {
    // Triggerを全て取得
    const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
    // TriggerをArrayに変換(IE対策)
    const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);
  
    accordionTriggersArr.forEach((trigger) => {
      // Triggerにクリックイベントを付与
      trigger.addEventListener("click", () => {
        // '.is-active'クラスを付与or削除
        trigger.classList.toggle("is-active");
        // 開閉させる要素を取得
        const content = trigger.querySelector(".faq__accordion__content");
        // 要素を展開or閉じる
        slideToggle(content);
      });
    });
  });