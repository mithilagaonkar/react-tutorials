import React from 'react';
//import ImpureComponent from './TestMe';
//import ListComponent from './ListComponent';
//import DetailComponent from './DetailComponent';

class Main extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {data: 0};
        this.onItemClicked = this.onItemClicked.bind(this);
    }

    onItemClicked(e){
        this.setState({data:e.currentTarget.innerText});
    }


    render(){
        return(
            <div style={{display: "flex"}}>
                hello
                {/* <ListComponent  onItemClick={this.onItemClicked}/>
                <DetailComponent data={this.state.data}/> */}

            </div>
        );
    }
}

export default Main;
