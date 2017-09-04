require.config({
    baseUrl:'/public/assets',
    paths:{
       jquery:'jquery/jquery.min',
       cookie:'jquery-cookie/jquery.cookie',
       template:'artTemplate/art-template',
       bootstrap:'bootstrap/js/bootstrap.min',
       datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
       language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
       validate:'validate/jquery-validate.min',
       jqueryForm:'jquery-form/jquery.form',
        uploadify:'uploadify/jquery.uploadify.min',
       login:'../js/login',
       settings:'../js/settings',
       common:'../js/common',
       util:'../js/util',
       teacheradd:'../js/teacher-add',
       teacherlist:'../js/teacher-list',
       index:'../js/index',
       region:'jquery-region/jquery.region',
       ckeditor:'ckeditor/ckeditor'
    },
    shim :{
       bootstrap:{
           deps:['jquery']
       },
        language:{
           deps:['jquery','datepicker']
        },
        validate:{
           deps:['jquery']
        },
        uploadify:{
           deps:['jquery']
        },
        ckeditor:{
           exports:'CKEDITOR'
        }
    }
});