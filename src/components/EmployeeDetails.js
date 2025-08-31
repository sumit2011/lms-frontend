import React, { useState } from 'react'
import GetLeaveHistoryByEmpid from './GetLeaveHistoryByEmpid';

function EmployeeDetails(props) {


    return (
        <>
            <div className='container'>
                <div className='card shadow mt-4'>
                    <div className='card-header bg-info text-white'>Employee Details</div>
                    <div className='card-body' align='left'>
                        <div className="row mb-2">
                            <div className="col-sm-4 fw-bold">Employee ID:</div>
                            <div className="col-sm-8">{props.empid}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-4 fw-bold">First Name:</div>
                            <div className="col-sm-8">{props.firstName}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-4 fw-bold">Last Name:</div>
                            <div className="col-sm-8">{props.lastName}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-4 fw-bold">Mobile:</div>
                            <div className="col-sm-8">{props.mobile}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-4 fw-bold">Email:</div>
                            <div className="col-sm-8">{props.email}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-4 fw-bold">Job:</div>
                            <div className="col-sm-8">{props.job}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-4 fw-bold">Manager Id:</div>
                            <div className="col-sm-8">{props.managerid}</div>
                        </div>
                    </div>

                </div>
            </div>
            <GetLeaveHistoryByEmpid empid={props.empid} />
        </>
    )
}

export default EmployeeDetails