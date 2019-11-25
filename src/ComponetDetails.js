import React from 'react';


const ComponetDetails = (props)=> {
    console.log(props);
    return (
        <div className="comment">
            <a href="bnnb" className="avatar">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content ">
                <a href="/" className="author">
                   {props.name}
            </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                {props.msg}
                </div>
            </div>
        </div>
    );
}

export default ComponetDetails;