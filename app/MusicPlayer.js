import $ from 'jquery';
function MusicPlayer(playerNode) {
    var root = $(playerNode);

    this.player = root;
    // 静音按钮 
    this.btn_quiet = root.find('.title-bar .voice');
    // 音量调节器 title-bar
    this.volume_block = root.find('.title-bar .volume');
    // 包裹channel的容器 
    this.channel_item_ct = root.find('.channel .channel-ct ul');
    // 上一个channel按钮
    this.btn_pre_channel = root.find('.channel .pre-channel');
    // 下一个channel按钮
    this.btn_next_channel = root.find('.channel .next-channel');

    // 专辑图片 img
    this.picture = root.find('.music-panel .left-part img');
    // 歌手名称 p
    this.singer = root.find('.music-panel .right-part .singer');
    // 音乐名称 p
    this.musicName = root.find('.music-panel .right-part .music-name');
    // 持续时间 span
    this.lastTime = root.find('.music-panel .right-part .music-time');
    // 喜欢 span
    this.btn_like = root.find('.music-panel .right-part .operate .heart');
    // 播放 span
    this.btn_play = root.find('.music-panel .right-part .operate .play');
    // 下一首 span
    this.btn_skip_forward = root.find('.music-panel .right-part .operate .skip-forward')
    // 进度条容器
    this.process_bar = root.find('.music-panel .right-part .operate .process');
    // 进度条
    this.process_now_bar = root.find('.music-panel .right-part .operate .process .now');
    // 歌词控件
    this.lyric_ct = root.find('.music-lyric');
    //console.log(this.lastTime.text()+'aaa');
    this.music = new Audio();
    this.volume = 0.5;
    // 音乐风格相关
    this.channel = "public_fengge_liuxing";
    this.channelIndex = 1;
    // 音乐歌词
    this.lyrics = [];

    this.playFlag = false;
    this.clickFlag = false;
    this.init();
}
MusicPlayer.prototype = {
    constructor: MusicPlayer,
    init: function () {
        this.bind();
        this.getMusic(this.channel);
    },
    bind: function(){
        // 给播放按钮绑定点击事件
        this.clickPlay = this.clickPlay.bind(this);
        this.btn_play.click(this.clickPlay);
        // 给下一首按钮绑定点击事件
        this.clickNextMusic = this.clickNextMusic.bind(this);
        this.btn_skip_forward.click(this.clickNextMusic);
        // 关闭音量
        this.clickCloseVoice = this.clickCloseVoice.bind(this);
        this.btn_quiet.click(this.clickCloseVoice);
        // 调节音量
        this.clickVolumeBlock = this.clickVolumeBlock.bind(this);
        this.volume_block.click(this.clickVolumeBlock);
        // 给 Audio对象添加 事件监听器
        this.musicPlaying = this.musicPlaying.bind(this);
        this.music.addEventListener("playing", this.musicPlaying);

        this.getMusic = this.getMusic.bind(this);
        this.music.addEventListener("ended", this.getMusic);
        // 点击 channel-item切换channel
        this.clickChannelItem = this.clickChannelItem.bind(this);
        this.channel_item_ct.on('click', this.clickChannelItem);
        // 点击下一个channel
        this.clickNextChannel = this.clickNextChannel.bind(this);
        this.btn_next_channel.on('click', this.clickNextChannel);
        // 点击上一个channel
        this.clickPreChannel = this.clickPreChannel.bind(this);
        this.btn_pre_channel.on("click", this.clickPreChannel);

        //点击进度条
        this.clickProcessBar = this.clickProcessBar.bind(this);
        this.process_bar.on('click', this.clickProcessBar);

        //歌词的实现
        this.getLyric = this.getLyric.bind(this);

    },
    // 播放或暂停歌曲
    clickPlay: function(event){
        if(!this.playFlag){
            this.music.play();
            this.btn_play.removeClass("icon-play");
            this.btn_play.addClass("icon-pause")
            this.playFlag = !this.playFlag;
        }else {
            this.music.pause();
            this.btn_play.removeClass("icon-pause");
            this.btn_play.addClass("icon-play")
            this.playFlag = !this.playFlag;
        }
        console.log(this.lyrics);
    },
    // 下一首歌曲
    clickNextMusic: function(event){
        this.getMusic(this.channel);
    },
    // 静音
    clickCloseVoice: function(event){
        // console.log(this.music.volume);
        this.music.volume = this.music.volume===0?this.volume:0;
    },
    // 调节音量
    clickVolumeBlock: function(event){
        // 将所有音量li中的active去掉
        let volume_block_index = this.volume_block.children('li').index(event.target);
        if(volume_block_index<0){
            return;
        }
        this.volume_block.children().removeClass("active");
        // 获取当前点击的是第几个个音量按键
        for(let i=volume_block_index; i<this.volume_block.children('li').length;i++){
            this.volume_block.children('li').eq(i).addClass("active");
        }
        this.volume = (this.volume_block.children('li').length-volume_block_index)/this.volume_block.children('li').length;
        this.music.volume = this.volume;
    },
    //
    musicPlaying(event){
        // 更换音乐剩余时间
        if(this.music.currentTime==0){
            let minute = Math.floor(this.music.duration/60);
            let second = Math.floor(this.music.duration%60);
            if(second<10){
                this.lastTime.text("0" + minute + ':0' + second);
            }else{
                this.lastTime.text("0" + minute + ':' + second);
            }
            
        }
        let time = this.music.duration;
        let context = this;

        this.music.ontimeupdate = function(){
            let time_percent = 100*context.music.currentTime/time + '%';
            let minute = Math.floor(context.music.currentTime/60);
            let second = Math.floor(context.music.currentTime)%60;
            let rest_minute = Math.floor((time-context.music.currentTime)/60);
            let test_second = Math.floor((time-context.music.currentTime)%60);
            if(test_second<10){
                context.lastTime.text("-0" + rest_minute + ':0' + test_second);
            }else{
                context.lastTime.text("-0" + rest_minute + ':' + test_second);
            }
            // 修改进度条
            context.process_now_bar.css('width', time_percent);
            // 添加歌词功能
            let lyric = context.lyrics[minute][second];
            if(lyric){
                context.lyric_ct.text(lyric)
            }
            
        }
        
    },
    // 切换频道
    clickChannelItem(event){
        // 获取点击的li的content
        let targetChannel = $(event.target);
        //console.log(targetChannel.text());
        let channelArray = this.channel_item_ct.find("li");
        let channelIndex = channelArray.index(targetChannel.parent());
        //获取当前被点击的li是channel-ct中的第几个（从0开始）
        console.log(channelArray.index(targetChannel.parent()))
        //注意：显示的音乐类型名称和url中的音乐类型参数名称是不同
        this.channel = targetChannel.parent().attr("data-channel-id");
        // 让ul中所有的li都去掉active class
        channelArray.removeClass("active");
        // 给选中的li添加active属性
        targetChannel.parent().addClass("active");
        // 使ul偏移一定距离，使得选中的item正好处于中间位置
        this.channel_item_ct.css("margin-left", (90-channelIndex*90)+"px");
        // 切换音乐，切换到当前channel的音乐, 注意：显示的音乐类型名称和url中的音乐类型参数名称是不同的
        this.getMusic(this.channel);
    },
    // 切换至下一个频道
    clickNextChannel(event){
        let channelArray = this.channel_item_ct.find("li");
        if(this.channelIndex < channelArray.length-1){
            // 得到下一个channel所在的li
            let nextChannel = channelArray.eq(this.channelIndex+1);
            this.channelIndex = this.channelIndex + 1;
            this.channel = nextChannel.attr("data-channel-id");
            channelArray.removeClass("active");
            nextChannel.addClass("active");
            this.channel_item_ct.css("margin-left", (90-this.channelIndex*90)+"px");
            this.getMusic(this.channel);
        }else {
            return;
        }
    },
    // 切换至上一个频道
    clickPreChannel(event){
        let channelArray = this.channel_item_ct.find("li");
        if(this.channelIndex > 0){
            // 得到下一个channel所在的li
            let preChannel = channelArray.eq(this.channelIndex-1);
            this.channelIndex = this.channelIndex - 1;
            this.channel = preChannel.attr("data-channel-id");
            channelArray.removeClass("active");
            preChannel.addClass("active");
            this.channel_item_ct.css("margin-left", (90-this.channelIndex*90)+"px");
            this.getMusic(this.channel);
        }else {
            return;
        }
    },
    // 点击进度条，跳转到指定的声音节点
    clickProcessBar(event){
        // 获取进度条的总长度
        let process_length = this.process_bar.outerWidth();
        //console.log(process_length);
        // 获取进度条的起点位置坐标
        let start_position = this.process_bar.offset().left;
        //console.log(start_position);
        let click_position = event.clientX;
        //console.log(click_position);
        // 获取点击位置对应的具体时间
        let changeTime = this.music.duration * (click_position-start_position)/process_length;
        // 设置音乐的currentTime---> 由于时间发生了变化，会自动触发ontimeupdate事件---> 在playingmusic中，为该事件指定了处理方法(包括对进度条长度，剩余时间的改变)
        this.music.currentTime = changeTime;
    },
    getMusic(channel){
        var url=null;
        this.lyrics = [];
        if(!channel){
            url = "http://api.jirengu.com/fm/getSong.php?channel=" + "public_fengge_liuxing";
        }else {
            url = "http://api.jirengu.com/fm/getSong.php?channel=" + channel;
        }
        console.log(url);
        let context = this;
        $.ajax({
            method: "get",
            url: url
        }).done(function(data){
            console.log(JSON.parse(data).song[0]);
            // 获取歌词
            context.getLyric(JSON.parse(data).song[0].sid);
            
            context.music.src = JSON.parse(data).song[0].url;
            context.picture.eq(0).attr("src",JSON.parse(data).song[0].picture);
            // 更换音乐名称
            context.musicName.eq(0).text(JSON.parse(data).song[0].title);
            // 更换歌手名称
            context.singer.eq(0).text(JSON.parse(data).song[0].artist);
            // 更换音乐剩余时间
            
            // 不应该在这里从audio对象中获取音乐的时间，因为音乐可能还没有加载出来
            //console.log(context.music.currentTime);
            //context.lastTime.text('-' + context.music.currentTime);

            context.music.autoplay = true;
            // 设置音量：
            context.music.volume = 0.5;
    
            context.playFlag = true;
            context.btn_play.removeClass('icon-play');
            context.btn_play.addClass('icon-pause');
        })
    },
    // 获取歌词，并且根据歌词对应的时间存放到lyric数组中对应的位置
    getLyric(id){
        let url = "http://jirenguapi.applinzi.com/fm/getLyric.php?&sid="+ id;
        let context = this;
        $.ajax({
            method: 'get',
            url: url
        }).done(function(data){
            let lyrics = JSON.parse(data).lyric;
            //console.log(lyrics);
            let lyricArray  = lyrics.split('\n');
            //console.log(lyricArray);
            for(let i = 1; i< lyricArray.length;i++){
                // 一句歌词的形式：[00:32.56]轻轻叠上了微微雨
                let a_lyric = lyricArray[i].split(']');
                // 得到 ["[00:32.56", "轻轻叠上了微微雨"]
                // 如果歌词的第一部分并不是时间
                if(a_lyric.length < 2 || isNaN(a_lyric[0][1])){
                    continue;
                }
                // a_lyric[0] --> [00:32.56
                // a_lyric[0].substr(1) --> 00:32.56
                // a_lyric[1] --> "轻轻叠上了微微雨"
                let time = a_lyric[0].substr(1).split(':');
                let minute = parseInt(time[0]);
                let second = parseInt(time[1]);
                if(!context.lyrics[minute]){
                    context.lyrics[minute] = [];
                }
                context.lyrics[minute][second] = a_lyric[1];
            }
            //console.log(context.lyrics);
        })
    }
   
}

export default MusicPlayer;