import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetEmployee from './components/GetEmployee';
import AddHolidayDetail from './components/AddHolidayDetail';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/> */}
          {/* <Route path='/getallbooks' element={<GetAllBooks />}/> */}
          <Route path='/addemployee' element={<AddEmployee />}/>
          <Route path='/getemployeebyid/:empid' element={<GetEmployee />}/>
          {/* <Route path='/edit/:id' element={<EditBook />}/> */}
        </Routes>
      </BrowserRouter>
      <AddHolidayDetail/>
    </div>
  );
}

export default App;
