<?php
//后端路由（分发URL请球）
//var_dump($_SERVER);
//判断数组中是否包含指定属性  array_key_exists('PATH_INFO',$_SERVER);
/*
main/index
main/login
main/list
*/

$dir='main';//默认文件夹
$filename='login';//默认文件名称
//判断路径是否存在
if(array_key_exists('PATH_INFO',$_SERVER)){
 // 获取URL中的路径 /main/index
      $path = $_SERVER['PATH_INFO'];
// 去掉路径中的第一个斜杠
      $str=substr($path,1);// main/index
// 分割字符串（和js中split类似）
//按照斜杠分割目录名称和文件名称
       $arr = explode('/',$str);
       if(count($arr)==2){
            $dir=$arr[0];//覆盖目录名称
            $filename=$arr[1];//覆盖文件名臣
       }
         else{
            //如果不是两层路径就跳转到登录页
            $filename='login';
       }

}
 include('./views/'.$dir.'/'.$filename.'.html');
  // 路径的格式
  //  /main/index
  //  /main/login
  //  /teacher/list
  //  /teacher/add
  // 在当前页码嵌入一个子页面


//include('./views/main/index.html');

?>