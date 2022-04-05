import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import VideoList from './components/video-list/video-list';

function App() {
  const [popularVideo, setPopularVideo] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBRL8RzRFX2b4XSe5gf7rNO65YKMN-F5E0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setPopularVideo(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <VideoList props={popularVideo} />
    </>
  );
}

export default App;
