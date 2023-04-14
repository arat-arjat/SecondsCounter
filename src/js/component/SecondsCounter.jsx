import React from "react";
import  PropTypes, { number }  from "prop-types";


export const SecondsCounter = (props) =>{

    return (
        <>
        
           <div className="row d-flex" > 
           <div className="card text-bg-dark mb-3 text-center mx-1" style={{width: "10rem", minHeight: "10rem"}}> 
                <i className="card-title my-auto fa-solid fa-clock" style={{fontSize: "8rem"}}></i>
           </div>
           <SecondsNumber second={parseInt( props.timer /1000000 % 10)}/>
           <SecondsNumber second={parseInt( props.timer /100000 % 10)}/>
           <SecondsNumber second={parseInt( props.timer /10000 % 10)}/>
           <SecondsNumber second={parseInt( props.timer /1000 % 10)}/>
           <SecondsNumber second={parseInt( props.timer /100 % 10)}/>
           <SecondsNumber second={parseInt( props.timer /10 % 10)}/>
           <SecondsNumber second={parseInt( props.timer % 10)}/>
           </div>
        </>
    )
  
}
const SecondsNumber = (props) =>{

    return (
            <div className="card text-bg-dark mb-3 text-center mx-1" style={{width: "10rem", minHeight: "10rem"}}>
                <h1 className="card-title my-auto"  style={{fontSize: "10rem"}}> {props.second} </h1>
                
                
            
            </div>
)
}

SecondsNumber.propTypes = {
    second: PropTypes.number
 }
