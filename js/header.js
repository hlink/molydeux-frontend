///////////////////////////////////////////////////////////////////////////////////////////////
//
// Fading Navbar BG code stolen liberally from Stack Overflow:
// http://stackoverflow.com/questions/8702329/jquery-javascript-opacity-animation-with-scroll
//
///////////////////////////////////////////////////////////////////////////////////////////////


var fadeStart=100 // 100px scroll or less will equiv to 0 opacity
    ,fadeUntil=250 // 250px scroll or more will equiv to 1 opacity
    ,fading = $('.navbar-inner')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=1
    ;
    if( offset<=fadeStart ){
      opacity=0;
        
    }else if( offset<=fadeUntil ){
      opacity=0+offset/fadeUntil;
      
    }
    fading.css('opacity',opacity);
});