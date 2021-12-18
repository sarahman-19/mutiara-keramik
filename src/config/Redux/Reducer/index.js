const initialState = {
  isLogin: false,
  isLoading: false,
  isLiked: false,
  dataUser: {},
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
  if (action.type === "CHANGE_LIKESTATUS") {
    return {
      ...state,
      isLiked: action.value,
    };
  }
  return state;
};

export default Reducer;
