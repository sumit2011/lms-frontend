import React, { useEffect, useState } from 'react'
import LeaveRequestService from '../service/LeaveRequestService'
import { useNavigate } from 'react-router-dom';

function GetLeaveRequestByManagerid({ managerid }) {
  const leaveRequestService = LeaveRequestService();
  const [leaveReqList, setLeaveReqList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getLeaveReq(managerid);
  }, [managerid]);

  const getLeaveReq = (managerid) => {
    leaveRequestService.getLeaveRequestByManagerid(managerid).then((response) => {
      setLeaveReqList(response.data);
    })
  }

  const handleVerifyClick = async (event, l, isApproved) => {
    event.preventDefault();
    const remarks = window.prompt("Enter remarks:", l.remarks || "");
    if (isApproved) {
      alert("Leave approved successfully");
    } else {
      alert("Leave rejected successfully");
    }
    leaveRequestService.verifyLeave(l.id, isApproved, remarks);
    navigate('/dashboard');

  };


  return (
    <div className='container'>
      <div className="card shadow mt-4">
        <div className="card-header bg-warning text-dark">Leave Request</div>
        <div className="card-body">
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
                    <td>{l.numberOfDays}</td>
                    <td>{l.leaveType}</td>
                    <td>{l.dateApplied}</td>
                    <td>{l.leaveStatus}</td>
                    <td>{l.remarks}</td>
                    {l.leaveStatus === 'APPROVED' && (
                        <><td><button onClick={(event) => handleVerifyClick(event, l, false)} className='btn btn-danger'>Reject</button></td><td></td></>
                    )}
                    {(l.leaveStatus === 'APPLIED' ) && (
                      <>
                        <td><button onClick={(event) => handleVerifyClick(event, l, true)} className='btn btn-success'>Approve</button></td>
                        <td><button onClick={(event) => handleVerifyClick(event, l, false)} className='btn btn-danger'>Reject</button></td>
                      </>
                    )}
                    {(l.leaveStatus === 'CANCELLED' || l.leaveStatus === 'WITHDRAWN' || l.leaveStatus === 'REJECTED') && (
                      <> <td><button disabled className='btn btn-secondary'>
                        {l.leaveStatus === 'CANCELLED' && 'Cancelled'}
                        {l.leaveStatus === 'WITHDRAWN' && 'Withdrawn'}
                        {l.leaveStatus === 'REJECTED' && 'Rejected'}
                      </button></td><td></td></>
                    )}
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

export default GetLeaveRequestByManagerid