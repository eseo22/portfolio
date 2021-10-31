
//메뉴에 마우스 호버시 2depth
$(".gnb>li").on("mouseenter", function(){
    $(this).find(".sub").show();
});
$(".gnb>li").on("mouseleave", function(){
    $(this).find(".sub").hide();
});

//포커스 이동시 2depth 활성화
$(".gnb>li").each(function(index){
    $(".gnb>li").eq(index).find("a").on("focusin",function(){
        $(".gnb>li").eq(index).find(".sub").show();
    });
    $(".gnb>li").eq(index).find("a").last().on("focusout", function(){
        $(".gnb>li").eq(index).find(".sub").hide();
    });
});

//btnCall 클릭시 메뉴 열기, 닫기 클릭시 메뉴 닫기
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const menuClose = menuMo.querySelector(".txtbox a");

$(btnCall).on("click", function(){
    $(menuMo).addClass("on");
});
$(menuClose).on("click",function(){
    $(menuMo).removeClass("on");
});


//슬라이드

let enableClick = true;  

$(".next").on("click", function(e){
    e.preventDefault(); 

    if(enableClick){
        enableClick = false; 
        $(".list").animate({marginLeft:"-200%" },500, function(){
            $(".list").css({marginLeft : "-100%"}); 
            $(".list li").first().appendTo(".list");
            enableClick = true;  
        }); 
       
    }
   
}); 

$(".prev").on("click", function(e){
    e.preventDefault(); 

    if(enableClick){
        $(".list").animate({ marginLeft: "0%"},500, function(){
            $(".list").css({marginLeft :"-100%"}); 
            $(".list li").last().prependTo(".list"); 
            enableClick = true; 
        });
        enableClick = false; 
    }    
});