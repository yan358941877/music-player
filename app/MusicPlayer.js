import $ from 'jquery';
function MusicPlayer(playerNode) {
    var root = $(playerNode);

    this.player = root;
    // 静音按钮 
    this.btn_quiet = root.find('.title-bar .voice');
    this.volume = root.find('.title-bar .colume');
    this.channel_ct = root.find('.channel .channel-ct');
    this.pre_channel = root.find('.channel .pre-channel');
    this.next_channel = root.find('.channel .next-channel');

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
    //console.log(this.lastTime.text()+'aaa');
    this.music = new Audio();
    this.volume = 1;
    this.playFlag = false;
    this.clickFlag = false;
    this.init();
}
MusicPlayer.prototype = {
    constructor: MusicPlayer,
    init: function () {
        this.bind();
        this.getMusic();
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

        // 给 Audio对象添加 事件监听器
        this.musicPlaying = this.musicPlaying.bind(this);
        this.music.addEventListener("playing", this.musicPlaying);
    },
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
    },
    clickNextMusic: function(event){
        this.getMusic();
    },
    clickCloseVoice: function(event){
        // console.log(this.music.volume);
        this.music.volume = this.music.volume===0?this.volume:0;
    },

    //
    musicPlaying(event){
        // 更换音乐剩余时间
        if(this.music.currentTime==0){
            let minute = Math.floor(this.music.duration/60);
            let second = Math.floor(this.music.duration%60);
            this.lastTime.text("-0" + minute + ':' + second);
        }
        let time = this.music.duration;
        let context = this;
        this.music.ontimeupdate = function(){
            let minute = Math.floor((time-context.music.currentTime)/60);
            let second = Math.floor((time-context.music.currentTime)%60);
            context.lastTime.text("-0" + minute + ':' + second);

            // 添加歌词功能
        }
        
    },
    getMusic(channel){
        var url=null;
        if(!channel){
            url = "http://api.jirengu.com/fm/getSong.php?channel=public_fengge_" + "liuxing";
        }else {
            url = "http://api.jirengu.com/fm/getSong.php?channel=public_fengge_" + channel;
        }
        let context = this;
        $.ajax({
            method: "get",
            url: url
        }).done(function(data){
            console.log(JSON.parse(data).song[0]);
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
            context.music.volume = 1;
    
            context.playFlag = true;
            context.btn_play.removeClass('icon-play');
            context.btn_play.addClass('icon-pause');
        })
    }
   
}

export default MusicPlayer;