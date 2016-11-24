//验证
$(function() {


    $("#waitting").ajaxStart(function() {
        $(this).show(500);
    });

    $("#waitting").ajaxStop(function() {
        $(this).hide(500);
    });

    //不能为空
    var txtTitle = $("#txtTitle");
    var txtName = $("#txtName");
    var txtContact = $("#txtContact");
    var txtContent = $("#txtContent");

    $("#btnSubmit").click(function() {

        if (txtTitle.val() == "") {
            alert("留言标题不能为空");
            txtTitle.focus();
            return;
        }

        if (txtName.val() == "") {
            alert("姓名不能为空");
            txtName.focus();
            return;
        }

        if (txtContact.val() == "") {
            alert("联系方式不能为空");
            txtContact.focus();
            return;
        }

        //格式不能错误
        if (!/^[\u4e00-\u9fa5\w\d,，。？?]{2,30}$/.test(txtTitle.val())) {
            alert("留言标题格式错误，只能是2-30个中英文字符");
            txtTitle.focus();
            return;
        }

        if (!/^[\u4e00-\u9fa5\w]{2,10}$/.test(txtName.val())) {
            alert("姓名格式错误，只能是2-10个中英文字符");
            txtName.focus();
            return;
        }

        if (!/^[\u4e00-\u9fa5\w\d,，#\-]{3,50}$/.test(txtContact.val())) {
            alert("联系方式格式错误，只能是3-50个中英文字符");
            txtContact.focus();
            return;
        }

        if (!/^[^><\']{0,1000}$/.test(txtContent.val())) {
            alert("留言内容格式错误，只能是0-1000个中英文字符");
            txtContent.focus();
            return;
        }

        $.ajax({
            url: '../Common/MsgHandler.ashx',
            type: 'post',
            data: { "Title": $("#txtTitle").val(), "Name": $("#txtName").val(), "Content": $("#txtContent").val(), "Contact": $("#txtContact").val() },
            success: function(d) {
                if (d == "1") {
                    alert("留言成功！");
                    $("#txtTitle").val("");
                    $("#txtName").val("");
                    $("#txtContent").val("");
                    $("#txtContact").val("");
                }
                else if (d == "2") {
                    alert("留言失败！");
                }
                else {
                    alert(d);
                }
            },
            error: function(xhr) {
                alert("留言发生了错误。");
            }
        });

    });

});