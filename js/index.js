$(document).ready(function(){

    // ripples
    $("#header,.info").ripples({
        dropRadius:20,
        perturbance:0.02
    })

    // navbar change
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass('change')
    })

    // window scroll
    $(window).scroll(function(){
        // scrollTop这个函数意思是 滚轴的顶点到屏幕最上方的地方
        let position = $(this).scrollTop();
        if(position>=718){
            $('.navbar').addClass('navbar-background')
            $('.navbar').addClass('fixed-top')
            $('#back-to-top').addClass('scrollTop')
        }else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
            $('#back-to-top').removeClass('scrollTop');
        }
    })


    // smooth scroll
    $('.nav-item a, .header-link, #back-to-top').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href')
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top -25
        },3000)
    })


    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
          // options for gallery
            enabled: true
        }
    });

})