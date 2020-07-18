import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID K1dVtVBnrTMhowsPUielUCSWCXUOumZ1iJ17nks_h_k'
    },
})