import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

function UpdateClient() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id:'',
        name: '',
        website: '',
        directorName: '',
        emailAddress: ''
    });
    const { id } = useParams();
    useEffect(() => {
        const url = "https://localhost:7283/Client/" + id;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setValues(json.response);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put('https://localhost:7283/Client', values).then(res => {
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
                            <h1>Update Client</h1>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit} className='row'>
                        <div className="border p-3">
                            <div className="form-floating py-2 col-12">
                                <input type="text" name='name' className="form-control border-0 shadow" placeholder='Enter Name' value={values.name}
                                    onChange={e => setValues({ ...values, name: e.target.value })}
                                required/>
                                <label htmlFor="name" className="ms-2">Name</label>
                            </div>
                            <div className='form-floating py-2 col-12'>
                                <input type="text" name='webSite' className="form-control border-0 shadow" placeholder='Enter WebSite'
                                    onChange={e => setValues({ ...values, website: e.target.value })} value={values.webSite} required/>
                                <label className="ms-2" htmlFor="webSite">WebSite</label>
                            </div>
                            <div className='form-floating py-2 col-12'>

                                <input type="text" name='directorName' className="form-control border-0 shadow" placeholder='Enter Director Name'
                                    onChange={e => setValues({ ...values, directorName: e.target.value })} value={values.directorName} required/>
                                <label htmlFor="directorName">Director Name</label>
                            </div>
                            <div className='form-floating py-2 col-12'>
                                <input type="text" name='emailAddress' className="form-control border-0 shadow" placeholder='Enter Email Address'
                                    onChange={e => setValues({ ...values, emailAddress: e.target.value })} value={values.emailAddress} required/>
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

export default UpdateClient;