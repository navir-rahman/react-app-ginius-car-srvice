import React from 'react';
import { useForm } from "react-hook-form";
const Addservice = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
        const url =`http://localhost:5000/service/`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    }
    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className='w-50 mx-autp'>
            <h2> please ass aservice</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                <input placeholder='name' className='mb-2' defaultValue="test" {...register("name")} />
                <input placeholder='discription' className='mb-2' {...register("discription", { required: true })} />
                <input placeholder='price' className='mb-2' type="number" {...register("price", { required: true })} />
                <input placeholder='photo url' className='mb-2' type="text" {...register("img", { required: true })} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;