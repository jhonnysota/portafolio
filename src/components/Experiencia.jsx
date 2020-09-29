import React from "react";
import './style/Experiencia.css'
import imgExpe from "../image/proyectos.jpg";
const Experiencia = () => {
  return (
    <div className="Experiencia">
    <div className="container ">
    <h2 className="experiencia-title text-center mt-5">Experiencia</h2>
      <div className="card mb-3 card-expe">
        <div className="row no-gutters">
          <div className="col-md-4 p-3"> 
            <img src={imgExpe}className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Empresa : Amazontic </h5>
              <p className="card-text">
               Tiempo: 7 meses. <br/>
               Proyecto: ERP-Amazontic. <br/>
               Lenguaje de programacion: C# , SQLServer, Git(Azure Devops). <br/>
               Descripcion:Trabaje en la nueva version del ERP de Amazontic.
              </p>
              <p className="card-text">
                <small className="text-muted h5 float-right"><a target="_blank" href="https://amazontic.pe/">AmazonTic</a></small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 card-expe ">
        <div className="row no-gutters">
          <div className="col-md-4 p-3"> 
            <img src={imgExpe}className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Empresa : Ralitech </h5>
              <p className="card-text">
               Tiempo: 7 meses. <br/>
               Proyecto: Pagina Web , E-commerce <br/>
               Lenguaje de programacion:Html5, css, Javascript, Bootstrap4, PHP, Prestashop <br/>
               Descripcion:Desarrolle la pagina web para Ralitech, Tambien tuve la oportunidad de instalar prestashop y modificar componenten dentro del codigo fuente.
              </p>
              <p className="card-text">
                <small className="text-muted h5 float-right"><a target="_blank" href="http://www.ralitech.pe/">Ralitech</a></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

   );
};
export default Experiencia;
