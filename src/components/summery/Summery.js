import React from 'react';

const Summery = (props) => {
    const friend = props.friend;
    
        return (
            <div>
                <h2>Added Friend: {friend.length}</h2>
            </div>
        );
    
    
};

export default Summery;