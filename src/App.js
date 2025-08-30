import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetEmployee from './components/GetEmployeeByManagerid';
import AddHolidayDetail from './components/AddHolidayDetail';
import GetHolidayList from './components/GetHolidayList';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ApplyLeaveForm from './components/ApplyLeaveForm';
import GetEmployeeByManagerid from './components/GetEmployeeByManagerid';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/addemployee' element={<AddEmployee />}/>
          <Route path='/getemployeebyid/:empid' element={<GetEmployee />}/>
          <Route path='/getholidaylist' element={<GetHolidayList />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/applyleave' element={<ApplyLeaveForm/>}/>
          <Route path='/addholiday' element={<AddHolidayDetail/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          
        </Routes>
      </BrowserRouter>
      {/* <AddHolidayDetail/>
      <Login/> */}
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
