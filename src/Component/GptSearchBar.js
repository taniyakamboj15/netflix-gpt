import React, { useState, useRef } from 'react';
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openAi';
import { API_Options } from '../utils/constants';
import { addGptMovieResults } from '../utils/GPTSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef();
  const langKey = useSelector((store) => store.lang.configLang);
  const currentLang = lang[langKey] || lang.en;

  const [loading, setLoading] = useState(false); 
  const [isClicked, setIsClicked] = useState(false);
  const serachTmdbMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_Options
    );
    const json = await data.json();
    return json.results;
  };

 const handleGptSearchButton = async() => {
  const message = `act as a movie recommending system and for the message ${searchText.current.value} show only top 5 movie names, and the result should be in a single line with comma-separated movie names. The result should be like : koi mil gaya, kaho na kaho, om shanti om, krish, jadoo`;

    setLoading(true)
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [{ role: "user", content: message }],
  });
  setLoading(false)
  console.log("reply from chatgpt - ",completion.choices[0].message.content);

  const gptMovies = completion.choices[0].message.content.split(",");

  const data = gptMovies.map(movie=>serachTmdbMovie(movie));
  const tmdbResults = await Promise.all(data);
  console.log(tmdbResults);
  dispatch(addGptMovieResults({movieNames:gptMovies , movieResults:tmdbResults}));
 }
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleGptSearchButton();
  };

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleMouseLeave = () => {
    setIsClicked(false);
  };

  return (
    <div className="pt-36 flex justify-center">
      <form
        className="flex border-black border rounded-md w-3/5 justify-between gap-1 p-7 bg-black bg-opacity-80"
        onSubmit={handleFormSubmit}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={currentLang.searchPlaceholder}
          className="w-4/5 py-4 rounded-md"
        />
        <button
          className={`bg-red-500 text-black rounded-sm h-full w-1/5 transition-transform duration-200 ${
            isClicked ? 'scale-95' : 'scale-100'
          }`}
          onClick={handleButtonClick}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          disabled={loading} 
        >
          {loading ? 'Loading...' : currentLang.searchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
