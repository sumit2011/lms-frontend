import React from 'react'
import HolidayListService from '../service/HolidayListService';
// import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddHolidayDetail() {
    const service = HolidayListService();
    const [holiday, setHoliday] = React.useState({

    });

    const changeData = (obj) =>{
        setHoliday({...holiday, [obj.target.name] : obj.target.value});
    }

    const submitData = (event) => {
        event.preventDefault();
        if(holiday.id===0 || holiday.id.length===0)
            alert("Invalid holiday id");
        else {
         service.addHoliday(holiday);
        //  navigate('/getallemployees')
        }
    }
  return (
    <div className='container mt-5'>
        <h1 className='text-center mb-4'>Add new Holiday Detail</h1>
        <form className='mx-auto' style={{maxWidth: "500px"}}>
           <div className='mb-3'>
                <label className='form-label'>Enter Holiday ID</label>
                <input type="text" name="id" value={holiday.id || ""}
                    onChange={changeData} className='form-control' required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Enter Holiday Details</label>
                <input type="text" name="holidayDetails" value={holiday.holidayDetails || ""}
                    onChange={changeData} className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Enter Holiday Date</label>
                <input type="date" name="holidayDate" value={holiday.holidayDate || ""}
                    onChange={changeData} className='form-control'/>
            </div>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-success' onClick={submitData}>Add</button>
                {/* <Link to={"/getallemployees"}>
                    <button type="button" className="btn btn-primary">Cancel</button>
                </Link> */}
            </div>
        </form>
    </div>
  )
}

export default AddHolidayDetail


//   "id": 0,
//   "holidayDetails": "string",
//   "date": "2025-08-29"