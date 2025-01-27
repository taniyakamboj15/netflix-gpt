import React, { useEffect } from 'react'
import { LOGO_URL, SUPPORTED_LANGUAGE } from '../utils/constants'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';
import lang from '../utils/languageConstant';

const Header = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const photoUrl = useSelector((store)=>store?.user?.photoURL)
  const isGpt = useSelector((store) => store.gpt.showGptSearch);
  const langKey=useSelector((store)=>store.lang.configLang)
  const currentLang = lang[langKey] || lang.en;
  

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    // navigate("/")
    }).catch((error) => {
      navigate("/error");
      
    });
  }
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  

    // Cleanup function to avoid memory leaks
    return () => unsubscribe();
  }, [dispatch,navigate]);
  
  const handleGptSearch=()=>{
    dispatch(toggleGptSearch());

  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))

  }
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  return (
    <div className='fixed bg-opacity-50 bg-gradient-to-b from-black w-full z-10 top-0 flex justify-between items-center  px-10 bg-black  flex-col md:flex-row'>
        <img className="w-60 mx-auto md:mx-0"src={LOGO_URL} alt="header logo"></img>
        {user && 
        <div className='flex gap-4'>
         {showGptSearch &&
          <select className='p-2 m-2 bg-green-800 text-white'onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang)=><option key={lang.abbreviation} value={lang.abbreviation}>{lang.name}</option>)}
            
          </select>}

          <button className='bg-purple-950 text-white rounded-lg px-4 'onClick={handleGptSearch}>
            {isGpt ? `${currentLang.home}` : `${currentLang.chatGpt}`}
          </button>

        <div className='relative cursor-pointer group '>
            <div className='flex items-center gap-4'>
              <img
                className=' h-5 sm:h-9 rounded-full'
                src={photoUrl}
                alt='User Avatar'
              />
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </div>

            <div className='absolute invisible group-hover:visible w-48 bg-black py-2 px-3 text-gray-800 shadow-xl bg-opacity-90 rounded-md left-auto right-0'>
              <div className='flex items-center gap-3 py-2 font-semibold text-white hover:text-gray-400 cursor-pointer'>
                {/* Account Icon */}
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 14v4H8v-4m4 0V6m0 8h-4M3 3h18'
                  />
                </svg>
                <span>{currentLang.account}</span>
              </div>
              <div
                className='flex items-center gap-3 py-2 font-semibold text-white hover:text-gray-400 cursor-pointer'
                 onClick={handleSignOut}
              >
                {/* Sign Out Icon */}
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 16l-4-4m0 0l-4-4m4 4h.01M7 8h10M7 12h10M7 16h10'
                  />
                </svg>
                <span>{currentLang.signOut}</span>
              </div>
            </div></div>
          </div>}
        
    </div>
  )
}

export default Header;