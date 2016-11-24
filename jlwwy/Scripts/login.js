function $(val) {
    return document.getElementById(val);
}

function validate() {
        var txtAdminName = $("txtAdminName");
        var txtAdminPass = $("txtAdminPass");
        var txtValidate = $("txtValidate");
        
        if (txtAdminName.value == "") {
            alert("用户名不能为空！");
            return false;
        }
        else if (txtAdminPass.value == "") {
            alert("密码不能为空！");
            return false;
        }
        else if (txtValidate.value == "") {
            alert("验证码不能为空！");
            return false;
        }
        else if (!(/^\w{5,16}$/.test(txtAdminName.value))) {
            alert("用户名格式不正确\n\n请输入5-16位的字母，数字或下划线！");
            return false;
        }
        else if (!(/^\w{6,16}$/.test(txtAdminPass.value))) {
            alert("密码格式不正确\n\n请输入6-16位的字母，数字或下划线！");
            return false;
        }
        else if (!(/^\w{4}$/.test(txtValidate.value))) {
            alert("验证码格式不正确\n\n请输入4位的字母或数字！");
            return false;
        }
        return true;
    }

    window.onload = function() {
        document.body.style.backgroundColor = "#9cf";
        $("form1").onsubmit = function() {
            return validate();
        }
    }