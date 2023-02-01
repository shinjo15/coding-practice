$(function(){
    $('.hm__menu-trigger').on('click',function(event){
        $(this).toggleClass('active');
        $('#hm').fadeToggle();
        event.preventDefault();
    })
})