##alert
一款超小体积的PC、手机jQuery(Zepto)弹窗插件，可自己修改CSS定制自己的弹窗皮肤

[在线演示](http://alert.code.10176523.cn)，可自定义皮肤。

---

###使用demo

```javascript
$.alert('消息弹窗')
$.alert('消息弹窗',function(){
  //点击确定之后执行的回调函数
  //return false 可以阻止对话框关闭
  //this 指向弹窗对象
})
$.confirm('消息弹窗')
$.confirm('消息弹窗',function(e){
  //点击确定或取消后的回调函数，点击确定e = true，点击取消e = false
  //return false 可以阻止对话框关闭
  //this 指向弹窗对象
})
$.tips('弹出一条2秒后自动消失的悬浮提示');
$.load('加载中提示');
$.load();   //支持默认的提示语句
$.loaded(); //加载完成后调用
```

###插件API

|版本|API|说明|
|---|---|---|
|mob|$.alert(msg[,fn])|弹出一个仅包含确定按钮的对话框，`msg`为内容，`fn(可空)`为回调函数|
|mob|$.confirm(msg[,fn])|弹出一个确定/取消按钮的对话框，`msg`为内容，`fn(可空)`为回调函数|
|mob|$.tips(msg)|`屏幕中间`弹出一个自动消失的悬浮提示|
|mob|$.load(msg)|`屏幕中间`弹出一个加载中的对话框|


###插件方法
```javascript
var dialog = $.alert('下面方法API中的dialog对象是这么获得的')
$.confirm('回调中的this也是dialog对象',function(e){
  //这里的this也是dialog对象
  e||this.content('这样可以改变中间的内容')
  return e;
})
```

|版本|方法|说明|
|---|---|---|
|mob|dialog.content(str)|修改对话框对象的内容|
|mob|dialog.ok(str)|修改确定按钮的文本|
|mob|dialog.cancel(str)|修改取消按钮的文本|
|mob|dialog.close()|关闭并销毁对话框|

####说明：
- *`confirm`的回调函数默认有一个参数，参数值为`boolean`，当点击`确定`时参数为`ture`，当点击`取消`时参数为`false`*
- *`alert`和`confirm`的回调函数如果`return false`，则可以`阻止对话框关闭`，在某些情况下比较有用*
- *不管是`alert`、`confirm`还是`tips`，参数中的`msg`都`必须设置`，否则没有任何效果*
- *`alert`和`confirm`中的回调函数中的`this`对象指向当前对话框对象，例如在回调函数中使用：`this.content('这样可以直接修改对话框中间的内容')`，再配合`return false`可以自己做更丰富的消息展示*

###弹窗出现后的Dom结构如下：
####alert和confirm、load的弹窗结构
```html
<div class="alert_overlay">
  <div class="alert_msg">
    <div class="alert_content">你的内容，可以是HTML</div>
    <div class="alert_buttons">
      <button class="alert_btn alert_btn_ok">确定</button>
      <button class="alert_btn alert_btn_cancel">取消</button>
    </div>
  </div>
</div>
```
####tips结构(不允许多次弹窗)
```html
<div class="alert_tips">
  <div>tips</div>
</div>
```

###兼容性
- mob版本未详细测试，理论ios和4.4以上的android手机都支持，关于微信内置浏览器，动不动就抽风，之前测试可以，中间有一段时间测试突然不行了，必须给css中一些css3的属性设置`-webkit-`前缀，也许以后又会好起来，所以默认没加上，如希望稳定兼容请自行在所有css3属性和动画前面添加前缀
