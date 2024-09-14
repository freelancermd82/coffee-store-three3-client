import React from 'react'
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h3 className='text-3xl font-extrabold'>Add a Coffee:</h3>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-2 mb-4'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className="">
                            <input type="text" name='name' className="input input-bordered w-full" placeholder="coffee name" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name='quantity' className="input input-bordered w-full" placeholder="Available quantity" />
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
                            <input type="text" name='supplier' className="input input-bordered w-full" placeholder="supplier name" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className="">
                            <input type="text" name='taste' className="input input-bordered w-full" placeholder="Taste" />
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
                            <input type="text" name='category' className="input input-bordered w-full" placeholder="Category name" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Details</span>
                        </label>
                        <label className="">
                            <input type="text" name='details' className="input input-bordered w-full" placeholder="Details" />
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
                            <input type="text" name='photo' className="input input-bordered w-full" placeholder="photo url" />
                        </label>
                    </div>
                </div>
                <input className='btn btn-block bg bg-orange-300' type="submit" value="Add Coffee" />
            </form>
        </div>
    )
}

export default AddCoffee
