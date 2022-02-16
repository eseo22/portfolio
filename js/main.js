//navi 활성화
const navi= document.querySelectorAll("#navi a");
console.log(navi);

$(navi).each(function(index, el) {
    $(el).on("focusin", function(){
        $(this).addClass("on");
    });
    $(el).on("focusout", function(){
        $(this).removeClass("on");
    });
});


//메뉴에 마우스 호버시 2depth활성화, 포커스 이동시 2depth 활성화
$(".gnb>li").each(function (index) {
    $(".gnb>li").on("mouseenter", function () {
        $(this).find(".sub").show();
    });
    $(".gnb>li").on("mouseleave", function () {
        $(this).find(".sub").hide();
    });
    $(".gnb>li").eq(index).find("a").on("focusin", function () {
        $(".gnb>li").eq(index).find(".sub").show();
    });
    $(".gnb>li").eq(index).find("a").last().on("focusout", function () {
        $(".gnb>li").eq(index).find(".sub").hide();
    });
});

//btnCall 클릭시 메뉴 열기, 닫기 클릭시 메뉴 닫기
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const menuClose = menuMo.querySelector(".txtbox a");

$(btnCall).on("click", function () {
    $(menuMo).addClass("on");
});
$(menuClose).on("click", function () {
    $(menuMo).removeClass("on");
});


//main pic 호버시
const picbox = document.querySelectorAll("#pics .picbox");

picspan(0);
picspan(2);
function picspan(picnum) {
    $(picbox).eq(picnum).on("mouseenter", function () {
        $(this).parent().find("span").hide();
    })
    $(picbox).eq(picnum).on("mouseleave", function () {
        $(this).parent().find("span").show();
    })
}


//슬라이드
var $svgli = $(".numbox ul li");
var $txt = $(".txtbox li");
var $txtnum = $txt.length;
var slideIndex = 0;
var slideIndex2 = 0;
var len = $(".slidewrap li").length;
var listnum = $(".movebox").find("li").length;
let enableClick = true;
//console.log(len);

slideinit(".slidewrap");
slideinit(".slidewrap3");
$(".slidewrap2 li").last().prependTo(".slidewrap2");
function slideinit(el) {
    $(el).children("li").last().prependTo(el);
    $(el).css({
        width: 100 * len + "%",
        marginLeft: "-100%"
    });
    $(el).children("li").css({
        width: 100 / len + "%",
        float: "left"
    })
}


//main visual 슬라이드
$(".slidebox").find(".next").on("click", function (e) {
    e.preventDefault();
    if (enableClick) {
        enableClick = false;
        slideIndex += 1;
        if (slideIndex >= len) { slideIndex = 0; }
        next(".slidewrap");
        test(slideIndex);
    }
});
$(".slidebox").find(".prev").on("click", function (e) {
    e.preventDefault();
    if (enableClick) {
        enableClick = false;
        slideIndex -= 1;
    if (slideIndex < 0) { slideIndex = len - 1; }
        prev(".slidewrap");
        test(slideIndex);
    }
});


//section information 슬라이드 + 페이지숫자 카운트
$(".movebox").find(".next").on("click", function (e) {
    e.preventDefault();
    if (enableClick) {
        enableClick = false;
        slideIndex2 += 1;
        if (slideIndex2 >= listnum) { slideIndex2 = 0; }
        next(".slidewrap3");
        $(".movebox").children(".downbox").find(".page").text(slideIndex2 + 1);
    }
});
$(".movebox").find(".prev").on("click", function (e) {
    e.preventDefault();
    if (enableClick) {
        enableClick = false;
        slideIndex2 -= 1;
    if (slideIndex2 < 0) { slideIndex2 = listnum - 1; }
        prev(".slidewrap3");
        $(".movebox").children(".downbox").find(".page").text(slideIndex2 + 1);
    }
});

//자동롤링 슬라이드
timer = setInterval(move, 3000);

$("li").on("mouseenter", function () {
    clearInterval(timer);
});
$("li").on("mouseleave", function () {
    timer = setInterval(move, 3000);
});
function move(){
    $(".slidewrap2").animate({ marginLeft: "-200%" }, 1000, function () {
        $(".slidewrap2").css({ marginLeft: "-100%" });
        $(".slidewrap2").children("li").first().appendTo(".slidewrap2");
    });
}


function next(wrap) {
    $(wrap).animate({ marginLeft: "-200%" }, 1000, function () {
        $(wrap).css({ marginLeft: "-100%" });
        $(wrap).children("li").first().appendTo(wrap);
        enableClick = true;
    })
}
function prev(wrap) {
    
    $(wrap).animate({ marginLeft: "0%" }, 1000, function () {
        $(wrap).css({ marginLeft: "-100%" });
        $(wrap).children("li").last().prependTo(wrap);
        enableClick = true;
    })
}

function test(el) {
    $txt.removeClass("on");
    $txt.eq(el).addClass("on");
}



//scroll
const pos = [];
const boxs = $(".myScroll");

boxs.each(function(_, box){
    pos.push($(box).offset().top);
});
$(window).on("resize",function(){
    pos = [];
    boxs.each(function(_, box){
        pos.push($(box).offset().top);
    });
});
$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    console.log(scroll);
    

    if(scroll >= pos[1] ){
        $(".boxwrap").children("article").addClass("on");
    }else{
        $(".boxwrap").children("article").removeClass("on");

    }
    if(scroll >= pos[2] + 100){
        var current_scroll = scroll - pos[2] - 100 ;
        var move_scroll;
        //console.log(current_scroll);
        (current_scroll>=1035) ? move_scroll = 1035 : move_scroll = current_scroll;
        $(".head h2").css({top : move_scroll});
    }
    if(scroll >= pos[3] - 400){
        var current_scroll = scroll - pos[3] + 400 ; 
        var move_scroll;
        (current_scroll>=800) ? move_scroll = 800 : move_scroll = current_scroll;
        $(".line").css({width:move_scroll});
    }
    if(scroll >= pos[4]){
        var current_scroll = scroll - pos[4];
    }
    if(scroll >= pos[5] - 70){
        var current_scroll = scroll - pos[5] + 70 ;
        var move_scroll ;
        (current_scroll>=1540) ? move_scroll = 1540 : move_scroll = current_scroll;
        //console.log(current_scroll);
        $(".boxwrap").children(".movebox").css({top : -420 + move_scroll });
    }
    if(scroll >= pos[6]){
        var current_scroll = scroll - pos[6] ;
        //console.log(current_scroll);        
    }
    
});



// //tab
// const $tab = $("#tab"); 
// const $btns = $tab.find("dt a"); 
// const $boxs = $tab.find("dd"); 

// $btns.on("click focusin", function(e){
//     e.preventDefault(); 

//     let isOn = $(this).hasClass("on"); 
//     if(isOn) return; 

//     var target = $(this).attr("href"); 
//     $boxs.hide();  
//     $(target).show();

//     $btns.removeClass("on"); 
//     $(this).addClass("on"); 
// });  