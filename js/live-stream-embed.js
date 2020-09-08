
window.addEventListener('DOMContentLoaded', () => {
  var player = new Clappr.Player({
      autoPlay: true,
      height: '100%',
      width: '100%',
      mute: true,
      source: 'https://vc1.asotcdn.xyz/hls/ournetworks/live.m3u8',
      parentId: '.player',
      plugins: [LevelSelector],
      levelSelectorConfig: {
        title: 'Quality',
        labels: {
          2: '1080p',
          1: '720p',
          0: '480p',
        },
        onLevelsAvailable: function(levels) {
          return levels.reverse()
        }
      }
    }
  )

  setTimeout(() => {
    player.unmute()
  }, 3000)
})
