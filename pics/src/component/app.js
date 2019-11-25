import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './search';
import ImageList from './imagelist';


class App extends React.Component{
    state = {images : []};
     onAppSubmit = async (term) => {
       const response = await unsplash.get('/search/photos',{
            params : {query : term},
            //headers :{Authorization: 'Client-ID c194b986a8c4981dd5572b1cb96d466062aef4c9fd6f3886211002837ef1ab55 '}
        })
       // .then(response => console.log(response));
       console.log(response.data.results);
       this.setState({images : response.data.results});
    };
    render(){
    return (
    <div className = "ui container" style= {{ marginTop:'20px' }}><SearchBar onSubmit = {this.onAppSubmit}/>
  {/* I Found : {this.state.images.length} */}
  <ImageList images = {this.state.images}/>
    </div>
    );
}
}
export default App;
