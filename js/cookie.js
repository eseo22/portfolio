//쿠키팝업
$("#popup .wrap label").on("click", function(){
    setCookie();
    $("#popup").hide();
})
$("#popup a").on("click", function(){
    $("#popup").hide();

})


function setCookie(){
    var today = new Date(); 
    var date = today.getDate();
    today.setDate(date + 1);
    //console.log(today);
    var duedate = today.toGMTString();
    //console.log(duedate);

    document.cookie = "popup=done; expires="+duedate;

}

var isCookie = document.cookie.indexOf("popup=done");
console.log(isCookie);

if(isCookie == -1){
    $("#popup").show();
    console.log("쿠키없음");
}else{
    
    $("#popup").hide();
    console.log("쿠키있음");
}