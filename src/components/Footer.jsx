import  React from 'react';
import reactfooter from '../image/logo.svg';
const Footer =()=>{
    return (

        <div>
            <footer>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-6">
                    <p className ="fa-align-center"> created by Jhonny Antonio Sota Bautista-developer Front-end <img src={reactfooter} alt="" className="footerimg"/> </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;