import React, { useState } from 'react'
import LeaveRequestService from '../service/LeaveRequestService'
import { useNavigate } from 'react-router-dom';

function ApplyLeaveForm(props) {
    const leaveRequestService = LeaveRequestService();
    const navigate = useNavigate();

    const initialState = {
        id: props.id || '',
        empid: props.empid || '',
        managerid: props.managerid || '',
        fromDate: '',
        toDate: '',
        leaveType: '',
        remarks: '',
        numberOfDays: 0,
        dateApplied: '',
        leaveStatus: 'APPLIED',
    };
    const [leaveReq, setLeaveReq] = useState(initialState);
    const changeData = (obj) => {
        const { name, value } = obj.target;
        setLeaveReq(prev => {
            const updated = { ...leaveReq, [name]: value };
            if (name === 'fromDate' || name === 'toDate') {
                const { fromDate, toDate } = updated;
                if (fromDate && toDate) {
                    const days = calculateDays(fromDate, toDate);
                    updated.numberOfDays = days;
                }
            }
            return updated;
        });

    };
    const submitData = (event) => {
        event.preventDefault();
        if (!leaveReq.id) {
            alert("fill the complete form!");
        } else {
            leaveRequestService.applyForLeave(leaveReq);
            navigate('/');
        }
    }
    return (
        <div className='container'>
        <div className='card shadow mt-4'>
            
            <div className='card-header bg-warning text-white'>Apply for leave</div>
            <div className='card-body' align = 'left'>
            <form className='mx-auto' style={{ maxWidth: "500px" }}>
                <div className='mb-2'>
                    <label className='form-label'>From</label>
                    <input type='date' name='fromDate' value={leaveReq.fromDate}
                        onChange={changeData} className='form-control' required />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>To</label>
                    <input type='date' name='toDate' value={leaveReq.toDate}
                        onChange={changeData} className='form-control' required />
                </div>
                <div className="mb-2">
                    <label>Type</label>
                    <select name="leaveType" value={leaveReq.leaveType} className="form-select"
                        onChange={changeData}>
                        <option value="CASUAL">Casual</option>
                        <option value="MEDICAL">Medical</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label>Remarks</label>
                    <textarea name="remarks" value={leaveReq.remarks} onChange={changeData}
                        className="form-control" />
                </div>
                <div className="mb-2">
                    <label>Number of Days</label>
                    <input type="number" name="numberOfDays" value={leaveReq.numberOfDays} readOnly className="form-control" />
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={submitData}>Apply</button>
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

// function to calulate no of days;
function calculateDays(start, end) {
    const sd = new Date(start);
    const ed = new Date(end);
    const diff = ed - sd;
    return diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) + 1 : 0;
}

export default ApplyLeaveForm