import React from "react";
import "./style.css";
import MedicalTreatment from './MedicalTreatment' ;
import MedicalTreatmentPanel from './MedicalTreatmentPanel';
import MedicalTreatmentList from "./MedicalTreatment";

const TreatId = "CA2021";
const TreatCourseId= "195CD";
const TreatType = "A";
const TreatCategory = "2";
const Name = " Josh";   
const StartDate = "2021/02/3"; 




function toString(nm ,id ,date,ty,cr,sd){
  return nm+ ","+id+","+date+", "+ty+", "+cr+","+sd;
}

function clickHandler(){
  window.alert(toString(TreatId,TreatType,TreatCourseId,TreatCategory,Name,StartDate))
}

export default function App() {
  return (
    <div>
      <h1> Medical Record </h1>
     <MedicalTreatment name = {Name} id = {TreatId} courseid =
     {TreatCourseId} type={TreatType} category ={TreatCategory} startdate = {StartDate}/>
     <br/>
     <button onclick= {clickHandler}> Next </button>

     <br/> <br/>
     <h2> Medical Record </h2>

     <MedicalTreatmentPanel/>
     
     

     



    </div>
  );
}
