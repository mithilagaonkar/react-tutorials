import React from 'react';


const arrayToDisplay = [1,2,3,4,5,6,7];

const ListComponent = props => {
    return (
        <div>
            {arrayToDisplay.map((ar, idx)  => <button style={{display: "block"}} key={`button-${idx}`} onClick={props.onItemClick}>{ar}</button>)} 
        </div>
    );
}

export default ListComponent;