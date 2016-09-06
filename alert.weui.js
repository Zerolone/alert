/**
*    jquery、zepto 手机weui弹窗插件
*    调用方法（中括号的为可选参数）：
*    $.alert([title,]msg[,function])
*    $.confirm([title,]msg[,function])
*    version:2016-09-06
*/
!function ($) {
	$._isalert=0,
	$.alert=function(){
		if(arguments.length){
			$._isalert=1;
			return $.confirm.apply($,arguments);
		}
	},
	$.confirm=function(title,msg,callback){
		if(title){
			if(msg==null||typeof msg =='function'){callback =msg;msg = title||'';title = '信息提示';}
			var d = $('<div class="weui_dialog_confirm"><div class="weui_mask"></div><div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">'+title+'</strong></div><div class="weui_dialog_bd">'+msg+'</div><div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog default" data-r="0">取消</a><a href="javascript:;" class="weui_btn_dialog primary" data-r="1">确定</a></div></div></div>')
			$._isalert&&d.find('.weui_btn_dialog:first-child').remove();
			d.on('contextmenu',!1)
			.on('click','.weui_btn_dialog',function(){
				typeof callback=='function'&& callback.call(d,$(this).data('r'))
				d.remove();
			}).appendTo('body');
		}
		$._isalert=0;
	}
}($);
