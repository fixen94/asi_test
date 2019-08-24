import axios from 'axios';

let API_URL
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:8000';
} else {
  API_URL = 'http://194.87.237.247:8000';
}

export default class UserEndpoint{
  getUsers() {
    const url = `${API_URL}/api/users/`;
    return axios.get(url).then(response => response.data);
  }
    // getCustomersByURL(link){
    //     const url = `${API_URL}${link}`;
    //     return axios.get(url).then(response => response.data);
    // }
    // getCustomer(pk) {
    //     const url = `${API_URL}/api/customers/${pk}`;
    //     return axios.get(url).then(response => response.data);
    // }
    // deleteCustomer(customer){
    //     const url = `${API_URL}/api/customers/${customer.pk}`;
    //     return axios.delete(url);
    // }
  createUser(customer){
    const url = `${API_URL}/api/customers/`;
    return axios.post(url,customer);
  }
    // updateCustomer(customer){
    //     const url = `${API_URL}/api/customers/${customer.pk}`;
    //     return axios.put(url,customer);
    // }
}