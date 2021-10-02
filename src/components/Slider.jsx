import React from "react";
import ImgPrincipal from "../image/principal.png";
import "./style/Slider.css";
import perfilfoto from "../image/perfil.jpg";
const Slider = () => {
  return (
    <div className="sl">
      <div className="sl-photo-portada">
        <div class="avatar">
          <img src={perfilfoto} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
