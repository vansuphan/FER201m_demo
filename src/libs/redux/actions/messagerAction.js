import { messagesService } from "../../services/messagesService";
import { MessagerType } from "../types/messagerType";

export const getMessager = () => {
  return (dispatch) => {
    dispatch(messagerAction.get());
    messagesService.getMessages().then(
      async (response) => {
        const converData = await response.json();
        setTimeout(() => {
          dispatch(messagerAction.success(converData));
        }, 500)
      },
      (error) => {
        dispatch(messagerAction.failure(error));
      }
    );
  };
};

const get = () => {
  return {
    type: MessagerType.GET_MESSAGE,
    payload: null,
  };
};

const success = (res) => {
  return {
    type: MessagerType.GET_MESSAGE_SUCCESS,
    payload: res,
  };
};

const failure = (error) => {
  return {
    type: MessagerType.GET_MESSAGE_FAILURE,
    payload: error,
  };
};

export const messagerAction = {
  get,
  success,
  failure,
}