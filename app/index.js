
import MusicPlayer from "./MusicPlayer";
// function component () {
//   //var element = document.createElement('div');
//   var element = $('<div></div');
//   /* lodash is required for the next line to work */
//   //element.innerHTML = _.join(['Hello','webpack'], ' ');
//   var player = $('.music-player');
//   new MusicPlayer(player);
//   //element.html(foo);
//   //return element;
  
//   return element.get(0);
// }

// component();

// $(document).ready(function(){
//     $.ajax({
//       method: "get",
//       url: "http://api.jirengu.com/fm/getSong.php"
//     }).done(function(data){
//       console.log(JSON.parse(data).song[0].url);
//     })
// });
var playerNode = document.getElementsByClassName("music-player");
//var playerNode = $('.music-player');
var musicPlayer = new MusicPlayer(playerNode[0]);