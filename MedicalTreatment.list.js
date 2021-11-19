import React from "react";


function MedicalTreatmentList(prop){
  const listRecords = prop.listJson;

  return(
  <div> 
    
    Medical Treatment List are: {listRecords}
    
    </div>
    );



}

export default MedicalTreatmentList;