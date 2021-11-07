import React from "react";
function MedicalTreatmentPanel(){

  const [treatId, setTreatId] = React.useState('');

  const [treatName, setTreatName] = React.useState('');

  const [startDate, setStartDate] = React.useState('');


  const [treatCategory, setTreatCategory] = React.useState('');
  const [treatType, setTreatType] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');





  function showClickHandler () {
      window.alert("[" + "id = "+ treatId + ", name = "+treatName+ ", startdate = "+ startDate+",category= "+treatCategory+", type = "+treatType+", courseid = "+treatCourseId+"]");

  }

  
  function clearClickHandler () {
      setTreatId('');
      setTreatName('');
      setStartDate('');
      setTreatType('');
      setTreatCourseId('');
      setTreatCategory('');
  }


  return(
      <div>

          <input placeholder="Treat ID" value={treatId}  onChange = { e => setTreatId(e.target.value)}  ></input>

          <br/>

          <input placeholder=" Name" value={treatName}  onChange = { e => setTreatName(e.target.value)}  ></input>

          <br/>

          <input placeholder="Category " value={treatCategory}  onChange = { e => setTreatCategory(e.target.value)}  ></input>
          
          <br/>
          <input placeholder="Course ID " value={treatCourseId}  onChange = { e => setTreatCourseId(e.target.value)}  ></input>
          

          <br/>
          <input placeholder="Type " value={treatType}  onChange = { e => setTreatType(e.target.value)}  ></input>
          <br/>
          <input placeholder="Start Date " value={startDate}  onChange = { e => setStartDate(e.target.value)}  ></input>
          <br/>

          <button style={{color:"green"}} onClick={showClickHandler}>Show</button>

          <button style={{color:"purple"}} onClick={clearClickHandler}>Clear</button>

          <br/><br/><br/>

          <input placeholder="Next"></input>

      </div>
  );

}

export default MedicalTreatmentPanel;