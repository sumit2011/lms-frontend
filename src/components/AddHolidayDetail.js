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
        if(holiday.holidayDetails===0 || holiday.holidayDetails.length===0 || holiday.date.length===0)
            alert("Invalid holiday details");   
        else {
            console.log(holiday);
         service.addHoliday(holiday);
         alert("Holiday added successfully");
        }
    }
  return (

    <div className='container mt-5'>
        <div className="card shadow">
              <div className="card-header bg-secondary text-white">Add Holiday</div>
        <div className="card-body">
        <form className='mx-auto' style={{maxWidth: "500px"}}>
            <div className='mb-3'>
                <label className='form-label'>Enter Holiday Details</label>
                <input type="text" name="holidayDetails" value={holiday.holidayDetails || ""}
                    onChange={changeData} className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Enter Holiday Date</label>
                <input type="date" name="date" value={holiday.date || ""}
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
    </div>
    </div>
  )
}

export default AddHolidayDetail

