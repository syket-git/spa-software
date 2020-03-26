import React, { useState } from 'react';
import fakeData from '../../fakeData';
import "./Content.css";
import Users from '../users/Users';
import Summery from '../summery/Summery';


const Content = () => {
    const [data, setData] = useState(fakeData);
    const [friend, setFriend] = useState([]);

    const handleClicked = (data) => {
        console.log("clicked", data)
            const newFriend = [...friend, data];
            setFriend(newFriend);
        
        
            
        
    }
    return (
        <div className="content">
            <div className="user-info">
                
                { 
                <ul>
                    {
                        data.map(data => <Users
                            handleClicked = {handleClicked}
                            data={data}></Users> )
                    }
                </ul>
                }
            </div>
            <div className="summery">
                <Summery friend={friend}></Summery>
            </div>
        </div>
    );
};

export default Content;