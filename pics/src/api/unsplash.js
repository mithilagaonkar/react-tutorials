import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {Authorization: 'Client-ID c194b986a8c4981dd5572b1cb96d466062aef4c9fd6f3886211002837ef1ab55 '}

});