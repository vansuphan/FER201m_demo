import axios from "axios"

export const messagesService = {
  getMessages: () => {
    return axios.get(process.env.REACT_APP_API_URL + "/messages");
  }
}