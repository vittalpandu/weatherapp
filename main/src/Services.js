import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
 
const Services = (props) => {
  return (
    <>
    <div className='serback'>
    <div>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
     
      <div className="my-1">
      <div style={{marginTop:"0px"}} >
        <h1 className="text-center tex"> Services </h1>
      </div>
      </div>
      
      <div className="container-fluid mt-5">
         <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              
            {Sdata.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} link={val.link}/>;
              })}
    
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
 
export default Services;