import React from 'react';
import VideoItem from '../video-item/video-item';
import styles from './styles.module.css';

const VideoList = ({ props }) => (
  <ul className={styles.video_list}>
    {props.map((list) => (
      <VideoItem videoItem={list} key={props.id} />
    ))}
  </ul>
);

export default VideoList;
