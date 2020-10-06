$(document).ready(function(){
    var topPos = 0;
    var dotli = $('.dot').children('li');
    var $section = $('.s_container').children('div');
    var $index = 0;
    var $scroll = 0;

    dotli.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $index = $(this).index();
        topPos = $section.eq($index).offset();
        
        if(dotli.eq($index).is('.on') == true){
            $('html').animate({scrollTop : topPos.top-76}, 400);
        }
        });

        $(window).scroll(function(){
            $scroll = $(document).scrollTop();
            console.log($scroll)
            if(600<$scroll && $(window).width()>1331){
                $('.side_nav').css("display","block");
            }else{
                $('.side_nav').css("display","none");
            }

            if($(window).width()>1331){
            if($scroll<600){
                $('.navbar-nav>li').eq(0).addClass('active').siblings().removeClass('active');
            }
            if(1284-76 >= $scroll && $scroll >= 600){
                //console.log("section1범위입니다.")
                $('.dot1').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(1).addClass('active').siblings().removeClass('active');
            }
            if(2307-76 >= $scroll && $scroll >= 1284-76){
                //console.log("section2범위입니다.")
                $('.dot2').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(2).addClass('active').siblings().removeClass('active');
            }
            if(2891-76 >= $scroll && $scroll >= 2307-76){
                //console.log("section3범위입니다.")
                $('.dot3').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(3).addClass('active').siblings().removeClass('active');
            }
            if($scroll >= 2891-76){
                //console.log("section4범위입니다.")
                $('.dot4').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(4).addClass('active').siblings().removeClass('active');
            }
          }
          if($(window).width()>769 && $(window).width()<1331){
            if($scroll<425){
                $('.navbar-nav>li').eq(0).addClass('active').siblings().removeClass('active');
            }
            if(1108-76 >= $scroll && $scroll >= 425){
                //console.log("section1범위입니다.")
                $('.dot1').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(1).addClass('active').siblings().removeClass('active');
            }
            if(1968-76 >= $scroll && $scroll >= 1108-76){
                //console.log("section2범위입니다.")
                $('.dot2').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(2).addClass('active').siblings().removeClass('active');
            }
            if(3220-76 >= $scroll && $scroll >= 1968-76){
                //console.log("section3범위입니다.")
                $('.dot3').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(3).addClass('active').siblings().removeClass('active');
            }
            if($scroll >= 3220-76){
                //console.log("section4범위입니다.")
                $('.dot4').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(4).addClass('active').siblings().removeClass('active');
            }
          }
          if($(window).width()<769){
            if($scroll<298){
                $('.navbar-nav>li').eq(0).addClass('active').siblings().removeClass('active');
            }
            if(1552-76 >= $scroll && $scroll >= 298){
                //console.log("section1범위입니다.")
                $('.dot1').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(1).addClass('active').siblings().removeClass('active');
            }
            if(2614-76 >= $scroll && $scroll >= 1552-76){
                //console.log("section2범위입니다.")
                $('.dot2').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(2).addClass('active').siblings().removeClass('active');
            }
            if(4785-76 >= $scroll && $scroll >= 2614-76){
                //console.log("section3범위입니다.")
                $('.dot3').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(3).addClass('active').siblings().removeClass('active');
            }
            if($scroll >= 4785-76){
                //console.log("section4범위입니다.")
                $('.dot4').addClass('on').siblings().removeClass('on');
                $('.navbar-nav>li').eq(4).addClass('active').siblings().removeClass('active');
            }
          }
        });
        var add = $('.navbar-nav').children('li');

        $('.home').click(function(e){
          e.preventDefault();
          add.removeClass('active');
          add.eq(0).addClass('active');
          $('html').stop().animate({
            scrollTop : $('body').offset().top}, 400);
          });

        $('.business').click(function(e){
          e.preventDefault();
          add.removeClass('active');
          add.eq(1).addClass('active');
          $('html').stop().animate({
            scrollTop : $('#se1').offset().top-76}, 400);
          });

          $('.objective').click(function(e){
          e.preventDefault();
          add.removeClass('active');
          add.eq(2).addClass('active');
          $('html').stop().animate({
            scrollTop : $('#se2').offset().top-76}, 400);
          });

          $('.design').click(function(e){
          e.preventDefault();
          add.removeClass('active');
          add.eq(3).addClass('active');
          $('html').stop().animate({
            scrollTop : $('#se3').offset().top-76}, 400);
          });

          $('.contact').click(function(e){
          e.preventDefault();
          add.removeClass('active');
          add.eq(3).addClass('active');
          $('html').stop().animate({
            scrollTop : $('#se4').offset().top-76}, 400);
          });
});