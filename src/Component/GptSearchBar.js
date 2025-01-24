import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-36 flex justify-center'>
        <form className='flex  border-black border rounded-md w-3/5 justify-between gap-1 p-7 bg-black bg-opacity-80'>
            <input type="text " placeholder='what would you like to watch  ' className='w-4/5 py-4 rounded-md'></input>
            <button className='bg-red-500 text-black rounded-sm h-full w-1/5'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar; 