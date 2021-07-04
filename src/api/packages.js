import API from './instance'


const Packages = {
  getPackages: name => API.get(`/${name}`).then(r => r.data)
}

export default Packages
