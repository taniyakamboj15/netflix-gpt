import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';


const VedioBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const TrailerId = useSelector((store) => store.movie?.movieTrailer?.key);
  


   

  return (
    <div className='w-screen lg:h-screen'>
      <iframe
        className='w-screen aspect-video  '
        src={`https://www.youtube.com/embed/${TrailerId}?controls=0&rel=0&modestbranding=1&iv_load_policy=3&playlist=${TrailerId}&loop=1&autoplay=1&mute=1`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VedioBackground;
