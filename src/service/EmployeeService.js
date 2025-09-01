import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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

    const getEmployeeByManagerid = (managerid) => {
        return axios.get(EMPLOYEE_URI+`/geremployeebymanagerid/${managerid}`);
    }
   
    const loginValidate = async (login) => {
         return await axios.post(EMPLOYEE_URI+"/loginvalidate",login);
    }
  return Object.freeze({
    getEmployees, 
    addEmployee,
    getEmployeeById, 
    loginValidate , 
    getEmployeeByManagerid
});
  
}

export default EmployeeService
