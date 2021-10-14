$("input[type=submit]").on("click", function(e){
    if(!isTxt("userid", 5)) e.preventDefault();
    if(!password("userpw1","userpw2")) e.preventDefault();
});

//아이디 인증
function isTxt(name, len){

    if(len === undefined) len=5;
    let txt = $("input[name="+name+"]").val();
    
    let ideng = /^[a-z0-9]+$/;

    if(txt.length>=len && ideng.test(txt)){
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
//비밀번호 인증
function password(name1, name2){
    let pw1 = $("input[name="+name1+"]").val();
    let pw2 = $("input[name="+name2+"]").val();

    let len = 8;
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let ast = /[~!@#$%^&*\[\]]/;

    if(pw1 === pw2 && pw1.length >= len && eng.test(pw1) && num.test(pw1) && ast.test(pw1)){
        $("input[name="+name1+"]").parent().find("p").remove();
        return true;

    }else{
        $("input[name="+name1+"]").parent().find("p").remove();
        $("input[name="+name1+"]").parent().append(
            "<p>영문 대소문자,숫자, 또는 특수문자 둥 1가지 이상 조합하여 8자이상 입력해주세요</p>"
        );
        return false;

    }
}