import './videolist.css';
import React from 'react';


const videoitem = (props) =>
{
//    console.log(props.item.snippet.thumbnails.high.url);
    debugger;
    return (
      <div onClick = {()=>props.onVideoSelect(props.item)} className="video-item item">
       
            <img alt={props.item.snippet.title} className="ui image" src = {props.item.snippet.thumbnails.high.url}/>
        <div className="content">
            <div className="header">{props.item.snippet.title}</div>
        </div>
       </div> 
    );
}

export default videoitem;