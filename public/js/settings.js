define(['jquery','template','util','ckeditor','datepicker','language','uploadify','region'],function ($,template,util,CKEDITOR) {
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
            })
        }
    });
});