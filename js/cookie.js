//쿠키팝업

$("#popup .close").on("click", function(e){
    e.preventDefault();

    var checked = $("#popup").find("input[type=checkbox]").is(":checked");
    if(checked) setCookie();
    $("#popup").hide();
});

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