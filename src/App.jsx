import React , {useState , useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './ImageSearch';

function App() {
 
  const [images , setImages] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [term , setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=43601763-b9a345ed481648897149bd6e9&q=${term}&image_type=photo&pretty=true`)
        .then((response) => response.json())
        .then(data => {
           setImages(data.hits);
           setLoading(false);
         })
        .catch(err => console.log(err));
  },[term]);
  
  return (
    <>
   <div className="container mx-auto">
    <ImageSearch searchText={(text) => setTerm(text)}/>
    {!isloading && images.length === 0 && <h1 className='text-6xl text-center mx-auto mt-36'>Not Found...</h1>}

   {isloading ? <h1 className='text-6xl text-center mx-auto mt-36'>Loading...</h1>
    : <div className='grid grid-cols-3 gap-3'>
      {images.map(image => (
        <ImageCard key={images.id} image={image} />
      ))}
    </div>
  }
   </div>
       
    </>
  )
}

export default App
