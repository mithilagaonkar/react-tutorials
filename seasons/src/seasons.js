import './seasons.css';
import React from 'react';

//helper function
const FindSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const Seasons = (props) => {
    console.log(props.lat);
    console.log(new Date().getMonth());
    var answer = FindSeason(props.lat, new Date().getMonth());
    var duplicatevar = FindSeason(props.lat, new Date().getMonth());
    answer = (answer === 'summer' ? 'Lets hit the Beach' : 'Its chilly');
    const image = (answer === 'summer')? 'sun' : 'snowflake';
    console.log(answer);
    //return <div> <i className ="{image} icon"></i><h1>{answer}</h1></div>;
    return <div className = {`seasons ${duplicatevar}`}> <i className ={`icon-left massive ${image} icon`}></i><h1>{answer}</h1><i className ={`icon-right massive ${image} icon`}></i></div>;
}
export default Seasons;