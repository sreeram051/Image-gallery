import React from 'react'

const ImageCard = ({image}) => {

    const tags = image.tags.split(',')

  return (
    <div className=" max-w-sm rounded-sm overflow-hidden shadow-lg b">
    <img src={image.webformatURL} alt="image" className=" w-full"/>
    <div className=" px-4 py-6">
    <div className=" mb-2 text-xl font-medium">
       Photo by {image.user}
    </div>
    <ul className="  font-normal text-sm">
     <li>
       <strong>views: </strong>
       <span>{image.views}</span>
     </li>
     <li>
       <strong>downloads: </strong>
       <span>{image.downloads}</span>
     </li>
     <li>
       <strong>likes: </strong>
       <span>{image.likes}</span>
     </li>
    </ul>
        </div>
    <div className=" px-4 py-6">
        {tags.map((tag , index) => (
            <span key={index} className=" inline-block bg-gray-200 rounded-full font-semibold px-3 py-1 text-gray-700 mr2">#{tag}</span>
        ))}
    </div>
    </div>
  )
}

export default ImageCard;