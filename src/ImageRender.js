import React ,{ useState , useEffect} from 'react';
import axios from 'axios';
import requests from './requests';
import ImageTemp from './ImageTemp';
import './ImageRender.css';
// import {dataArray2 , dataArray } from './DataArray';

const ImageRender = () => {
    const [photos , setPhotos] = useState([]);
    const [loading , setLoading] = useState(false);
   

    useEffect(() => {
   
        async function fetchData() {
      const request = await axios.get(requests.random_List_18_Images);
        
      // GRAPPING RANDOM IMAGE
    //   console.log(requests.data.results[Math.floor(Math.random() * requests.data.results.length)])
    setPhotos(request.data);
    setLoading(true);
    
    return request;
        }

  fetchData();
    }, []);


    return (
        <React.Fragment>
          {loading ? (
            <React.Fragment>
             {photos.map(({url , download_url , author , id }) => {
   
   return (
      
 <ImageTemp url={url} download_url={download_url} author={author} key={id} />
     

   ) 
           }
              
           )}
            </React.Fragment>
          ) : ''}
           
            
        </React.Fragment>
    )
}

export default ImageRender;
