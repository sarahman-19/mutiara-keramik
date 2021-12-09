import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  database,
  ref,
  set,
} from "../../Firebase";

export const loginWithEmailApi = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: "CHANGE_LOADING",
      value: true,
    });

    signInWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((userCredential) => {
        dispatch({
          type: "CHANGE_LOADING",
          value: false,
        });
        dispatch({
          type: "CHANGE_LOGIN",
          value: true,
        });
        resolve(true);
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
        reject(false);
      });
  });
};

export const registerWithEmailApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: "CHANGE_LOADING",
      value: true,
    });

    createUserWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((userCredential) => {
        const dataUser = {
          nama: data.username,
          email: userCredential.user.email,
          emailVerified: userCredential.user.emailVerified,
          uid: userCredential.user.uid,
          phoneNumber: data.phoneNumber,
          photoURL: userCredential.user.photoURL,
          loginWith: "Email Account",
        };
        dispatch({
          type: "CHANGE_LOADING",
          value: false,
        });
        dispatch({
          type: "CHANGE_DATA_USER",
          value: dataUser,
        });
        dispatch({
          type: "CHANGE_LOGIN",
          value: true,
        });
        resolve(dataUser);
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
        reject(false);
      });
  });
};

export const LogoutAccount = () => ({
  type: "CHANGE_LOGIN",
  value: false,
});

export const loginWithFacebookApi = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const dataUser = {
          nama: result.user.displayName,
          email: result.user.email,
          emailVerified: result.user.emailVerified,
          uid: result.user.uid,
          phoneNumber: result.user.phoneNumber,
          photoURL: result.user.photoURL,
          loginWith: "facebook.com",
        };
        dispatch({
          type: "CHANGE_DATA_USER",
          value: dataUser,
        });
        dispatch({
          type: "CHANGE_LOGIN",
          value: true,
        });
        resolve(dataUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        reject(false);
        console.log(errorCode, errorMessage, email, credential);
      });
  });
};

export const loginWithGoogleApi = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const dataUser = {
          nama: result.user.displayName,
          email: result.user.email,
          emailVerified: result.user.emailVerified,
          uid: result.user.uid,
          phoneNumber: result.user.phoneNumber,
          photoURL: result.user.photoURL,
          loginWith: "google.com",
        };
        dispatch({
          type: "CHANGE_DATA_USER",
          value: dataUser,
        });
        dispatch({
          type: "CHANGE_LOGIN",
          value: true,
        });
        resolve(dataUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        reject(false);
        console.log(errorCode, errorMessage, email, credential);
      });
  });
};

export const saveDataUserApi = (uid, data) => (dispatch) => {
  set(ref(database, `users/${uid}/data/`), data);
  console.log(uid, data);
};
