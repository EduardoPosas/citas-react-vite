import Patient from "./Patient";


const PatientList = ({ patients, setPatient, deletePatient }) => {

    // const listOfPatients = patients.map(patient => <Patient key={patient.pet} patient={patient}/> );

    return (
        <div className="mt-8 md:w-3/5 md:mt-0">
            {patients && patients.length ? (
                <>
                    <h2 className="font-black text-center text-2xl">Listado Pacientes</h2>
                    <p className="font-bold text-center mt-4 mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600">Pacientes y Citas</span>
                    </p>
                    <div className="md:max-h-screen md:overflow-y-scroll">
                        {
                            /* {listOfPatients} */
                            patients.map(patient => (
                                    <Patient 
                                        key={patient.id} 
                                        patient={patient}
                                        setPatient={setPatient}
                                        deletePatient={deletePatient}
                                    />
                                )
                            )
                        }
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-center text-2xl">Aún no hay pacientes</h2>
                    <p className="font-bold text-center mt-4 mb-10">
                        Añade un nuevo paciente y {''}
                        <span className="text-indigo-600">Aparecerá aquí</span>
                    </p>
                </>
            )}

        </div>
    );
}

export default PatientList;