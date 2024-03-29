import React from "react";
function MedicalTreatmentPanel(){

  const [treatId, setTreatId] = React.useState('');

  const [treatName, setTreatName] = React.useState('');

  const [startDate, setStartDate] = React.useState('');


  const [treatCategory, setTreatCategory] = React.useState('');
  const [treatType, setTreatType] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');



  function showClickHandler () {
    window.alert("[" + "id = "+ treatId + ", name = "+treatName+ ", startdate = "+ startDate +",type = "+treatType+",courseid="+treatCourseId+",category="+treatCategory+"]");
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
        <input placeholder=" Name" value={treatName}  onChange = { e => setTreatName(e.target.value)}  ></input>

          
          <br/><br/>

          <input placeholder="Treat Id" value={treatId}  onChange = { e => setTreatId(e.target.value)}  ></input>

          <br/><br/>
          <input placeholder="Course Id" value={treatCourseId}  onChange = { e => setTreatCourseId(e.target.value)} ></input>

          
          <br/><br/>
          <input placeholder="Category " value={treatCategory} onChange = { e => setTreatCategory(e.target.value)}  ></input>
          

          <br/><br/>
          <input placeholder="Type " value={treatType}  onChange = { e => setTreatType(e.target.value)}  ></input>
          <br/><br/>
          <input placeholder="Start Date " value={startDate}  onChange = { e => setStartDate(e.target.value)}  ></input>
          <br/><br/>

          <button style = {{color:"blue"}} onClick={showClickHandler}>Add</button>

          <button style={{color:"purple"}} onClick={clearClickHandler}>Clear</button>

          <br/><br/><br/>

         

      </div>
  );

}

export default MedicalTreatmentPanel;