import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';


function Login() {
    const [login, setLogin] = useState({
        empid: '',
        password: '',
        job: ''
    });
    const service = EmployeeService();
    const navigate = useNavigate();

    const onInputChange = (obj) => {
        setLogin({ ...login, [obj.target.name]: obj.target.value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (login.empid.length === 0 || login.password.length === 0)
            alert("Username/password fields must not be empty");
        else {
            service.loginValidate(login).then((response) => {
                sessionStorage.setItem("job", response.data.job);
                sessionStorage.setItem("managerid", response.data.managerid);
                sessionStorage.setItem("empid",response.data.empid);
                sessionStorage.setItem("loginstatus", true);
                navigate("/dashboard");
            });
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Login</h3>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Enter Username</label>
                                    <input
                                        type="text"
                                        name="empid"
                                        className="form-control"
                                        value={login.empid}
                                        onChange={onInputChange}
                                        placeholder="Employee ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={login.password}
                                        onChange={onInputChange}
                                        placeholder="Password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
