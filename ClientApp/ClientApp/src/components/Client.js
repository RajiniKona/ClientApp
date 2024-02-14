import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Client() {
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const url = "https://localhost:7283/Client";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResults(json.response);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [results]);

    const handleDelete = (id) => {
        const confirm = window.confirm('Would you want to Delete');
        if (confirm) {
            Axios.delete('https://localhost:7283/Client/' + id).then(res => {
                navigate('/');
            }).catch(function (error) {
                console.log("error");
            }
            );
        }
    }
    return (
        <>
            <div className="card shadow border-0 mt-4">
                <div className="card-header bg-secondary bg-color ml-0 py-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-white py-2">Clients</h1>
                        </div>
                    </div>
                </div>
                <div className="card-body p-4">
                    <div className="row pb-3">
                        <div className="col-6">
                        </div>
                        <div className="col-6 text-end">
                            <Link to="/new-client" className="btn btn-success">Create New Client</Link>
                        </div>
                    </div>
                    <table className='table table-stipend'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>WebSite</th>
                                <th>Director Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results ? results.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.webSite}</td>
                                    <td>{item.directorName}</td>
                                    <td>{item.emailAddress}</td>
                                    <td>
                                        <Link to={`/update-client/${item.id}`} className='btn btn-primary me-2'>Edit</Link>
                                        <button onClick={e => handleDelete(item.id)} className='btn btn-danger me-2'>Delete</button>
                                    </td>
                                </tr>
                            )) : "No Records Found"}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
