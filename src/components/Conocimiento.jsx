import React from "react";
import imgreact from '../image/logo.svg'
import './style/Conocimiento.css';
import html5 from '../image/html5.png';
import javascript from '../image/JavaScript-logo.png';
import css3 from '../image/css3.png';
import nodeJS from '../image/nodeJS.png'
import cshart from '../image/cshart.png';
import java from '../image/java.png';
import comando from '../image/comando.png';
import azure from '../image/azuredevops.png';
import github from '../image/github.png';
import git from '../image/git.png';
const Conocimiento = () => {
  return (
    <div className="conocimiento ">
      <div className="container">
    <h3 className="text-center mt-5">Conocimiento</h3>

      <div className="row">
        <div className="col-md-4 ">
        <div className="card react" >
          <div className="card-header float-left">Front-end  </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Lenguajes utilizados : </li>
         
            <li className="list-group-item">ReactJS<img src={imgreact} className="react-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresoreact" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">35%</div>
            </div>
            </li>
            <li className="list-group-item">HTML5<img src={html5} className="html-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresohtml" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            </li>

            <li className="list-group-item">Css3<img src={css3} className="css-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresocss .bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
            </li>
         
            <li className="list-group-item">JavaScript<img src={javascript} className="javascrit-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresojavascript bg-warning" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">45%</div>
            </div>
            </li>
         

         
          </ul>
        </div>
        </div>

      
        <div className="col-md-4 ">
        <div className="card react">
          <div className="card-header float-right">Back-end <img src={imgreact} className="react-conocimiento" alt=""/> </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"></li>
           
            <li className="list-group-item">Java<img src={java} className="java-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresojava" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">35%</div>
            </div>
            </li>
            <li className="list-group-item">C#(ASP.NET , .NET)<img src={cshart} className="cshart-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresocshart" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            </li>

            <li className="list-group-item">NodeJS<img src={nodeJS} className="nodeJS-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresonodejs .bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
            </li>
         
            <li className="list-group-item">
              <br/><br/>
            </li>
          </ul>
        </div>
        </div>
      
        <div className="col-md-4 ">
        <div className="card  react ">
          <div className="card-header float-left">Comando <img src={imgreact} className="react-conocimiento" alt=""/> </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"></li>
          
            <li className="list-group-item">Git<img src={git} className="git-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresogit" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">35%</div>
            </div>
            </li>
            <li className="list-group-item">Terminal de Comando<img src={comando} className="comando-conocimiento" alt=""/>
            <div className="progress">
            <div className="progress-bar progresocomando" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            </li>
            <li className="list-group-item">Repositorio</li>
            <li className="list-group-item">Git Hub<img src={ github} className="github-conocimiento" alt=""/>
            </li>
            <li className="list-group-item">Azure Devops<img src={azure} className="azure-conocimiento" alt=""/>
            </li>
          </ul>
        </div>
        </div>

        </div>
      </div>
        
        </div>
    
   

    
  );
};
export default Conocimiento;
