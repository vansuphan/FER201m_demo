import axios from "axios"

export const landingPageService = {
  getCategories: function () { 
    return axios.get("http://localhost:8080/categories");
  }
}