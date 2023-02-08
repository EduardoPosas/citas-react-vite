import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  // Reading patients from localStorage
  // useEffect(() => {
  //   const storagePatients = JSON.parse(localStorage.getItem('patients')) ?? [];
  //   setPatients(storagePatients);
  // }, []);

  // Storing patients on LocalStorage
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])


  // delete patient fn
  function deletePatient(id) {
    const updatedPatient = patients.filter(patientState => patientState.id !== id);
    setPatients(updatedPatient);
  }


  return (
    <>
      <header className="container mx-auto mt-16">
        <Header />
      </header>

      <main className="container mx-auto mt-10 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </main>
    </>
  );
}

export default App
