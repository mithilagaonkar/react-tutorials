import React from 'react';
import VideoItem from './videoitem';

const videolist = (props) =>{
    console.log(props.list);
const renderedlist = props.list.map((li) => <VideoItem key  ={li.id.videoId} item = {li} onVideoSelect = {props.onVideoSelect} />);
    return (
            //<div>{props.list.map((li) => <VideoItem />)}</div>
            <div className="ui relaxed divided list">{renderedlist}</div>
    );
};
export default videolist;