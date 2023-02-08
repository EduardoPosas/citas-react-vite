import { useEffect, useState } from 'react';
import Alert from './Alert';

const Form = ({ patients, setPatients, patient, setPatient }) => {

    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [error, setError] = useState(false);

    function idGenerator() {
        const date = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
        return date + random;
    }

    useEffect(() => {
        if (Object.values(patient).length > 0) {
            const { pet, owner, email, date, symptoms, id } = patient;
            setPet(pet);
            setOwner(owner);
            setEmail(email);
            setDate(date);
            setSymptoms(symptoms);
        }
    }, [patient]);

    function handleSubmit(e) {
        e.preventDefault();

        const isFieldsEmpty = [pet, owner, email, date, symptoms].includes('');
        // Form Validation
        if (isFieldsEmpty) {
            setError(true);
            return;
        }

        setError(false);
        // Object from form
        const tempPatient = {
            pet,
            owner,
            email,
            date,
            symptoms,
        };

        // Verify if updating or creating

        if(patient?.id) {
            tempPatient.id = patient.id;
            const updatedPatients = patients.map(patientState => {
                if(patientState.id === tempPatient.id) {
                    return tempPatient;
                }
                return patientState;
            })
            setPatients(updatedPatients);
            setPatient({}); // reset state
        }else {
            tempPatient.id = idGenerator();
            // setPatients(patients => [...patients, patient]); // no need patients as prop
            setPatients([...patients, tempPatient]);
        }

        // Reset Form
        setPet('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');

    }


    return (
        <div className="md:w-2/5">
            <h2 className="text-center font-black text-2xl">Seguimiento Pacientes</h2>
            <p className="text-center font-bold mt-4 mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600">Administralos</span>
            </p>
            <form className="max-w-95 mx-auto mb-10 bg-white rounded-md py-8 px-4 shadow-lg">
                {error && <Alert type='error' message='Todos los campos son obligatorios' />}
                <div className="grid mb-4">
                    <label htmlFor="pet" className="uppercase text-gray-700 font-bold mb-2">Nombre Mascota</label>
                    <input
                        type="text"
                        id="pet"
                        placeholder="Nombre de la mascota"
                        className="border-2 p-2 rounded-md placeholder-gray-400"
                        value={pet}
                        onChange={e => setPet(e.target.value)}
                        required
                    />
                </div>
                <div className="grid mb-4">
                    <label htmlFor="owner" className="uppercase text-gray-700 font-bold mb-2">Nombre Propietario</label>
                    <input
                        type="text"
                        id="owner"
                        placeholder="Nombre del propietario"
                        className="border-2 p-2 rounded-md placeholder-gray-400"
                        value={owner}
                        onChange={e => setOwner(e.target.value)}
                        required
                    />
                </div>
                <div className="grid mb-4">
                    <label htmlFor="email" className="uppercase text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="border-2 p-2 rounded-md placeholder-gray-400"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="grid mb-4">
                    <label htmlFor="sign" className="uppercase text-gray-700 font-bold mb-2">Alta</label>
                    <input
                        type="date"
                        id="sign"
                        className="border-2 p-2 rounded-md placeholder-gray-400"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <div className="grid mb-4">
                    <label htmlFor="symptoms" className="uppercase text-gray-700 font-bold mb-2">Sintomas</label>
                    <textarea
                        id="symptoms"
                        placeholder="Sintomas"
                        className="border-2 p-2 rounded-md placeholder-gray-400 "
                        value={symptoms}
                        onChange={e => setSymptoms(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value={patient?.id ? 'Editar Paciente' : 'Registrar Paciente'}
                    className="bg-indigo-600 w-full p-2 text-white font-bold uppercase hover:bg-indigo-800 transition-colors cursor-pointer"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    )
}

export default Form