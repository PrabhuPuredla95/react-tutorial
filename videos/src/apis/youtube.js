import axios from 'axios'

const KEY = 'AIzaSyCk20ybpnm56X0jz-4iuUzuJA5eVthfKt0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
});

