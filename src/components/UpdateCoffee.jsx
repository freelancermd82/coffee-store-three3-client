import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h3 className='text-3xl font-extrabold'>Update a Coffee:</h3>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-2 mb-4'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className="">
                            <input type="text" name='name' className="input input-bordered w-full" defaultValue={name} placeholder="coffee name" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name='quantity' className="input input-bordered w-full" defaultValue={quantity} placeholder="Available quantity" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex gap-2 mb-4'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label className="">
                            <input type="text" name='supplier' className="input input-bordered w-full" defaultValue={supplier} placeholder="supplier name" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className="">
                            <input type="text" name='taste' className="input input-bordered w-full" defaultValue={taste} placeholder="Taste" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex gap-2 mb-4'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Category</span>
                        </label>
                        <label className="">
                            <input type="text" name='category' className="input input-bordered w-full" defaultValue={category} placeholder="Category name" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Details</span>
                        </label>
                        <label className="">
                            <input type="text" name='details' className="input input-bordered w-full" defaultValue={details} placeholder="Details" />
                        </label>
                    </div>
                </div>
                {/* form photo row */}
                <div className='mb-4'>
                    <div className='form-control w-full'>
                        <label className="label">
                            <span className='label-text'>Photo</span>
                        </label>
                        <label className="">
                            <input type="text" name='photo' className="input input-bordered w-full" defaultValue={photo} placeholder="photo url" />
                        </label>
                    </div>
                </div>
                <input className='btn btn-block bg bg-orange-300' type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;