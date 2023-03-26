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
const priceCard = document.querySelector('.price__container');

function scrollX(){
    if(priceCard.scrollLeft() > 20){
        priceScroll.classList.add('active')
    };
};

// const priceCb = function(entries, observer){
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             priceScroll.classList.add('active');
//             console.log("scroll-in");
//             observer.unobserve(entry.target);
//         } else{
//             priceScroll.classList.remove('active');
//             console.log("scroll-out");
//         }
//     });
// }

// const option2 = {
//     rootMargin: "-600px 0px 0px -320px",
// }

// const io4 = new IntersectionObserver(priceCb, option2);
// io4.observe(priceCard);
