import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 4e738a3052fdd298124f66f3079756438449ea409706cb74de1c6446cf32ca77'
    }
});