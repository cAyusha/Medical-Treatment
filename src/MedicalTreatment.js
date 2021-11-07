import React from "react";
import "./style.css";


export default function MedicalTreatment(props){
  return (
    <div>
       Name={props.name} 
       <br/>
       Treatid = {props.id} 
       <br/>

       Course Id = {props.courseid}
       <br/>

       Category = {props.category}  
       <br/>
       Type = {props.type}    
       <br/>       
       StartDate = {props.startdate}
      </div>
  )
}