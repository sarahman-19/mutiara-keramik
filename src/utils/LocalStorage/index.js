const checkStorage = () => typeof Storage !== "undefined";

export const saveToStorage = (key, value) => {
  if (checkStorage()) {
    return localStorage.setItem(key, value);
  } else {
    return console.log("perangkat tidak mensuport penyimpanan");
  }
};

export const getDataStorage = (key) => localStorage.getItem(key);

export const removeDataStorage = (key) => localStorage.removeItem(key);
