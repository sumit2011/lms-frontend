import React, { useEffect, useState } from 'react'
import LeaveRequestService from '../service/LeaveRequestService'
import { useNavigate } from 'react-router-dom';

function GetLeaveRequestByManagerid(props) {
  const leaveRequestService = LeaveRequestService();
  const [leaveReqList, setLeaveReqList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getLeaveReq(props.managerid);
  }, [props.managerid]);

  const getLeaveReq = (managerid) => {
    leaveRequestService.getLeaveRequestByManagerid(managerid).then((response) => {
      setLeaveReqList(response.data);
    })
  }

  const approveLeaveReq = (event, id) => {
    event.preventDefault();
    leaveRequestService.approveLeave(id);
    navigate(0);
  }

  const rejectLeaveReq = (event, id) => {
    event.preventDefault();
    leaveRequestService.rejectLeave(id);
    navigate(0);
  }

  const verifyLeave = (event , id , approve,remarks) =>{
    event.preventDefault();
    leaveRequestService.verifyLeave(id,approve,remarks);
    navigate(0);
  }
  
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
                <td>{l.noOfDays}</td>
                <td>{l.leaveType}</td>
                <td>{l.dateApplid}</td>
                <td>{l.status}</td>
                <td>{l.remarks}</td>
                <React.Fragment>
                  <td><button onClick={(event) => approveLeaveReq(event, l.id)} className='btn btn-success'>Approve</button></td>
                  <td><button onClick={(event) => rejectLeaveReq(event, l.id)} className='btn btn-danger'>Reject</button></td>
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

export default GetLeaveRequestByManagerid