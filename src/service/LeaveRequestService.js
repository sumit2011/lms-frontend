import axios from 'axios'
import React from 'react'

const   LEAVEREQUEST_URI = "http://localhost:8484/lms/leaverequest";

function LeaveRequestService() {

    const applyForLeave = (leaverequest) =>{
        return axios.post(LEAVEREQUEST_URI+`/apply`,leaverequest);
    }
    const cancelLeaveReq = (id)=>{
        return axios.put(LEAVEREQUEST_URI+`/cancel/${id}`,null);
    }
    const withdrawLeave = (id)=>{
        return axios.put(LEAVEREQUEST_URI+`/withdraw/${id}`,null);

    }
    const verifyLeave = (id,isApproved,remarks)=>{
        return axios.put(LEAVEREQUEST_URI+`/verify/${id}?isApproved=${isApproved}&remarks=${remarks}`);
    }
    const approveLeave = ()=>{

    }
    const rejectLeave = () =>{

    }
    const getLeaveHistoryByEmpid = (empid) =>{
        return axios.get(LEAVEREQUEST_URI+`/viewbyempid/${empid}`);
    }
    const getLeaveRequestByManagerid = (managerid) => {
        return axios.get(LEAVEREQUEST_URI+`/getbymanagerid/${managerid}`);
    }

  return Object.freeze({
        applyForLeave,
        cancelLeaveReq,
        withdrawLeave,
        approveLeave,
        rejectLeave,
        verifyLeave,
        getLeaveHistoryByEmpid,
        getLeaveRequestByManagerid
  })
}

export default LeaveRequestService