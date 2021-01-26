import React from 'react';
import axios from 'axios';

const SucursalDisplay = (props) => {
    const [sucursales, setSucursales] = React.useState({})
    React.useEffect(() => {
        axios.get(`http://localhost:8080/inicio?latitud=${props.lat}&longitud=${props.lon}`)
    .then(response => {
        setSucursales(response.data)
    })
    .catch(error => console.log(error))
    })
    return (
        <div>
            <i>Su sucursal mas cercana es:</i>
            <div >{sucursales ? sucursales.direccion : "aguarde..."}</div>
        </div>
    ); 
};

export default SucursalDisplay;