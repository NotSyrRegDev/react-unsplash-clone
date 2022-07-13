import React from 'react'
// import { Route , Switch } from 'react-router-dom';
import HeroArea from './HeroArea';

import './App.css';
import ImageRender from './ImageRender';



import Popup from './Popup';

const Home = () => {
    return (
        <div>
            
            <HeroArea />
            <Popup />
           <div className="g-col-3__gallery">
           
          <ImageRender />
           </div>
         
            
        </div>
    )
}

export default Home
