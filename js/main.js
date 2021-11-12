
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


//main pic 호버시
const picbox = document.querySelectorAll("#pics .picbox");

picspan(0); 
picspan(2);
function picspan(picnum){
    $(picbox).eq(picnum).on("mouseenter", function(){
        $(this).parent().find("span").hide();
    })
    $(picbox).eq(picnum).on("mouseleave", function(){
        $(this).parent().find("span").show();
    })
}


//슬라이드
var $svgli = $(".numbox ul li");
var $txt = $(".txtbox li");
var slideIndex = 0;
var len = $(".slidewrap li").length;
let enableClick = true;
//console.log(len);
$(".slidewrap").children("li").last().prependTo(".slidewrap");

$(".next").on("click", function(e){
    e.preventDefault();
    if(enableClick){
        enableClick = false; 
        slideIndex += 1;
        if(slideIndex < 0){slideIndex = len - 1;}
        if(slideIndex >= len){slideIndex = 0;}
        $(".slidewrap").animate({marginLeft:"-200%"},1000,function(){
            $(".slidewrap").css({marginLeft:"-100%"});
            $(".slidewrap").children("li").first().appendTo(".slidewrap");
            enableClick=true;
        })
        test(slideIndex);
    }
})
$(".prev").on("click", function(e){
    e.preventDefault();
    if(enableClick){
        enableClick = false; 
        slideIndex -= 1;
        //console.log(slideIndex);

    if(slideIndex < 0){slideIndex = len - 1;}
    if(slideIndex >= len){slideIndex = 0;}
    //console.log(slideIndex);
    $(".slidewrap").animate({marginLeft:"0%"},1000,function(){
        $(".slidewrap").css({marginLeft:"-100%"});
        $(".slidewrap").children("li").last().prependTo(".slidewrap");
        enableClick = true;
    })
    test(slideIndex);
    }
})
function test(el){
    $txt.removeClass("on");
    $txt.eq(el).addClass("on");
    $svgli.removeClass("on");
    $svgli.eq(el).addClass("on");
}



//슬라이드
/*
let enableClick = true;  
test(".slider2", ".list2");

function test(btn, list){
    $(btn).find(".next").on("click", function(e){
        e.preventDefault(); 
    
        if(enableClick){
            enableClick = false; 
            $(list).animate({marginLeft:"-200%" },500, function(){
                $(list).css({marginLeft : "-100%"}); 
                $(list).children("li").first().appendTo(list);

                enableClick = true;  
            });
        }
    }); 
    
    $(btn).find(".prev").on("click", function(e){
        e.preventDefault(); 
    
        if(enableClick){
            $(list).animate({ marginLeft: "-0%"},500, function(){
                $(list).css({marginLeft :"-100%"}); 
                $(list).children("li").last().prependTo(list); 
                enableClick = true; 
            });
            enableClick = false; 
        }    
    });
}


//tab
const $tab = $("#tab"); 
const $btns = $tab.find("dt a"); 
const $boxs = $tab.find("dd"); 

$btns.on("click focusin", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    var target = $(this).attr("href"); 
    $boxs.hide();  
    $(target).show();
    
    $btns.removeClass("on"); 
    $(this).addClass("on"); 
});  

//scroll
const posArr = [];
const $scrollBox = $(".myScroll");
let len = $scrollBox.length;
let baseLine = -500;

for(let i=0; i<len; i++){
    posArr.push($scrollBox.eq(i).offset().top);
}
$(window).on("resize", function(){
    posArr =[]; 
    for(let i=0; i<len; i++){
       posArr.push($scrollBox.eq(i).offset().top); 
    }
}); 

$(window).on("scroll", function(){
    let scroll = $(this).scrollTop();
    console.log(scroll);

    for(let i=0; i<len; i++){
        if(scroll >= posArr[i] +baseLine){

            $scrollBox.removeClass("on");
            $scrollBox.eq(i).addClass("on");
        }
    }
})
*/