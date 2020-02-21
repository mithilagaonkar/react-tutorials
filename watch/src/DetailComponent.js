import React from 'react';

const DetailComponent = props => {
    return (
        <div style={{marginLeft: 20, width: 100, height: 100, border: "1px solid black"}}>
            {props.data}
        </div>
    );
}

export default DetailComponent;