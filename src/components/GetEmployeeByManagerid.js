import React, { use, useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { useEffect } from 'react';

function GetEmployeeByManagerid(props) {
    const [employeeList, setEmployeeList] = useState([]);
    const service = EmployeeService();

    useEffect(() => {
        getEmployees(props.managerid);
    }, [props.managerid]);


    const getEmployees = (managerid) => {
        service.getEmployeeByManagerid(managerid).then((response) => {
            setEmployeeList(response.data);
        });
    }

    return (
        <div className='container'>
            <div className="card shadow mt-4">
                <div className="card-header bg-success text-white">Employees Details</div>
                <div className="card-body">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr align="left">
                                <th>EMPLOYEE ID</th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>MOBILE NO</th>
                                <th>EMAIL</th>
                                <th>JOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeeList.map(employee => (
                                    <tr key={employee.empid} align="left">
                                        <td>{employee.empid}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.mobile}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.job}</td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GetEmployeeByManagerid