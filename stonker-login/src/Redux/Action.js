import { SIGNUP_HANDLER } from "./Actiontypes";

const RegestierHandler = (userData) => {
  //  console.log(userData, "userData");
  return function (dispatch) {
    dispatch({
      type: SIGNUP_HANDLER,
      payload: userData,
    });
  };
};

export { RegestierHandler };
