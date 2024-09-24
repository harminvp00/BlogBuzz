
import axios from 'axios';

/* This is api which make a connetion between 
the front-end and client-side server */
const API = axios.create({
    URL : "https://jsonplaceholder.typicode.com/todos",
})

export default API;