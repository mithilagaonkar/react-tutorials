import React from 'react';


class SearchBar extends React.Component {
    //state = {term : 'hey all..Very good morning'};
    state = {term : ''}
    onInputChange(event){
        console.log(event.target.value);
    }
    onInputClick(event){
        console.log("Click value is"+ event.target.value);
    }
  //part2  // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    // ELSE other way to resolve this problem is simply to bind it with the this scope calling the constrctor function .
    // Inside the constructor function use the bind method like:
    // constructor(){
    //     this.state.term = this.state.term.bind(this);
    // }

    
    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    render() {
        return <div className="ui segment">
            <form className="ui form" onSubmit = {this.onFormSubmit}>
           {/*part2 */}{/* <form className="ui form" onSubmit = {event => this.onFormSubmit(event)}> */}
                {/* <form className="ui form" onSubmit = {event => {event.preventDefault();console.log(this.state.term);}}></form> */}
                <div className="field">
                    <label>Image Search</label>
                    {/* <input name="search" type="text" onChange = {(e) => console.log(e.target.value) } onClick={this.onInputClick} /> */}
                    <input name="search" type="text" value={this.state.term} onChange = {(e) => this.setState({term:e.target.value.toUpperCase()})} />
                </div>
            </form>
        </div>
    }
}

export default SearchBar;