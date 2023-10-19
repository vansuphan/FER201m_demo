import axios from "axios"

export const messagesService = {
  getMessages: () => {
    return axios.get("http://localhost:8080/messages");
  }
}