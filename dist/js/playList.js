!function(s,n){var l=s(document.body),o=s('<div class ="play-list"><div class="play-header">播放列表</div><ul class="list-wrapper"></ul><div class="close-btn">关闭</div></div>');function a(i){s(".list-wrapper li").removeClass("sign");s(".list-wrapper li").eq(i).addClass("sign")}n.playList={renderList:function(i){for(var s="",n=i.length,a=0;a<n;a++)s+="<li><h3>"+i[a].song+"<span>"+i[a].singer+"</span></h3></li>";o.find("ul").html(s),l.append(o)},show:function(i){s(".play-list").toggleClass("show"),a(i.index)},bindEvent:function(){s(".play-list li").on("click",function(){var i=s(this).index();a(i),controlMannager.index=i,audio.setAudioSouce(songList[i].audio),audio.audio.play(),n.progress.start(0),n.render(songList[i]),audio.status="play",s(".play-btn").addClass("playing")})}}}(window.Zepto,window.player||(window.player={}));