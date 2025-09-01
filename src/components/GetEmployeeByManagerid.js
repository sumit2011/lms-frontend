import React, { use, useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { useEffect } from 'react';
import EmployeeDetails from './EmployeeDetails';

function GetEmployeeByManagerid({managerid}) {
    const [employeeList, setEmployeeList] = useState([]);
    const service = EmployeeService();
    const [employee, setEmployee] = useState();
    useEffect(() => {
        getEmployees(managerid);
    }, [managerid]);


    const getEmployees = (managerid) => {
        service.getEmployeeByManagerid(managerid).then((response) => {
            setEmployeeList(response.data);
        });
    }

    const handleViewDetails = (emp) => {
        setEmployee(emp);
    };
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
                                employeeList.map(emp => (
                                    <tr key={emp.empid} align="left">
                                        <td>{emp.empid}</td>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.mobile}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.job}</td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => handleViewDetails(emp)} >View Details</button>
                                        </td>
                                    

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {employee && (
                <EmployeeDetails
                    empid={employee.empid}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    mobile={employee.mobile}
                    email={employee.email}
                    job={employee.job}
                    managerid={employee.managerid}
                  />
            )}
        </div>
    )
}

// empid, firstName, lastName, mobile, email, job, managerid

export default GetEmployeeByManagerid