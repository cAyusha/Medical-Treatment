import React from "react";
import "./style.css";
import MedicalTreatment from './MedicalTreatment' ;

const TreatId = "203As";
const TreatCourseId= "195";
const TreatType = "A";
const TreatCategory = "2";
const Name = " Operation";
const StartDate = "2021/02/3";


function toString(nm ,id ,date,ty,cr,sd){
  return nm+ ","+id+","+date+", "+ty+", "+cr+","+sd;
}



export default function App() {
  return (
    <div>
     <MedicalTreatment name = {Name} id = {TreatId} courseid =
     {TreatCourseId} type={TreatType} category ={TreatCategory} startdate = {StartDate}/>

    </div>
  );
}
