$(document).ready(function(){
    var $design = $('#se3_2').children('div');
    var $designIndex = 0;
    var $switch = true;
    console.log($design);

    $design.click(function(){
        $designIndex = $(this).index();
        if($switch){
        $design.eq($designIndex-1).siblings('div').stop().css("display","none");
        $design.eq($designIndex-1).animate({
                width:"100%"
            },500);
            $switch=false;
        }else{
            $design.css("width","213px");
            $design.css("display","block");
            $switch=true;
        }
    });
});