import React from 'react';
import styles from './styles.module.css';

const VideoItem = ({ videoItem: { snippet } }) => {
  return (
    <li className={styles.video_item}>
      <img
        className={styles.thumbnails}
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div>
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
