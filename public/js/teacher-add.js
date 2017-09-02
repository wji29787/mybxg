define(['jquery','template','util','datepicker','language'],function ($,template,util) {
    util.setMenu('/teacher/list');
    //获取编辑讲师的id
    var tcId=util.qs('tc_id');
    // console.log(tcId);

    if(tcId){
        //编辑讲师
        //根据Id查询对应的讲师详细信息
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success:function (data) {
                // console.log(data);
                data.result.operate='讲师编辑';
                var html=template('templateTpl',data.result);
                $('#teacherInfo').html(html);
            //    绑定编辑的提交事件
                submitForm('/api/teacher/update');

            }
        });
    }else {
    //    添加讲师

        var html=template('templateTpl',{operate:'讲师添加',tc_gender:0});
        $('#teacherInfo').html(html);
        //    绑定编辑的添加事件
        submitForm('/api/teacher/add');
    }
//  实现表单提交功能
    function submitForm(url) {
        $('#formBtn').click(function () {
            $.ajax({
                type:'post',
                url:url,
                data:$('#formId').serialize(),
                dataType:'json',
                success:function (data) {
                   if(data.code==200){
                       location.href='/teacher/list';
                   }
                }
            });
        });

    }
});