import React from "react";
import "./style.css";
import MedicalTreatment from './MedicalTreatment' ;
import MedicalTreatmentPanel from './MedicalTreatmentPanel';


const TreatId = "CA2021";
const TreatCourseId= "195CD";
const TreatType = "Long Term";
const TreatCategory = "Cancer";
const Name = " Josh Wagle";   
const StartDate = "19/01/2021"; 

 function clickHandler(){
  window.alert(toString(TreatId,TreatType,TreatCourseId,TreatCategory,Name,StartDate))
}
export default function App() {
  return (
    <div>
      <h1 style={{color: "blue", background: "white"}}>Medical Record</h1>
     <MedicalTreatment name = {Name} id = {TreatId} courseid =
     {TreatCourseId} type={TreatType} category ={TreatCategory} startdate = {StartDate}/>
     <br/>
     <button onclick= {clickHandler}> Next </button>
     <br/> <br/>
     <h2 style={{color: "blue", backgroundColor: "white"}}>Medical Record</h2>
     <MedicalTreatmentPanel/> 
      

     

     



    </div>
  );
}
