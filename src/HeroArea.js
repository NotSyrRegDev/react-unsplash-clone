import React , {useState,useEffect} from 'react';
import './HeroArea.css';

import axios from 'axios';
import requests from './requests';
const HeroArea = () => {
    const [homePagePhoto , setHomePagePhoto] = useState([]);
    useEffect( () => {
        async function fetHomepage() {
          const request =  await axios.get(requests.fetchHomePageImage);
          setHomePagePhoto(request.data);
         
          return request;
        }
        fetHomepage();
        
       
    } , [])
   
    return (
        <React.Fragment>
        <div className="hero-area" style={{background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)),url(${homePagePhoto.download_url} ) center / cover no-repeat`}} >

            <div className="banner__hero">
            <div className="content__left">
                        <h1 className="headline__hero">Unsplash</h1>
                        <p className="mt-2 subheadline__hero w-75">The internet’s source of <span>freely-usable images.</span> 
                        Powered by creators everywhere.</p>
                        <input type="text" className="input-search-hero" placeholder="Search free high-resolution photos" />
                        <p className="hero__trending mt-2"><span>Trending: </span>flower ,wallpapers ,backgrounds ,happy ,love</p>

                    </div>
            </div>
               
                    
            <div className="f-sp">
                 <p className="subheadline__hero--sm"><span>Photo</span> of the day by <span className="author__image">{homePagePhoto.author}</span></p>
                 <p className="subheadline__hero--sm">Read More About The <span>Unsplash License</span></p>
                 <p className="subheadline__hero--sm">All You Need To Create A Website</p>
             </div>
                
                
            
        </div>
       
        </React.Fragment>
    )
}

export default HeroArea
