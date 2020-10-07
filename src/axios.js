import axios from "axios";


//base url  for requesting Movie db
const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;