import React from 'react'
import { API_Options } from './constants';
import { addTrailer } from './movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {


    const dispatch = useDispatch();

    useEffect(() => {
      vedioBg();
    }, []);
  
    const vedioBg = async () => {
      try {
        // Use movieId to fetch videos
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_Options
        );
  
        const data = await response.json();
        console.log('data', data);
  
        // Check if results exist
        if (!data || !data.results || !data.results.length) {
          console.error('No video results found');
          return;
        }
  
        // Filter for trailer videos
        const filteredData = data.results.filter((video) => video.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : data.results[0];
  
        console.log('Selected Trailer:', trailer);
        dispatch(addTrailer(trailer));
      } catch (error) {
        console.error('Error fetching trailer data:', error);
      }
    };
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;