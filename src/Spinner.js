import React from 'react';

const Spinner = (props) => {
    console.log(props.message);
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}...
            </div>
        </div>
    );
};

export default Spinner;