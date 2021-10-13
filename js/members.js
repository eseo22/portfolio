$("input[type=submit]").on("click", function(e){
    if(!isTxt("userid", 5)) e.preventDefault();
    
});


function isTxt(name, len){

    if(len === undefined) len=5;
    let txt = $("input[name="+name+"]").val();
    
    let eng = /^[a-z0-9]+$/;

    if(txt.length>=len && eng.test(txt)){
        $("input[name="+name+"]").parent().find("p").remove();
        return true;
    
    }else{
        $("input[name="+name+"]").parent().find("p").remove();
        $("input[name="+name+"]").parent().append(
            "<p>영문 소문자/숫자, "+len+"자 이상 입력해주세요.</p>"
        );
        return false;
    }
}
