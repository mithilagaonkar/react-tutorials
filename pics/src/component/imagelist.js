import React from 'react';
import ImageCard from './imagecard';
import './imagelist.css';

const ImageList = (props) => {
    // Before the creation of a different component(i.e . ImageCard) , we tend to pass the values to props from this component like this :
//  const reply = props.images.map(({urls,id,alt_description}) => <img src={urls.regular} key={id} alt = {alt_description} />   );
const reply = props.images.map(image => <ImageCard key={image.id} image={image} />   );

console.log(props.images);

return <div className = "image-list">{reply}</div>;

};
export default ImageList;