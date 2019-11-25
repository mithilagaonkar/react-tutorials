import React from 'react';
import Search from './search';
import youtube, { baseParams } from '../api/youtube';
import VideoList from './videolist';
import VideoDetail from './videodetail';


class App extends React.Component {
    state = {'term': [],'onSelectedVideo':null};
   /* componentDidMount(){
        this.onuserinputSubmit('buildings');
    }*/
    onuserinputSubmit = async userinput => {
        const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: userinput
            }
        });
        this.setState({term:response.data.items,
        onSelectedVideo:response.data.items[0]});
        
        
       // console.log(this.state.term);
     //   console.log(userinput);
       // console.log("response is" ,response.data.items); // If you try to print the console using + , than it treats even your object to be a string ,and prints as obj obj . SO use (,).

    };

    
    onVideoSelect =  (video) => {
        this.setState({onSelectedVideo:video});
    }
    render() {
        return (
        <div className="ui container"> 
            <Search onSubmittingMe={this.onuserinputSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
            <VideoDetail video = {this.state.onSelectedVideo} /></div>
            {/* <div>{this.state.term.length}</div> */}
            <div className="five wide column"><div><VideoList list={this.state.term} onVideoSelect = {this.onVideoSelect} /></div></div>
            </div>
            </div>
        </div>
        );
    }
}
export default App;

//Some points to rememeber :
// Search component gets called whenever app is loaded . The prop name onSubmittingMe is passed to the child component
//which than collects it .

//We are adding 2 more components to this proj . So we have this component videolist that gets  the value of iur state from the app component .