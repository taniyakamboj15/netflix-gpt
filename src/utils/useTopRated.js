
import { API_Options,  TOP_RATED_API } from './constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRated } from './movieSlice';

const useTopRated = () => {
    const dispatch = useDispatch();

    const fetchPopularData = async()=>{
        const data = await fetch(TOP_RATED_API,API_Options);
        const data1 = await data.json();
        console.log(data1);
        dispatch(addTopRated(data1.results));

    }
    useEffect(()=>{
        fetchPopularData();

    },[])
  
}

export default useTopRated;