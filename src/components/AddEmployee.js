import React from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link, useNavigate } from 'react-router-dom';

function AddEmployee() {
    const service = EmployeeService();
    const [employee, setEmployee] = React.useState({
        empid : 0
    });
    const navigate = useNavigate();

    const changeData = (obj) =>{
        setEmployee({...employee, [obj.target.name] : obj.target.value});
    }

    const submitData = (event) => {
        event.preventDefault();
        if(employee.empid===0 || employee.empid.length===0)
            alert("Invalid employee id");
        else {
         service.addEmployee(employee);
        //  navigate('/getallemployees')
        }
    }

  return (
    <div className="container mt-5">
        <h1 className="text-center mb-4">Add new Employee</h1>
        <form className="mx-auto" style={{maxWidth: "500px"}}>
            <div className="mb-3">
                <label className="form-label">Enter Employee ID</label>
                <input type="text" name="empid" value={employee.empid}
                    onChange={changeData} className="form-control" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Employee First Name</label>
                <input type="text" name="firstName" value={employee.firstName || ""}
                    onChange={changeData} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Employee Last Name</label>
                <input type="text" name="lastName" value={employee.lastName || ""}
                    onChange={changeData} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Employee Mobile No</label>
                <input type="text" name="mobile" value={employee.mobile || ""}
                    onChange={changeData} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Employee Email</label>
                <input type="text" name="email" value={employee.email}
                    onChange={changeData} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Employee Job</label>
                <input type="text" name="job" value={employee.job || ""}
                    onChange={changeData} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Employee Manager ID</label>
                <input type="text" name="managerid" value={employee.managerid || ""}
                    onChange={changeData} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Employee Password</label>
                <input type="text" name="password" value={employee.password || ""}
                    onChange={changeData} className="form-control"/>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-success" onClick={submitData}>Add</button>
                {/* <Link to={"/getallemployees"}>
                    <button type="button" className="btn btn-primary">Cancel</button>
                </Link> */}
            </div>
        </form>
    </div>
  )
}

export default AddEmployee