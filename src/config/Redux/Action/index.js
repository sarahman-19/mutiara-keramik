import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../Firebase";

export const loginWithEmailApi = (data) => async (dispatch) => {
  dispatch({
    type: "CHANGE_LOADING",
    value: true,
  });
  try {
    const userCredential = await signInWithEmailAndPassword(
      getAuth(),
      data.email,
      data.password
    );
    const user = userCredential.user;
    console.log(user);
    dispatch({
      type: "CHANGE_LOADING",
      value: false,
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    dispatch({
      type: "CHANGE_LOADING",
      value: false,
    });
  }
};

export const registerWithEmailApi = (data) => async (dispatch) => {
  dispatch({
    type: "CHANGE_LOADING",
    value: true,
  });
  try {
    const userCredential = await createUserWithEmailAndPassword(getAuth(), data.email, data.password);
    const user = userCredential.user;
    console.log(user);
    dispatch({
      type: "CHANGE_LOADING",
      value: false,
    });
    dispatch({
      type: "CHANGE_LOGIN",
      value: true,
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    dispatch({
      type: "CHANGE_LOADING",
      value: false,
    });
  }
};
