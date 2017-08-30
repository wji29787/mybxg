define(['jquery','template','bootstrap'],function ($,template) {
    //请求后台借口获取列表数据
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function (data) {
        //    解析数据并渲染页面
        var html=template('teacherTpl',{list:data.result});
        $('#teacherInfo').html(html);
        //绑定预览的点击事件
        $('.preview').click(function () {
            //通过后台借口获取数据
            var tcId=$(this).closest('td').attr('data-tcid');//找到离他最近的父元素
            // console.log(tcId);
            $.ajax({
               type:'get',
                url:'/api/teacher/view',
                data:{
                   tc_id:tcId
                },
                dataType:'json',
                success:function (data) {
                   console.log(data);
                   var html=template('modalTpl',data.result);
                    // console.log(html);
                    $('#modalInfo').html(html);
                //   显示弹窗
                    $('#teacherModal').modal();
                }
            })
        });
        $('.eod').click(function () {
            var td=$(this).closest('td');
            var tcId=td.attr('data-tcid');
            var tcStatus=td.attr('data-status');
            var that=this;
            $.ajax({
               type:'post',
               url:'/api/teacher/handle',
                data:{tc_id:tcId,tc_status:tcStatus},
                dataType:'json',
                success:function (data) {
                    console.log(data);
                    td.attr('data-status',data.result.tc_status);
                    if(data.result.tc_status==0){
                        $(that).html('注销');
                    }else {
                        $(that).html('启用');
                    }
                }
            });
        });
        }
    });
});