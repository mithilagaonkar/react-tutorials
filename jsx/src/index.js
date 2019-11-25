//import dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component(function component in this case)
const App = () => {
    var msg = "hey...y dont you click me?";
    var arr = [1, 2, 3];
    var sty = { color: 'red', backgroundColor: 'pink' };
    var a = sty;
    return (
        <div>
            <label className="name" htmlFor="name">Name</label>
            <input id="name" />
            <button type="submit" style={a} >{msg}</button>
        </div>
    );
};

//Show it to the user
ReactDOM.render(
    <App />, document.querySelector("#root")
);

