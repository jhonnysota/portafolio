import React from 'react';
import Conocimiento from '../components/Conocimiento.jsx';
import Experiencia from '../components/Experiencia.jsx';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';
import Proyect from '../components/Proyect.jsx';
import Slider from '../components/Slider.jsx';
import './style/Principal.css';

const Index=()=>{
    return(
        <React.Fragment>
            <Nav/>
            <div className="container1">
            <Slider/>
            <Experiencia/>
            <Conocimiento/>
            <Proyect/>
            <Footer/>
            </div>
        </React.Fragment>
    );
}
export default Index;