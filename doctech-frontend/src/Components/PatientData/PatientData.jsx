/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { useParams } from "react-router-dom";
import api from '../Api/Api'
import PatientDataTable from "./PatientDataTable";

export default function PatientData() {
  let params = useParams();
  const [data,setData] = React.useState([]);


  React.useEffect(()=>{
    api.get(`/prescription/${params.user}`).then((res) => {
        setData(res.data)
      });
  },[])
  

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full pl-4 pr-4 ml-4 mr-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
        {
            data.map(info => (
                <PatientDataTable key={info._id} clinicName={info.clinicName} date={info.date} doctorName={info.doctorName} frequency={info.frequency} issueDiagnosed={info.issueDiagnosed} medicines={info.medicines} patientId={info.patientId} quantity={info.quantity} />
            ))
        }
    </div>
  );
}
