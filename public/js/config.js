require.config({
    baseUrl:'/public/assets',
    paths:{
       jquery:'jquery/jquery.min',
       cookie:'jquery-cookie/jquery.cookie',
       template:'artTemplate/art-template',
       bootstrap:'bootstrap/js/bootstrap.min',
       login:'../js/login',
       common:'../js/common',
       teachterlist:'../js/teachter-list'
    },
    shim :{
       bootstrap:{
           deps:['jquery']
       }
    }
});