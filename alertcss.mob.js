/**
*    jquery、zepto 手机弹窗插件
*    调用方法（中括号的为可选参数）：
*    $.alert(string[,function])
*    $.confirm(string[,function])
*    $.tips(msg)
*    $.load(msg), $.loaded() 加载中，与加载完成。msg
*    version:2016-9-23 14:48:31
*    http://alert.code.10176523.cn
*/
!function ($) {
  $._isalert = 0,
  $._isload  = 0,
  $._istip   = 0,
  $.alert=function(){
    if(arguments.length){
      $._isalert=1;
      return $.confirm.apply($,arguments);
    }
  },
  $.confirm=function(){
    var args=arguments,d;
    if(args.length){
      var fn=args[1],_click = function(e){typeof fn=='function'?(fn.call(d,e.data.r)!=!1&&d.close()):d.close()}
      d =$('<div class="alert_overlay"><div class="alert_msg"><div class="alert_content">'+args[0]+'</div><div class="alert_buttons"><button class="alert_btn alert_btn_ok">确定</button><button class="alert_btn alert_btn_cancel">取消</button></div></div></div>')
      
      //上色
      /*
      alert_overlay  背景遮罩
      alert_msg 消息框主体
      alert_content 内容容器
      alert_buttons 底部按钮容器
      alert_btn 两个按钮公用class
      alert_btn_ok 确定按钮
      alert_btn_cancel 取消按钮
      */
      if($._istip == 0){
        d.css({'display':'none', 'position':'fixed','width':'100%','height':'100%','top':'0','left':'0','z-index':'1000','background':'rgba(0,0,0,.1)'});
      }else{
        d.css({'display':'none'});
      }
      
      d.find('.alert_msg').css({'position':'absolute','width':'280px','left':'50%','margin-left':'-140px','top':'20%','z-index':'1000','border':'1px solid #ccc','border-radius':'4px','box-shadow':'0 0 15px rgba(0,0,0,.3)','background':'#fff','animation':' alertshow .2s ease'});
      
      d.find('.alert_content').css({'padding':'20px','font-size':'14px','text-align':'left'});
      d.find('.alert_buttons').css({'text-align':'center','border-top':'1px solid #ccc','-webkit-user-select':'none'});
      d.find('.alert_buttons .alert_btn').css({'display':'inline-block','width':'50%','border':'none','height':'45px','line-height':'45px','font-size':'14px','outline':'0','-webkit-appearance':'none','background':'#fff','-webkit-tap-highlight-color':'transparent','border-radius':'0 0 4px 4px'});
      d.find('.alert_buttons .alert_btn:only-child').css({'width':'100%'});
      d.find('.alert_buttons .alert_btn:first-child+.alert_btn').css({'border-left':'1px solid #ccc','border-radius':'0 0 4px 0'});
      
      $._isalert&&d.find('.alert_btn_cancel').css('display','none');
      $._isload &&d.find('.alert_btn_ok').css('display','none');
      d.ok =  function(t){d.find('.alert_btn_ok').text(t||'确定');return d}
      d.cancel=function(t){d.find('.alert_btn_cancel').text(t||'取消');return d}
      d.content=function(t){t&&d.find('.alert_content').html(t);return d}
      d.close=d.remove;
      
      d.on('contextmenu',!1)
      .on('click','.alert_btn_ok',{r:!0},_click)
      .on('click','.alert_btn_cancel',{r:!1},_click)
      .appendTo('body');
      
      d.fadeIn();
    }
    $._isalert=0;
    $._isload =0;
    $._istip  =0;
    return d;
  },
    
  $.tips=function(m, hideTime){
    $._istip =1;
    
    if(hideTime==undefined){
      hideTime = 2000;
    }
    
    hideTime+=500;
    
    setTimeout(function(){
      _remove();
    },hideTime);
    
    return $.load.apply($,arguments);
  },
  
  $.load=function(){
    //这里是直接隐藏
    $('.alert_overlay').remove();
    
    $._isalert=1;
    $._isload =1;
    
    if(arguments.length==0){
      var arguments=new Array("数据加载中，请等待...")
    }
    
    return $.confirm.apply($,arguments);
    //return $.alert.apply($,arguments);
  },
  
  $.loaded=function(){
    _remove();
  }
  
  function _remove(){
    $('.alert_overlay').fadeOut("fast", function (){
      $('.alert_overlay').remove();
    });
  }
  
  
}($);
