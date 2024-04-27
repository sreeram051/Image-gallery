import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {

  const [text , setText] = useState('')
  const onSubmit = (e) => {
      e.preventDefault()
      searchText(text)
      
  }


  return (
    <div className='max-w-sm rounded-xl overflow-hidden my-10 mx-auto'>
        <form onSubmit={onSubmit} className='max-w-sm'>
            <div className=' flex items-center border-b bg-black py-2'>
                <input onChange={e => setText(e.target.value)} type="text" className=' px-3 appearance-none bg-transparent border-none text-white w-9/12 to-gray-700 mr-3 py-1 leading-tight focus:outline-none' placeholder='Search image that you want'/>
                <button className=' flex-shrink-0 bg-white hover:bg-teal-700  hover:border-teal-500 text-sm border-4 text-black py-1 px-2 rounded' type='submit'>
                    Search
                </button>
            </div>

        </form>
    </div>
  )
}

export default ImageSearch