import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  // dbRealtime,
  // ref,
  // addDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
  dbFirestore,
  // getDoc,
  collectionGroup,
  doc,
  // set,
} from "../../Firebase";

export const loginWithEmailApi = (data) => (dispatch) => {
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
  try {
    setDoc(doc(dbFirestore, "users", uid), data);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};

export const getAllDataProduct = () => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    const data = [];
    const querySnapshot = await getDocs(collection(dbFirestore, "products"));
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    resolve(data);
    reject(false);
  });
};

export const getProductsByTekstur = (IDtekstur) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    const q = query(
      collection(dbFirestore, "products"),
      where("tekstur", "==", IDtekstur)
    );
    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    resolve(data);
    reject(false);
  });
};

export const getAllDataVariantAndProduct = (IDProduct) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    const data = [];
    // data product
    const refProduct = query(
      collection(dbFirestore, "products"),
      where("id", "==", IDProduct)
    );
    const queryProduct = await getDocs(refProduct);
    queryProduct.forEach((doc) => {
      data.push(doc.data());
    });
    // data variant
    const refVariant = query(
      collectionGroup(dbFirestore, "variant"),
      where("IDProduct", "==", IDProduct)
    );
    const queryVariant = await getDocs(refVariant);
    queryVariant.forEach((doc) => {
      data.push(doc.data());
    });
    resolve(data);
    reject(false);
  });
};

export const getProductsByBrand = (brand) => async (dispatch) => {
  const q = query(
    collection(dbFirestore, "products"),
    where("brand", "==", brand)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};
