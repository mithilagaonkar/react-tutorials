import React from 'react';

class ImageCard extends React.Component{
    //we are using a constructor function becuase we need the ref of an image . i.e . we need the height of an image just the time when the image is loaded .
    constructor(props){
        super(props);
        this.state = {spans : 0};
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        // You get this ans 0 because as per it , it says that the componentDidMount method gets called before the image is fully downloaded..i.e. before the image is downoaded and the DOM is rendered . So the height remains 0 .
      //  this.imageRef.current.addEventListener('load',() => { console.log(this.imageRef.current.clientHeight);});
     this.imageRef.current.addEventListener('load',this.setSpans);
    }
  setSpans = () =>{ //console.log(this.imageRef.current.clientHeight);
  const height = this.imageRef.current.clientHeight; 
  const spans = Math.ceil(height /10);
  this.setState({spans:spans});
  }
    

render(){
    //const {description,src} = this.props.image;
    return (
        <div style = {{gridRowEnd : `span ${this.state.spans}`}}>
            <img ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.alt_description} />
        </div> 
    )
}
}
export default ImageCard;