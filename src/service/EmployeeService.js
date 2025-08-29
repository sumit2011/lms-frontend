import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const EMPLOYEE_URI = "http://localhost:8484/lms/employees";


function EmployeeService() {
    const navigate = useNavigate();
    const getEmployees = () => {
        return axios.get(EMPLOYEE_URI);
    };
    const addEmployee = (employee) => {
        return axios.post(EMPLOYEE_URI+`/addemployee`,employee);
    };
 
    const getEmployeeById = (empid) => {
        return axios.get(EMPLOYEE_URI+`/getemployeebyid/${empid}`);
    }
   
    const loginValidate = async (login) => {
         return await axios.post(EMPLOYEE_URI+"/validate",login);
    }
  return Object.freeze({getEmployees, addEmployee,getEmployeeById, loginValidate});
  
}

export default EmployeeService
