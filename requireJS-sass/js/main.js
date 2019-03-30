requirejs.config({
	paths:{
		jquery:'jquery-2.0.3.min'
	}
});

requirejs(['jquery','scrollto'],function($,scrollto){
    //实例化一个ScrollTo函数 通过构造函数的形式
    var scroll = new scrollto.ScrollTo({          // 调用scrollto模块的ScrollTo函数
    	dest:500,
    	speed:800
    })


	// $("#back-top").on('click',move);
	$("#back-top").on('click',$.proxy(scroll.move,scroll));  //调用scroll.go方法 $.proxy(方法,this的指向 实例对象)强制将this指向scroll

	$(window).on('scroll',function(){        //事件监听
		checkPosition( $(window).height() );
	}); 

	checkPosition( $(window).height() );


    //将滚动条移动到指定位置 功能封装成一个模块scrollto 便于以后调用
	// function move(){
	// 	$('html,body').animate({     //兼容浏览器 滚动条的对象有的是 html或body
	// 		scrollTop:0
	// 	},8000);
	// }

	// function go(){
	// 	$('html,body').scrollTop(0);
	// }

	function checkPosition(pos){      //显示隐藏 back-top按钮
		if ($(window).scrollTop() > pos) {
			$('#back-top').fadeIn();
		}else{
			$('#back-top').fadeOut();
		}
	}
});