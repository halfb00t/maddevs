const checkBrowserMixin = {
  methods: {
    checkBrowserExitFullscreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else if (document.webkitFullscreenElement) { // WebKit (Safari) / Blink (Chrome & Opera) / Edge
        document.webkitExitFullscreen()
      }
    },

    checkBrowserReqFullscreen(videoContainer) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen()
      } else if (videoContainer.webkitRequestFullScreen) { // WebKit (Safari) / Blink (Chrome & Opera) / Edge
        videoContainer.webkitRequestFullScreen()
      }
    },
  },
}

export default checkBrowserMixin
