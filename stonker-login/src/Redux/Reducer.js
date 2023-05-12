const initialState = {
  FirstName: "",
  lastname: "",
  Username: "",
  Email: "",
  password: "",
};


//console.log('initialState',initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_HANDLER":
      return {
        ...state,
        FirstName: action.payload.FirstName,
        lastname: action.payload.lastname,
        Username: action.payload.Username,
        Email: action.payload.Email,
        password: action.payload.password,
      };
  }
};


export default Reducer;
