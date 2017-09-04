define(['jquery','template','util','ckeditor','datepicker','language','uploadify','region','validate','jqueryForm'],function ($,template,util,CKEDITOR) {
     //设置导航菜单选中
     util.setMenu('/main/index');
//     调用后台借口获取所有的信息
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function (data) {
            // console.log(data);
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
        //    处理头像上传
            $('#upfile').uploadify({
                width:120,
                height:120,
                buttonText:'',
                itemTemplate:'<span></span>',
                fileObjName:'tc_avatar',
                swf:'/public/assets/uploadify/uploadify.swf',
                uploader:'/api/uploader/avatar',
                onUploadSuccess:function (f,data) {
                    var data=JSON.parse(data);
                    // console.log(data);
                   $('.preview img').attr('src',data.result.path);
                    console.log(data.result.path);
                }
            })
        //    省市县三级联动
            $('#pcd').region({
                url:'/public/assets/jquery-region/region.json'
            });
        //处理富文本
            CKEDITOR.replace('editor',{
                toolbarGroups :[
                { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
                { name: 'links' },
                { name: 'insert' },
                { name: 'forms' },
                { name: 'tools' }

            ]
            });
        //    处理表单提交
            $('#settingForm').validate({
                sendForm:false,
                valid:function () {
                //    同步富文本信息到textarea中
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                    }
                //    获取tc_hometown值
                    var p=$('#p').find('option:selected').text();
                    var c=$('#c').find('option:selected').text();
                    var d=$('#d').find('option:selected').text();
                    var hometown=p + '|' + c + '|' + d ;
                //    验证通过，提交表单
                    $(this).ajaxSubmit({
                        type:'post',
                        url:'/api/teacher/modify',
                        data:{
                            tc_hometown:hometown
                        },
                        dataType:'json',
                        success:function (data) {
                            // console.log(data);
                            if(data.code==200){
                                location.reload();
                            }
                        }
                    })
                }
            });
        }
    });
});