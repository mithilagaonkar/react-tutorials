import axios from 'axios';
const KEY = 'AIzaSyARLXzrFu2YdfNAA_5CaVMEWj0qKEAOX2I';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet' , 
        maxResults : 5 ,
        key : KEY

    }
});