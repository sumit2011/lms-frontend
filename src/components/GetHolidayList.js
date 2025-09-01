import React, { use, useEffect } from 'react'
import HolidayListService from '../service/HolidayListService'
import { useState } from 'react';

function GetHolidayList() {
    const service = HolidayListService();
    const [holidays, setHolidays] = useState([]);

    useEffect(()=>{
        getHolidayList();
    },[]);

    const getHolidayList = () => {
        service.getHolidays().then((response)=>{
            setHolidays(response.data);
        });
    }

    

  return (
    <div className='container mt-5'>
    <div className=' card shadow mt-4'>
        <div className="card-header bg-info text-white">Holiday List</div>
        <table className="table table-striped table-hover card-body">
            <thead>
                <tr align="left">
                <th>DATE</th>
                <th>OCCASION</th> 
                </tr>
            </thead>
            <tbody>
                {
                    holidays.map(h => (
                <tr key={h.id} align="left">
                    <td>{h.date}</td> 
                    <td>{h.holidayDetails}</td>            
                 </tr>
                )) }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default GetHolidayList