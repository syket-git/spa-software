import React from 'react';
import './summery.css';

const Summery = (props) => {
    const friend = props.friend;
    console.log(friend);
    const friendSalary = friend.reduce((total, friend) => total + parseInt(friend.salary), 0);
    const fname = friend.map(friend => <li>{friend.name}</li>);
        return (
            <div className="Summery">
                
                <h4>Total Friend: {friend.length}</h4>
                <h4>Annual Salary: {friendSalary}</h4>
                <h4>{fname}</h4> <br/>
            </div>
        );
    
    
};

export default Summery;