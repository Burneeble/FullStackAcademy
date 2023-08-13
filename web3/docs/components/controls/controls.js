// Controls.js
import React from "react";
import styles from "./Controls.module.css";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Controls extends React.Component {
  state = {
    isPlaying: true,
  };

  handlePlayPause = () => {
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
    this.props.onPlayPause();
  };

  render() {
    const { isPlaying } = this.state;

    return (
      <div className={styles.controls}>
        <button className={styles.subtitles}>CC</button>

        <div className={styles.statusVideoControls}>
          <button className={styles.button} onClick={this.props.onRewind}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faBackward}
            ></FontAwesomeIcon>
          </button>

          <button className={styles.playButton} onClick={this.handlePlayPause}>
            {isPlaying ? (
              <>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faPause}
                ></FontAwesomeIcon>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faPlay}
                ></FontAwesomeIcon>
              </>
            )}
          </button>
          <button className={styles.button} onClick={this.props.onForward}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faForward}
            ></FontAwesomeIcon>
          </button>
        </div>
        <button className={styles.button}>CC</button>
      </div>
    );
  }
}

export default Controls;
