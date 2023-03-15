const trainer = document.querySelecter('.trainer__switching__t');
const staff = document.querySelecter('.trainer__switching__s');

function toggleactive(el){
    el.classList.toggle('active')
}

trainer.addEventListener('click', toggleactive(this));
staff.addEventListener('click', toggleactive(this));
