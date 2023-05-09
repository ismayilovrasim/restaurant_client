import React from 'react';
// import Button from 'react-bootstrap/Button';
import {FaUser} from 'react-icons/fa'

function Example() {

    return (
        <>
            <button href='/' className="btn btn-about" data-bs-toggle="modal" data-bs-target="#ModalForm">
                <FaUser/>
            </button>

            <div className="modal fade" id="ModalForm" tabIndex="-1" aria-labelledby="ModalFormLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            <div className="myform bg-dark">
                                <h1 className="text-center">Login Form</h1>
                                <form>
                                    <div className="mb-3 mt-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <button type="submit" className="btn mt-3">LOGIN</button>
                                    <p className='not_a_member'>Not a member? <a href="/">Signup now</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Example