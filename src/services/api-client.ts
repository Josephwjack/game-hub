import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '7fa27bcab4ea46a08988bb01a1f00e2b'
  }
})