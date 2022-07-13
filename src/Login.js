import React from 'react';
import './Signup.css';

const Singup = () => {
    return (
        <div className="container" >
             <div className="text-center">
                 <h1 className="headline__signup">Login Now</h1>
                 <p className="subheadline__singup">Login To Your Account To See All News</p>
             </div>
             
             <div className="mt-4"></div>
            
             <div className="flex-cols">
                 <div className="flex-col-l">

                <div className="email-label">
                <label  className="register-label" >Your Email</label>
                <input type="text" className="register-input" name="email" />
               
                </div>

  
                 </div>
                 
             </div>

             <div className="flex-cols">
                 <div className="flex-col-l">
                 <div className="password-label">
    <label  className="register-label" >Your Password</label>
                <input type="text" className="register-input" name="password" />
                
    </div>
                 </div>
                 <div className="flex-col-l">
                 <label  className="register-label" >Renter Password</label>
                <input type="text" className="register-input" name="passwordConf" />
                 </div>
             </div>
        </div>
    )
}

export default Singup
