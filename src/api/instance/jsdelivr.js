import axios from 'axios'

const JSD = axios.create({
  baseURL: 'https://data.jsdelivr.com/v1/package/npm/',
  timeout: 3000
})

export default JSD
