
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
