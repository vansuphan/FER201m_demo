import axios from "axios"

export const landingPageService = {
  getCategories: function () { 
    return axios.get(process.env.REACT_APP_API_URL + '/categories');
  }
}