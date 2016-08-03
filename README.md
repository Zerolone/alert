##alert
一款超小体积的PC、手机jQuery(Zepto)弹窗插件，可自己修改CSS定制自己的弹窗皮肤

[在线演示](https://ydq.github.io/alert/demo.html)，可自定义皮肤。

---

###插件API

|版本|API|说明|
|---|---|---|
|PC/mob|$.alert(msg[,fn])|弹出一个仅包含确定按钮的对话框，`msg`为内容，`fn(可空)`为回调函数|
|PC/mob|$.confirm(msg[,fn])|弹出一个确定/取消按钮的对话框，`msg`为内容，`fn(可空)`为回调函数|
|PC|$.tips(msg[,time])|`屏幕右上角`弹出一个自动消失的悬浮提示，`time(可空)`为关闭时间，默认为2000（2s）|
|mob|$.tips(msg)|`屏幕中间`弹出一个自动消失的悬浮提示|

####说明：
- *`confirm`的回调函数默认有一个参数，参数值为`boolean`，当点击`确定`时参数为`ture`，当点击`取消`时参数为`false`*
- *`alert`和`confirm`的回调函数如果`return false`，则可以`阻止对话框关闭`，在某些情况下比较有用*
- *不管是`alert`、`confirm`还是`tips`，参数中的`msg`都`必须设置`，否则没有任何效果*
- *`alert`和`confirm`中的回调函数中的`this`对象指向当前整个对话框的`jQuery`/`Zepto` 的包装对象，例如在回调函数中使用：`this.find('.alert_content').html('这样可以直接修改对话框中间的内容')`，再配合`return false`可以自己做更丰富的消息展示*


###使用demo

```javascript
$.alert('消息弹窗')
$.alert('消息弹窗',function(){
  //点击确定之后执行的回调函数
  //return false 可以阻止对话框关闭
  //this 指向整个弹窗框的jquery包裹对象，this.remove()可以直接删除对话框，this.find('.alert_content').html('这样可以直接修改对话框中间的内容')
})
$.confirm('消息弹窗')
$.confirm('消息弹窗',function(e){
  //点击确定或取消后的回调函数，点击确定e = true，点击取消e = false
  //return false 可以阻止对话框关闭
  //this 指向整个弹窗框的jquery包裹对象，this.remove()可以直接删除对话框，this.find('.alert_content').html('这样可以直接修改对话框中间的内容')
})
$.tips('弹出一条2秒后自动消失的悬浮提示');
$.tips('弹出一条5秒后自动消失的悬浮提示，仅限PC版本',5000);
```

###兼容性
pc版本兼容IE8以上的版本，因为css中使用了rgba，所以不支持IE8，如需支持IE8请自行修改css文件
mob版本未详细测试，理论上现在的手机都支持
