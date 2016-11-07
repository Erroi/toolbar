# toolbar
sass and requireJS application;
this is an applay of scss and requireJs maked an toolbar of back top;
is so simple and basis of that;

网页中为调用各个模块，在页面中加入一大堆script标签，使得网页臃肿，产生大量的http请求，拖慢速度
模块管理器 可以轻松管理各种 javascript脚本的依赖关系，自动加载各个模块。
requireJs 遵守AMD规范
javascript模块规范：  commonJS AMD
                 commonJS 在浏览器中加载模块 是同步加载 ；
                 AMD 异步模块定义，采用异步方式加载模块，require([module], callback);
                      所有依赖这个模块的语句 都定义在后面的回调函数内，等加载完成后，才执行。
requireJs 
1 加载入口文件：<script src="js/require.js" data-main="js/main"></script> 
            data-main 指定的是入口文件，在require.js 加载完后，会第一个自动加载main.js
2 自定义加载路径： 在主模块main.js的头部用require.config()自定义加载路径。
               每个js文件相当于一个单独的模块
3 用define() 定义模块  模块名就是文件名，以供需要用到的模块直接调用
             好处：模块定义了一个作用域来避免全局名称空间污染。可以明显的列出其依赖关系，并以函数参数的形式将这些依赖注入。


SCSS
是在css的基础上将代码抽象简单，更有逻辑，可以给样式定义变量，嵌套等功能。
如：可以将某个主色设置为变量，并在整个项目中重复使用他们。复杂一点的，你可以通过SASS的mixins生成一个网格的布局功能，然后在对应的类名通过include来调用，生成所需要的网格布局。另外还可以通过extend来调用你的前面生成的类名。要知道，所有这些都是与函数编程语言很类似。主要目的就是让你写CSS时不在重复。
1 嵌套
ul{
  li{
       a{}
      }
};

2 $变量
$toolbar-size : 52px;

 3 @mixin 函数名(参数)
 
@mixin opacity($opacity){
       opacity:$opacity;
       filter:alpha(opacity=$opacity*100) 
}

 4 @include 函数    调用
@include opacity(0.1)

5 @import "xxx"   引入xxx.scss

@import "toolbar"

6 @extend 继承

.box{
    ....
    ....
}
.box2{
     @extend  .box;
}

 

 

 

 


