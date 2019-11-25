import React from 'react';

class Search extends React.Component {
    state = { userInput: '' };
    setValue = (e) => {
           this.setState({userInput:e.target.value});
          // console.log(e);

    }
    formSubmitAction = e =>{
        e.preventDefault(); // is used to prevernt form from getting submitted !
        this.props.onSubmittingMe(this.state.userInput);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.formSubmitAction}>
                    <div className="field">
                        <label>Video Search</label><input type="text" value={this.state.userInput} 
                        onChange= {this.setValue}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default Search;

// the formSubmitAction gets called whener we submit this form . Inside this method we are accessing the prop property
// by this.prop.onSubmittingMe which than calls our function in the app .

//So in simple , the flow goes as 
// App => Search => App .
