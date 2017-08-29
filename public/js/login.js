define(['jquery','cookie'],function ($) {
    $('#loginBtn').click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginForm').serialize(),
            dataType:'json',
            success:function (data) {
                // 存储用户信息到cookie
                if(data.code==200){
                    //登录成功
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});

                    location.href='/main/index';
                }else{
                    alert('用户名或密码错误');
                }
            }
        });
        return false;
    });
})