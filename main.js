// const trainer = document.querySelecter('.trainer__switching__t');
// const staff = document.querySelecter('.trainer__switching__s');

// function toggleactive(el){
//     el.classList.toggle('active')
// }

// trainer.addEventListener('click', toggleactive(this));
// staff.addEventListener('click', toggleactive(this));


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
