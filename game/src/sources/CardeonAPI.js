import axios from 'axios';

var axiosCardeon = axios.create({
  baseURL: 'http://0.0.0.0:7992/api',
  timeout: 10000
});

class Cardeon {

  static getCards() {
    return axiosCardeon.get('/Cards?filter[include]=template&filter[include]=element&filter[include]=type');
  }

}

export default Cardeon;
