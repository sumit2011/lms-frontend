import React, { useEffect, useState } from 'react';
import EmployeeService from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import GetLeaveRequestByManagerid from './GetLeaveRequestByManagerid';
import GetLeaveHistoryByEmpid from './GetLeaveHistoryByEmpid';
import GetHolidayList from './GetHolidayList';
import AddHolidayDetail from './AddHolidayDetail';
import ApplyLeaveForm from './ApplyLeaveForm';
import GetEmployeeByManagerid from './GetEmployeeByManagerid';
import AddEmployee from './AddEmployee';

function Dashboard() {
  const [employee, setEmployee] = useState({});
  const [activeSection, setActiveSection] = useState(null);
  const employeeservice = EmployeeService();
  const job = sessionStorage.getItem("job");
  const managerid = sessionStorage.getItem("managerid");
  const empid = sessionStorage.getItem("empid");
  const navigate = useNavigate();

  useEffect(() => {
    if (empid) {
      employeeservice.getEmployeeById(empid)
        .then(response => setEmployee(response.data));
    }
  }, [empid]);

  const renderSection = () => {
    switch (activeSection) {
      case 'addHolidayDetail':
        return <AddHolidayDetail />;
      case 'getHolidayList':
        return <GetHolidayList />;
      case 'getLeaveRequestByManager':
        return <GetLeaveRequestByManagerid managerid={empid} />;
      case 'getLeaveHistoryByEmp':
        return <GetLeaveHistoryByEmpid empid={empid} />;
      case 'applyLeaveForm':
        return <ApplyLeaveForm empid={empid} managerid={managerid} />;
      case 'getEmployeeByManager':
        return <GetEmployeeByManagerid managerid={empid} />;
      case 'addEmployee':
        return <AddEmployee />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-md-12 text-center">
          <h2>Welcome, {employee.firstName || "Employee"}!</h2>
          <p className="lead">{job === 'manager' ? 'Manager' : 'Employee'}</p>
        </div>
      </div>
      <div className="row mb-4">
       
        <div className="col-md-3">
          <button className="btn btn-info w-100" onClick={() => setActiveSection('getHolidayList')}>
            Get Holiday List
          </button>
        </div>
        {job === 'manager' && (
          <>
           <div className="col-md-3">
          <button className="btn btn-secondary w-100" onClick={() => setActiveSection('addHolidayDetail')}>
            Add Holiday Detail
          </button>
        </div>
            <div className="col-md-3">
              <button className="btn btn-warning w-100" onClick={() => setActiveSection('getLeaveRequestByManager')}>
                Get Leave Requests
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-success w-100" onClick={() => setActiveSection('getEmployeeByManager')}>
                Get Employees
              </button>
            </div>
          </>
        )}
        {job !== 'manager' && (
          <>
            <div className="col-md-3">
              <button className="btn btn-warning w-100" onClick={() => setActiveSection('applyLeaveForm')}>
                Apply for Leave
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-success w-100" onClick={() => setActiveSection('getLeaveHistoryByEmp')}>
                Get Leave History
              </button>
            </div>
          </>
        )}
      </div>

      <div className="row">
        <div className="col-md-12">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
