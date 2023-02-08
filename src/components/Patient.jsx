import { useEffect } from "react";

const Patient = ({ patient, setPatient, deletePatient }) => {

    const { pet, owner, email, date, symptoms, id } = patient;

    function formatDate() {
        const stringDate = new Date(date);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        const formatedDate = new Intl.DateTimeFormat('es-ES', options).format(stringDate);
        return formatedDate;
    }

    function handleDelete() {
        swal({
            title: "¿Deseas eliminar el paciente?",
            text: "Una vez eliminado, No lo vas a poder recuperar!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Poof! La mascota fue elminada!", {
                    icon: "success",
                }).then(() => deletePatient(id))
            } else {
                swal("Mascota no eliminada!");
            }
        });
    }


    return (
        <div className="max-w-95 mx-auto bg-white rounded-md py-8 px-4 mb-4 shadow-lg">
            <p className="uppercase font-bold mb-2">
                Nombre: {''}
                <span className="font-normal normal-case">{pet}</span>
            </p>
            <p className="uppercase font-bold mb-2">
                Propietario: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>
            <p className="uppercase font-bold mb-2">
                Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="uppercase font-bold mb-2">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{formatDate()}</span>
            </p>
            <p className="uppercase font-bold mb-2">
                Sintomas: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>
            <div className="flex justify-between items-center mt-5">
                <button
                    type="button"
                    className="bg-indigo-600 px-12 py-2 text-white uppercase font-bold hover:bg-indigo-700 transition-colors"
                    onClick={() => setPatient(patient)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-600 px-10 py-2 text-white uppercase font-bold hover:bg-red-700 transition-colors"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Patient;