// init
$('#Social').hide();


// event
$(window).on('scroll',function(){
    // console.log($(window).scrollTop());
    
    if($(window).scrollTop()>500){
    $('#Social').fadeIn();
    } else{
    $('#Social').fadeOut();
    }

    if($(window).scrollTop()==0){
    $('#Header').addClass('header-active');
    } else{
    $($(window)).removeClass('header-active');
    }

});

$('BtnBars').on('click',function(){
    $('#HeaderBody').fadeIn();
    $('body').css('overflow','hidden');
});


$('#BtnXmark,.nav-link').on('click',function(){
    $('#HeaderBody').fadeOut();
});

$('#BtnXmark').on('click',function(){
    $('body').removeAttr('style');
})