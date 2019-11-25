import axios from 'axios';
const KEY = 'AIzaSyARLXzrFu2YdfNAA_5CaVMEWj0qKEAOX2I';


export const baseParams = {
    part: 'snippet',
    maxResults: 10,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});