const initialState = {
  isLogin: false,
  isLoading: false,
  dataUser: {
    username: "strangers",
    telpon: "08123456789",
  },
};

const Reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_LOGIN") {
    return {
      ...state,
      isLogin: action.value,
    };
  }
  if (action.type === "CHANGE_DATA_USER") {
    return {
      ...state,
      dataUser: action.value,
    };
  }
  if (action.type === "CHANGE_LOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  return state;
};

export default Reducer;
