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

* 剩余时间的实现
    * 使用ontimeupdate来实现

* 当音乐播放结束之后，自动加载并播放下一首音乐
    * Audio对象的ended事件

* 切换频道相当于一个简单的轮播

* 音量调整

* 进度条的实现
    * 使用ontimeupdate来实现：当歌曲播放时，不断修改歌曲进度条的长度

* 点击进度条，跳转到指定的声音节点
    * 获取进度条的位置坐标，主要是水平方向上的
    * 获取进度条的长度
    * 当鼠标点击的进度条的时候，获取鼠标点击时的位置坐标，主要也是水平方向的
    * (鼠标点击水平位置坐标 - 进度条起点水平位置坐标)/进度条的长度 --> 歌曲播放时间占总时长的比例 --> 动态进度条的长度

* 歌词的实现
    * 歌词是按照`\n`来划分的且每一段歌词是以时间开头的，所以可以以`\n`将返回的歌词进行分割，存放在一个数组中
    * 将歌词按照minute second存放在一个二维数组中：几分几秒，当时间改变时，可以直接在数组的对应位置找到此时的歌词(方便查找)
    
* 喜欢的实现：结合本地存储来实现
    * 点击喜欢时，喜欢按钮变成红色
    * 把当前歌曲url添加到localstorage中
    * 当channel切换到我喜欢的歌曲时，向getMusic中传入localStorage中的
    * 当点击下一首按钮时，进行判断(当前channel是否是我喜欢的音乐)，如果是则从localStorage中获取下一首音乐
