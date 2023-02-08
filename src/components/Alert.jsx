
const Alert = ({type, message}) => {
    return (
        type === 'error' 
        ? <p className="bg-red-500 text-white py-2 px-2 uppercase text-xs text-center font-bold mb-4">{message}</p> 
        : <p className="bg-green-500 text-white py-4 px-2 uppercase">{message}</p>
    );
}

export default Alert;