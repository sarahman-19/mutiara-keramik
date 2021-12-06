import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
} from "../../Firebase";

export const loginWithEmailApi = (data) => async (dispatch) => {
  dispatch({
    type: "CHANGE_LOADING",
    value: true,
  });

  return signInWithEmailAndPassword(getAuth(), data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      dispatch({
        type: "CHANGE_LOADING",
        value: false,
      });
      dispatch({
        type: "CHANGE_DATA_USER",
        value: user,
      });
      dispatch({
        type: "CHANGE_LOGIN",
        value: true,
      });
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({
        type: "CHANGE_LOADING",
        value: false,
      });
      dispatch({
        type: "CHANGE_LOGIN",
        value: false,
      });
    });
};

export const registerWithEmailApi = (data) => (dispatch) => {
  dispatch({
    type: "CHANGE_LOADING",
    value: true,
  });

  return createUserWithEmailAndPassword(getAuth(), data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      dispatch({
        type: "CHANGE_LOADING",
        value: false,
      });
      dispatch({
        type: "CHANGE_DATA_USER",
        value: user,
      });
      dispatch({
        type: "CHANGE_LOGIN",
        value: true,
      });
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({
        type: "CHANGE_LOADING",
        value: false,
      });
      dispatch({
        type: "CHANGE_LOGIN",
        value: false,
      });
    });
};

export const LogoutAccount = () => {
  return {
    type: "CHANGE_LOGIN",
    value: false,
  };
};

export const loginWithFacebookApi = () => (dispatch) => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      console.log("user", user);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      console.log("access token", accessToken);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);

      console.log(errorCode, errorMessage, email, credential);
    });
};
