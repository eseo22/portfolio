
//메뉴에 마우스 호버시 2depth
$(".gnb>li a").on("mouseenter", function(){
    $(this).parent("li").find(".sub").show();
});
$(".gnb>li a").on("mouseleave", function(){
    $(this).parent("li").find(".sub").hide();
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
