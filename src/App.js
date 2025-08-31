import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddHolidayDetail from './components/AddHolidayDetail';
import GetHolidayList from './components/GetHolidayList';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ApplyLeaveForm from './components/ApplyLeaveForm';
import GetEmployeeByManagerid from './components/GetEmployeeByManagerid';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/addemployee' element={<AddEmployee />}/>
          <Route path='/getholidaylist' element={<GetHolidayList />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/applyleave' element={<ApplyLeaveForm/>}/>
          <Route path='/addholiday' element={<AddHolidayDetail/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/employeedetail' element={<EmployeeDetails />} />
          
        </Routes>
      </BrowserRouter>
      {/* <AddHolidayDetail/>
      <Login/> */}
      {/* <Dashboard/> */}
      {/* <EmployeeDetails /> */}
    </div>
  );
}

export default App;
