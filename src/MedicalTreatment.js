import React from "react";
import "./style.css";


export default function MedicalTreatment(props){
  return (
    <div>
       Name={props.name} 
       <br/>
       Treat Id= {props.id} 
       <br/>

       Course Id = {props.courseid}
       <br/>

       Category = {props.category}  
       <br/>
       Type = {props.type}    
       <br/>       
       Start Date = {props.startdate}
      </div>
  )
}