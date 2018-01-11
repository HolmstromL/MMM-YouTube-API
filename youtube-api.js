Module.register("youtube-api", {
    defaults: {
        videoID: "Sagg08DrO5U",
        playbackRate: "1",
        volume: "100",

    },

    getDom: function(){
        var wrapper = document.createElement('div');

        var scriptContainer = document.createElement('script');
        scriptContainer.innerHTML = "function onYouTubeIframeAPIReady() { player = new YT.Player('player', { height: '390', width: '640', playerVars: { 'controls': 0, 'showinfo': 0, 'rel': 0, 'loop': 1, 'iv_load_policy': 3 }, videoId: '" + this.config.videoID + "', events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange } }); } function onPlayerReady(event) { player.setPlaybackRate(" + this.config.playbackRate + "); player.setVolume(" + this.config.volume + "); event.target.playVideo(); } function onPlayerStateChange(event) { if (event.data == YT.PlayerState.PLAYING && !done) { done = true; } if (event.data == YT.PlayerState.ENDED){ player.playVideo(); } } function stopVideo() { player.stopVideo(); }";
        wrapper.appendChild(scriptContainer);

        var TempDiv = document.createElement('div');
        wrapper.appendChild(TempDiv);
        TempDiv.setAttribute("id", "player");

        var tag = document.createElement('script');
        wrapper.appendChild(tag);
        tag.src = "https://www.youtube.com/iframe_api";

        var firstScriptTag = document.getElementsByTagName('script')[0];
        wrapper.appendChild(firstScriptTag);
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


        var player;
        var done = false;
        
        return wrapper;
    }
});