import React, { useEffect, useState } from 'react'
import LeaveRequestService from '../service/LeaveRequestService'
import { useNavigate } from 'react-router-dom';

function GetLeaveHistoryByEmpid(props) {
    const leaveRequestService = LeaveRequestService();
    const [leaveReqList, setLeaveReqList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getLeaveHistory(props.empid);
    }, [props.empid]);

    const getLeaveHistory = (empid) => {
        leaveRequestService.getLeaveHistoryByEmpid(empid).then((response) => {
            setLeaveReqList(response.data);
        })
    }

    const cancelLeaveReq = (event, id) => {
        event.preventDefault();
        leaveRequestService.cancelLeaveReq(id);
        navigate(0);
    }

    const withdrawLeaveReq = (event, id) => {
        event.preventDefault();
        leaveRequestService.withdrawLeave(id);
        navigate(0);
    }

    return (
        <div className='container'>
        <div className='card shadow mt-4  mb-4'>
            <div className="card-header bg-success text-white">Leave History</div>
            <div className='card-body'>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr align="left">
                        <th>empid</th>
                        <th>managerid</th>
                        <th>from</th>
                        <th>to</th>
                        <th>no of days</th>
                        <th>leavetype</th>
                        <th>dateApplied</th>
                        <th>status</th>
                        <th>remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leaveReqList.map(l => (
                            <tr key={l.id} align="left">
                                <td>{l.empid}</td>
                                <td>{l.managerid}</td>
                                <td>{l.fromDate}</td>
                                <td>{l.toDate}</td>
                                <td>{l.noOfDays}</td>
                                <td>{l.leaveType}</td>
                                <td>{l.dateApplid}</td>
                                <td>{l.status}</td>
                                <td>{l.remarks}</td>
                                <React.Fragment>
                                    <td><button onClick={(event) => cancelLeaveReq(event, l.id)} className='btn btn-danger'>Cancel</button></td>
                                    <td><button onClick={(event) => withdrawLeaveReq(event, l.id)} className='btn btn-danger'>Withdraw</button></td>
                                </React.Fragment>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
        </div>
    )
}

export default GetLeaveHistoryByEmpid