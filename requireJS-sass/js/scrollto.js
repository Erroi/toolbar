define(['jquery'],function($){
	function ScrollTo(opts){
		//给 ScrollTo 添加属性	
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);  //2 将用户传递的参数opts 覆盖默认参数ScrollTo.DEFAULTS，生成一个新的对象{}，存入this.opts中
		this.$el = $('html,body');  //将取得对象 缓存起来
	}

	//给 ScrollTo 添加方法
	ScrollTo.prototype.move = function(){
		var opts = this.opts;   //通过局部变量 将 this.opts 缓存起来 也可提高性能


		if($(window).scrollTop() != this.opts.dest){   //判断不在目的地
			if (!this.$el.is(':animated')) {      //判断不在运动的时候执行
				this.$el.animate({
					scrollTop:opts.dest
				}, opts.speed);
			}
		}
		
	};
	ScrollTo.prototype.go = function(){
		if($(window).scrollTop() != this.opts.dest){
			this.$el.scrollTop(this.opts.dest);
		}
	};

	ScrollTo.DEFAULTS = {     //1 设置参数默认值 以防当用户不传参数时使用默认值
		dest:0,
		speed:8000
	};

    //3 将定义好的模块返回出来 以便外部调用
	return {                     //返回定义好的对象 函数
		ScrollTo: ScrollTo 
	}
});