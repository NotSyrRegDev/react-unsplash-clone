import React , {useState} from 'react'
import './ImageTemp.css';
import './customMyUtility.css';


   



const ImageTemp = ({author  , download_url }) => {
    const [hover , setHover] = useState(false);


   const popUpRender = () => {
      
      
       document.querySelector('.welcoming--image').src = download_url;
       document.querySelector('.welcoming--image').classList.add('welcoming--image');
       document.querySelector('.previw-div').classList.add('d-show');
       document.querySelector('.welcoming--author').textContent = author;
   }
 
    return (
        <div className="imageTemp" onClick={popUpRender } style={ {background: `${hover ? 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3))' : ''} url('${download_url}') no-repeat center / cover`}
        } onMouseEnter={ () => setHover(true)} onMouseLeave={() => setHover(false)}  >
        
        <div className={`image--top f-sp ${hover ? 'd-show' : 'd-hidden'}  `}>
                <p className="image-category">Ocean</p>
                <div className="box--icons">
                <i className="fas fa-heart heart__icon"></i>
                <i className="fas fa-plus plus__icon"></i>
                </div>
                </div> 
            
            

                
            <div className="image__info pos-r">
                <img src="https://images.unsplash.com/profile-1625772672316-7eda84f9ffc5image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" alt="" className="image__info-author" />
                <div className="box--info">
                <h3 src="" alt="" className="name__info-author" > {author} </h3>
                <p src="" alt="" className="desc__info-author" > Avaliable For Hiring </p>
                </div>
               
                
                <div className={`download--div ${hover ? 'd-show' : 'd-hidden'}`}>
            <i className="fas fa-arrow-down" onClick={() => fetch(download_url) } ></i>
            </div>
            </div>
        
           
          
        </div>
    )
}

 
 


export default ImageTemp;
