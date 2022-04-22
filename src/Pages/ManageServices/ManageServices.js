import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices]= useServices();

    const handleDelet = id =>{
        const proceed = window.confirm("are you sure?")
    if(proceed){
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
             const remaining = services.filter(service => service._id !== id )
             setServices(remaining);
        })
    }
    }
    return (
        <div>
            <h2>Manage your Services</h2>

            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={()=>handleDelet(service._id)}>x</button></h4>
                     </div>) 
            }
        </div>
    );
};

export default ManageServices;