import ReactDOM from 'react-dom';
import React from  'react';
import Seasons from './seasons';
import Spinner from './spinner';

/*const App =() =>{
    
  window.navigator.geolocation.getCurrentPosition(function getposition(position){console.log(position);},function geterr(err){console.log(err);});
  //   window.navigator.geolocation.getCurrentPosition(position => console.log(position),err => console.log(err));

    return (    <div>ya find the location !</div>
    );
}*/

class App extends React.Component{
  /*constructor(props){
    super(props);

    //State is never assign the value like dis  except during its initialization .
    this.state = {lat:null,errMessage:''};
    window.navigator.geolocation.getCurrentPosition(position => {
      //setState helps you to update ur state, or re-render it .
        this.setState({lat:position.coords.latitude});
        console.log(position);
    },
    error => {
      this.setState({errMessage:error.message});
      console.log(error);
    }
    );

  }*/
  //gets called just once.The first time the component gets loaded on the screen
  state = {lat:null,errMessage:''};
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(position => {
      //setState helps you to update ur state, or re-render it .
        this.setState({lat:position.coords.latitude});
        console.log(position);
    },
    error => {
      this.setState({errMessage:error.message});
      console.log(error);
    }
    );
}

//gets called each time the page is rendered.So on every occurance of setState first the render gets called and dan only the componentDidUpdate;

componentDidUpdate(){
  console.log("update");
}
//helper function 
renderConditions(){
  if(this.state.lat && (!this.state.errMessage)){
    return <Seasons lat = {this.state.lat} />;
  }
 else if(!(this.state.lat) && (this.state.errMessage)){
  console.log(this.state.lat);
    //return <div>error is : {this.state.errMessage}</div>;
    return <Seasons lat = {this.state.lat} />;
    
  }
  else{
    return  <Spinner message ="please select either ." />;
    
  }

  //  return <div>latitude is:{this.state.lat} and Error is :{this.state.errMessage}</div>;
}
render(){
   //var a = [color:'red'];
  return (
    //Put it into {} , only when you want to display it between somthg,else just calling without {} is fine .
  <div>
    
  {this.renderConditions()}
 </div>
  );
}

//if we want  common css to be provided for the output displayed , han wrap the conditional return in a helper function and than call that function from the return function body .


}

ReactDOM.render(<App />,document.querySelector("#root"));






