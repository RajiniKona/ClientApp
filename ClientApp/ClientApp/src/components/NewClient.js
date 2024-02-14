import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function NewClient() {
    const navigate = useNavigate();
    const initValues = {
        name: '',
        website: '',
        directorName: '',
        emailAddress: ''

    };
    const [values, setValues] = useState(initValues);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
            Axios.post('https://localhost:7283/Client', values).then(res => {
                console.log(res);
                navigate('/');
            }).catch(function (error) {
                console.log("error");
            }
            );
    }
    return (
        <>
            <div className="card shadow border-0 mt-4">
                <div className="card-header bg-secondary bg-color ml-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Add New Client</h1>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit} className='row'>
                        <div className="border p-3">
                            <div className="form-floating py-2 col-12">
                                <input type="text" name='name' className="form-control border-0 shadow" placeholder='Enter Name' required
                                    onChange={e => setValues({ ...values, name: e.target.value })}
                                />
                               
                                <label htmlFor="name" className="ms-2">Name</label>
                            </div>
                            <div className='form-floating py-2 col-12'>
                                <input type="text" name='webSite' className="form-control border-0 shadow" placeholder='Enter WebSite' required
                                    onChange={e => setValues({ ...values, website: e.target.value })} />
                                <label className="ms-2" htmlFor="webSite">WebSite</label>
                            </div>
                            <div className='form-floating py-2 col-12'>
                               
                                <input type="text" name='directorName' className="form-control border-0 shadow" placeholder='Enter Director Name' required
                                    onChange={e => setValues({ ...values, directorName: e.target.value })} />
                                <label htmlFor="directorName">Director Name</label>
                            </div>
                            <div className='form-floating py-2 col-12'>                               
                                <input type="text" name='emailAddress' className="form-control border-0 shadow" placeholder='Enter Email Address' required
                                    onChange={e => setValues({ ...values, emailAddress: e.target.value })} />
                                <label htmlFor="emailAddress">Email</label>
                            </div>

                            <div className="row pt-2">
                                <div className="col-1">
                                    <button className='btn btn-success'>Submit</button>
                                </div>
                                <div className="col-6 col-md-3">
                                    <Link to="/" className='btn btn-primary ms-3'>Back To List</Link>
                                </div>
                            </div>
                        </div>                      
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewClient;