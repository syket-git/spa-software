import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './Users.css';



const Users = (props) => {
    const {name, img, email, phone, company, salary} = props.data

    
    return (
        <div className="users">
            <div className="introduce">
                <div className="img">
                    <img src={img} alt=""/>
                </div>
                <div className="name">
                    <h2>{name}</h2>
                </div>
                <div className="button">
                    <button id="button" onClick={() => props.handleClicked(props.data)}> <FontAwesomeIcon icon={faUserPlus} /> add friend</button>
                </div>
             
            </div>
           
            

            <div className="info">
                <h5 className="email">Email: {email}</h5>
                <h5 className="mobile">Mobile: {phone}</h5>
                <h5 className="c-name">Company Name: {company.name}</h5>
                <h5 className="salary">Salary: {salary}</h5>
            </div>
        </div>
    );
    };


export default Users;