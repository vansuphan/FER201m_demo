import axios from "axios"

export const landingPageService = {
  getCourses: function () {
    return axios.get(process.env.REACT_APP_API_URL + '/courses');
  },

  getCartegories: function () { 
    return axios.get(process.env.REACT_APP_API_URL + '/cartegories');
  }
}