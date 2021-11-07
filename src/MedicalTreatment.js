import React from "react";
import "./style.css";


export default function MedicalTreatment(props){
  return (
    <div>
       Name={props.name} 
       <br/>
       Treat ID = {props.id} 
       <br/>

       Course ID = {props.courseid}
       <br/>

       Category = {props.category}  
       <br/>
       Type = {props.type}    
       <br/>       
       Start Date = {props.startdate}
      </div>
  )
}