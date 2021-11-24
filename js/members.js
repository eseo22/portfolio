class MyForm {
    constructor(selector) {
        this.init(selector);
        this.bindingEvent();
    }

    init(selector) {
        this.form = $(selector);
        this.btnSubmit = this.form.find("input[type=submit]");
        this.btnButton = this.form.find("input[type=button]");
    }

    bindingEvent() {
        this.btnSubmit.on("click", (e) => {
            if (!this.isTxt("userid", 5)) e.preventDefault();
            if (!this.password("userpw1", "userpw2")) e.preventDefault();
            if (!this.isName("username")) e.preventDefault();
            if (!this.isEmail("email")) e.preventDefault();
            if (!this.isPhone("hpnum")) e.preventDefault();
            if (!this.isCheck("chk")) e.preventDefault();
            if (!this.isCheck("chk2")) e.preventDefault();
        });

        this.btnButton.on("click", (e) => {
            if (!this.isTxt("userid", 5)) e.preventDefault();
        });
    }




    //아이디 인증
    isTxt(name, len) {

        if (len === undefined) len = 5;
        let txt = $("input[name=" + name + "]").val();

        let ideng = /^[a-z0-9]+$/;

        if (txt.length >= len && ideng.test(txt)) {
            $("input[name=" + name + "]").parent().find("p").remove();
            return true;

        } else {
            $("input[name=" + name + "]").parent().find("p").remove();
            $("input[name=" + name + "]").parent().append(
                "<p>영문 소문자/숫자, " + len + "자 이상 입력해주세요.</p>"
            );
            return false;
        }
    }

    //비밀번호 인증
    password(name1, name2) {
        let pw1 = $("input[name=" + name1 + "]").val();
        let pw2 = $("input[name=" + name2 + "]").val();

        let len = 8;
        let eng = /[a-zA-Z]/;
        let num = /[0-9]/;
        let ast = /[~!@#$%^&*\[\]]/;

        if (pw1 === pw2 && pw1.length >= len && eng.test(pw1) && num.test(pw1) && ast.test(pw1)) {
            $("input[name=" + name1 + "]").parent().find("p").remove();
            return true;

        } else {
            $("input[name=" + name1 + "]").parent().find("p").remove();
            $("input[name=" + name1 + "]").parent().append(
                "<p>영문 대소문자,숫자, 또는 특수문자 중 1가지 이상 조합하여 8자이상 입력해주세요</p>"
            );
            return false;

        }
    }

    //이름 인증
    isName(name) {
        let txt = $("input[name=" + name + "]").val();
        let han = /^[가-힣]+$/;
        let len = 2;
        if (txt.length >= len && han.test(txt)) {
            $("input[name=" + name + "]").parent().find("p").remove();
            return true;
        } else {
            $("input[name=" + name + "]").parent().find("p").remove();
            $("input[name=" + name + "]").parent().append(
                "<p>한글로 " + len + "자 이상 입력해주세요</p>"
            );
            return false;
        }
    }

    //이메일 인증
    isEmail(name) {
        let txt = $("[name=" + name + "]").val();

        if (/@/.test(txt)) {
            $("[name=" + name + "]").parent().find("p").remove();
            return true;
        } else {
            $("[name=" + name + "]").parent().find("p").remove();
            $("[name=" + name + "]").parent().append(
                "<p>@를 포함한 전체 메일주소를 입력하세요.</p>"
            );
            return false;
        }
    }

    //휴대전화 인증

    isPhone(name) {
        let hpNum = $("[name=" + name + "]").val();
        let len = 11;
        let num = /[0-9]/gi;

        if (hpNum.length >= len && num.test(hpNum)) {
            $("input[name=" + name + "]").parent().find("p").remove();
            return true;

        } else {
            $("input[name=" + name + "]").parent().find("p").remove();
            $("input[name=" + name + "]").parent().append(
                "<p>전화번호 입력시 -를 제외하고 입력해주세요"
            );
            return false;
        }
    }

    //약관동의 인증
    isCheck(name) {
        let isCheck = $("input[name=" + name + "]").is(":checked");
        if (isCheck) {
            $("input[name=" + name + "]").parent().find("p").remove();
            return true;
        } else {
            $("input[name=" + name + "]").parent().find("p").remove();
            $("input[name=" + name + "]").parent().append(
                "<p>필수 동의사항을 체크해주세요</p>"
            );
            return false;
        }
    }
}

