import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const isGptSearch = useSelector((store) => store.gpt.showGptSearch);
//  console.log("gpt",isGptSearch)
  return (
    <div>
        <Header/>
        {isGptSearch ? (<GptSearch />):(
          <>
            <MainContainer />
            <SecondaryContainer />

          </>
        )}
        
      
        
        
    </div>
  )
}

export default Browse;