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
  getDoc,
  collectionGroup,
  doc,
  // set,
} from "../../Firebase";

import {
  getDataStorage,
  saveToStorageWithPrimitif,
  removeDataStorage,
} from "../../../utils/LocalStorage";

// login with email

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
        saveToStorageWithPrimitif("UID", userCredential.user.uid);
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

// register with email

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
        saveToStorageWithPrimitif("UID", userCredential.user.uid);
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

// handle log out from account

export const LogoutAccount = () => (dispatch) => {
  dispatch({
    type: "CHANGE_LOGIN",
    value: false,
  });
  return removeDataStorage("UID");
};

// login with facebook

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
        saveToStorageWithPrimitif("UID", result.user.uid);
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

// login with google

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
        saveToStorageWithPrimitif("UID", result.user.uid);
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

// save data with new ID or change data

export const saveDataUserApi = (uid, data) => (dispatch) => {
  try {
    setDoc(doc(dbFirestore, "users", uid), data);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};

// get all data on some collection

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

// filter data by what input in field

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

// query collection grup

export const getAllDataVariantAndProduct = (IDProduct) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    const data = {
      Product: null,
      variant: null,
    };
    // data product
    const refProduct = query(
      collection(dbFirestore, "products"),
      where("id", "==", IDProduct)
    );
    const queryProduct = await getDocs(refProduct);
    queryProduct.forEach((doc) => {
      data.Product = doc.data();
    });
    // data variant
    const refVariant = query(
      collectionGroup(dbFirestore, "variant"),
      where("IDProduct", "==", IDProduct)
    );
    const queryVariant = await getDocs(refVariant);
    queryVariant.forEach((doc) => {
      data.variant = doc.data();
    });
    resolve(data);
    reject(false);
  });
};

// add or change data on field document

export const likeHandle =
  (like, product, curentLike, dataProduct, dataUser, uid, productID) =>
  async (dispatch) => {
    if (like) {
      await setDoc(doc(dbFirestore, "products", productID), {
        ...dataProduct,
        favorite: curentLike + 1,
      });

      dispatch({
        type: "CHANGE_LIKESTATUS",
        value: true,
      });

      const docRef = doc(dbFirestore, "users", uid);
      const docSnap = await getDoc(docRef);
      let dataProductFavorite = [];
      const dataUser = docSnap.data();

      if (dataUser.favoriteProduct === undefined) {
        dataProductFavorite.push(product);
        await setDoc(doc(dbFirestore, "users", uid), {
          ...dataUser,
          favoriteProduct: dataProductFavorite,
        });
      } else {
        dataProductFavorite = dataUser.favoriteProduct;
        dataProductFavorite.push(product);
        await setDoc(doc(dbFirestore, "users", uid), {
          ...dataUser,
          favoriteProduct: dataProductFavorite,
        });
      }
    } else {
      await setDoc(doc(dbFirestore, "products", productID), {
        ...dataProduct,
        favorite: curentLike - 1 + 1,
      });

      dispatch({
        type: "CHANGE_LIKESTATUS",
        value: false,
      });

      const docRef = doc(dbFirestore, "users", uid);
      const docSnap = await getDoc(docRef);
      const dataUser = docSnap.data();
      let dataProductFavorite = [];

      dataProductFavorite = dataUser.favoriteProduct.filter(
        (a) => a !== product
      );
      await setDoc(doc(dbFirestore, "users", uid), {
        ...dataUser,
        favoriteProduct: dataProductFavorite,
      });
    }
  };

// get data in one document

export const getDataUser = (uid) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    const docRef = doc(dbFirestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      resolve(docSnap.data());
    } else {
      reject("No such document!");
    }
  });
};

// login validation

export const userHaveLogin = () => (dispatch) => {
  const uid = getDataStorage("UID");

  if (uid === null) {
    return dispatch({
      type: "CHANGE_LOGIN",
      value: false,
    });
  } else {
    return dispatch({
      type: "CHANGE_LOGIN",
      value: true,
    });
  }
};

// handle have user like a product

export const handleStatusLikedCheck = (uid, product) => async (dispatch) => {
  const docRef = doc(dbFirestore, "users", uid);
  const docSnap = await getDoc(docRef);
  const dataUser = docSnap.data();
  const productFavoriteUser = dataUser.favoriteProduct;

  if (productFavoriteUser !== undefined) {
    const fav = productFavoriteUser.find((a) => a === product);
    if (fav !== undefined) {
      dispatch({
        type: "CHANGE_LIKESTATUS",
        value: true,
      });
    } else {
      dispatch({
        type: "CHANGE_LIKESTATUS",
        value: false,
      });
    }
  }
};
