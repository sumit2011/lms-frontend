import React, { use, useEffect } from 'react'
import HolidayListService from '../service/HolidayListService'
import { useState } from 'react';

function GetHolidayList() {
    const service = HolidayListService();
    const [holidays, setHolidays] = useState([]);

    useEffect(()=>{
        getHolidayList();
    });

    const getHolidayList = () => {
        service.getHolidays().then((response)=>{
            setHolidays(response.data);
        });
    }

    const formatDate = (date) => {
        // Format date to a more readable format (e.g., August 28, 2025)
        const d = new Date(date);
        return d.toLocaleDateString(); // You can adjust this format as needed
    };

  return (
    <div className='container'>
        <table className="table table-striped table-hover">
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
                    <td>{formatDate(h.holidayDate)}</td> 
                    <td>{h.holidayDetails}</td>            
                 </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default GetHolidayList