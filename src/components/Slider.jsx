import React from 'react';
import ImgPrincipal from '../image/principal.png';
import './style/Slider.css';

const Slider =()=>{
    return (
        <div>
          <div className="row Slider">
              <div className="col-md-5">
                <div className="presentacion float-left">
                <h2>Welcome</h2>
                <h3>hello my name is jhonny, I am a web programmer, and with the help of the codes we can achieve great things.</h3>       </div>
              </div>
              <div className="col-md-5 ">
                  <div className="container float-right ml-5">
                  <img src={ImgPrincipal} alt="" className="principal"/>
                  </div>
              </div>
          </div>
          </div>
    );
}
export default Slider;