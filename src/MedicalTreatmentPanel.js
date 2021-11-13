import React from "react";
function MedicalTreatmentPanel(){

  const [treatId, setTreatId] = React.useState('');

  const [treatName, setTreatName] = React.useState('');

  const [startDate, setStartDate] = React.useState('');


  const [treatCategory, setTreatCategory] = React.useState('');
  const [treatType, setTreatType] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');





  

  

  
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

          <br/><br/>

          <input placeholder=" Name" value={treatName}  onChange = { e => setTreatName(e.target.value)}  ></input>

          <br/><br/>

          <input placeholder="Category " value={treatCategory} onChange = { e => setTreatCategory(e.target.value)}  ></input>
          
          <br/><br/>
          <input placeholder="Course ID " value={treatCourseId}  onChange = { e => setTreatCourseId(e.target.value)}  ></input>
          

          <br/><br/>
          <input placeholder="Type " value={treatType}  onChange = { e => setTreatType(e.target.value)}  ></input>
          <br/><br/>
          <input placeholder="Start Date " value={startDate}  onChange = { e => setStartDate(e.target.value)}  ></input>
          <br/><br/>

          <button id = "entry" >Input entry</button>

          <button style={{color:"purple"}} onClick={clearClickHandler}>Clear</button>

          <br/><br/><br/>

          <table id = 'display'>
              <tr>
                  <th> TreatID</th>
                  <th> Name</th>
                  <th> Treat type</th>
                  <th> Treat CourseID</th>
                  <th> Category</th>
                  <th> StartDate</th>
                  </tr>
                  </table>
        

      </div>
  );

}

export default MedicalTreatmentPanel;