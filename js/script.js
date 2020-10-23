$(function(){


  $('.show').delay(1000).slideDown(8000);
    $('.showcase').delay(1000).slideDown(8000);
    $('.main-nav').delay(1000).fadeIn(6000);

    $('.shadow').hover(function(){
       $(this).css({
     'font-size':'22px',
     'padding':'1.2em'
       });
    }, function(){
      $(this).css({
        'font-size':'18px'
          });
    });

    $('div.linked').hover(function(){
      $('div.linked .light').show();
      $('.link').hide();
      
    },function(){
      $('div.shad .light').hide();
      $('.link').show();
    });
    
   
    $('div.money').hover(function(){
      $('div.money .light').show();
      $('.moneyed').hide();
      
    },function(){
      $('div.shad .light').hide();
      $('.moneyed').show();
    });

    $('div.trophy').hover(function(){
      $('div.trophy .light').show();
      $('.trophyed').hide();
      
    },function(){
      $('div.shad .light').hide();
      $('.trophyed').show();
    });
  

    $('div.laptop').hover(function(){
      $('div.laptop .light').show();
      $('.laptoped').hide();
      
    },function(){
      $('div.shad .light').hide();
      $('.laptoped').show();
    });


    $('div.afterwall').hover(function(){
      $('div.afterwall .light').show();
      $('.afterwalled').hide();
      
    },function(){
      $('div.shad .light').hide();
      $('.afterwalled').show();
    });

     $(document).scroll(function(){
       $('.feature').delay(1000).fadeIn(8000);
       $('.footer-section').delay(1000).fadeIn(8000);

     });

     $('.about').delay(1000).slideDown(8000);



});