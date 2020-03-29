import React from 'react';

const person = (props) =>{
    return(
       <div>
            <h1>Welcome,{props.name}</h1>
        <p>
            Hope, you are doing well. Your age is,{props.age}.
        </p>
        </div>

    );
}

export default person;