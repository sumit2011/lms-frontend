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

  return (
    <div className="container mt-4">
      {job === 'manager' ? (
        <div className="row">
          <div className="col-md-6 mb-4">
                <AddHolidayDetail />
          </div>
          <div className="col-md-6 mb-4">
                <GetHolidayList />
          </div>
          {/* <AddEmployee /> */}
          <GetEmployeeByManagerid managerid={empid} />
          <GetLeaveRequestByManagerid managerid={empid} />

        </div>
          ) : (  
        <div className="row">
          <div className="col-md-6 mb-4">
            <ApplyLeaveForm empid={empid} managerid={managerid} />
          </div>
          <div className="col-md-6 mb-4">
            <GetHolidayList />
          </div>
          <GetLeaveHistoryByEmpid empid={empid} />
        </div>
         )}
    </div>
  );
}

export default Dashboard;