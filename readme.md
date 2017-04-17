当页面打开的时候，应该已经得到了数据，但是没有播放，当用户点击播放键时才开始播放
* 页面打开，获取数据:

```javascript
$.ajax({
    method: "get",
    url: ""
}).done(function(data){
    console.log(JSON.parse(data).song[0].url)
})
```

* 获取的数据是JSON格式的，将JSON格式数据转换为Obejct

```javascript
JSON.parse(data)
```

* 文本超出自动显示为省略号： 

```
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

* 切换频道相当于一个简单的轮播

* 音量调整

* 进度条的实现

* 剩余时间的实现

* 当音乐播放结束之后，自动加载并播放下一首音乐

* 喜欢的实现：结合本地存储来实现，

* 歌词的实现

