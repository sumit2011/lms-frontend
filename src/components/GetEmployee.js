import React, { use } from 'react'
import EmployeeService from '../service/EmployeeService';
import { useEffect } from 'react';

function GetEmployee() {
    const [employee, setEmployee] = React.useState({});
    const service = EmployeeService();

    const empid = "suth28";
    useEffect(() => {
  getEmployeeById(empid);
}, [empid]);
    const getEmployeeById =(empid) =>{
        service.getEmployeeById(empid).then((response)=>{
            setEmployee(response.data);
        });
    }

  return (
    <div>
        <h1>Employee Details</h1>
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
                <tr key={employee.empid} align="left">
                    <td>{employee.empid}</td>            
                    <td>{employee.firstName}</td>            
                    <td>{employee.lastName}</td>            
                    <td>{employee.mobile}</td>            
                    <td>{employee.email}</td> 
                    <td>{employee.job}</td> 
                 </tr>
                }
            </tbody>
        </table>
    </div>
  )
}

export default GetEmployee