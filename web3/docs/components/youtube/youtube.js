// YouTubeVideo.js
import React from "react";
import Controls from "../controls/controls";
import styles from "./YouTubeVideo.module.css";

class YouTubeVideo extends React.Component {
  timer = null;

  componentDidMount() {
    // Ensure the YouTube Player API script is loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/player_api";

      // Insert the script tag at the top of the body
      document.body.appendChild(tag);
    }

    // Wait for the YouTube Player API script to load before creating the player
    setTimeout(() => {
      this.player = new window.YT.Player(
        `youtube-video-${this.props.videoId}`,
        {
          videoId: this.props.videoId,
          width: "100%",
          height: "480px",
          playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            cc_load_policy: 1,
          },
          events: {
            onReady: this.onPlayerReady,
            onStateChange: this.onPlayerStateChange,
          },
        }
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onPlayerReady = (event) => {
    event.target.seekTo(this.props.startTime);
    event.target.playVideo();
  };

  onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      this.timer = setInterval(this.checkTime, 200);
    } else {
      clearInterval(this.timer);
    }
  };

  checkTime = () => {
    const currentTime = this.player.getCurrentTime();
    if (
      currentTime < this.props.startTime ||
      currentTime > this.props.endTime
    ) {
      this.player.seekTo(this.props.startTime);
    }
  };

  handlePlayPause = () => {
    if (this.player.getPlayerState() === window.YT.PlayerState.PLAYING) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
  };
  handleRewind = () => {
    let currentTime = this.player.getCurrentTime();
    if (currentTime > this.props.startTime) {
      this.player.seekTo(currentTime - 10);
    }
  };

  handleForward = () => {
    let currentTime = this.player.getCurrentTime();
    if (currentTime < this.props.endTime) {
      this.player.seekTo(currentTime + 10);
    }
  };

  render() {
    return (
      <div className={styles.youtubeAndControls}>
        <div className={styles.playerWrapper}>
          <div className={styles.videoContainer}>
            <div
              className={styles.youtubeFrame}
              id={`youtube-video-${this.props.videoId}`}
            ></div>
            <div className={styles.blocker}></div>
          </div>
        </div>
        <Controls
          onPlayPause={this.handlePlayPause}
          onRewind={this.handleRewind}
          onForward={this.handleForward}
        />
      </div>
    );
  }
}

export default YouTubeVideo;
