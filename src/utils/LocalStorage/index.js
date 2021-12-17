const checkStorage = () => typeof Storage !== "undefined";

export const saveToStorageWithPrimitif = (key, value) => {
  if (checkStorage()) {
    return localStorage.setItem(key, value);
  } else {
    return console.log("perangkat tidak mensuport penyimpanan");
  }
};

export const saveToStorageWithJson = (key, value) => {
  if (checkStorage()) {
    let data = [];
    if (localStorage.getItem(key) === null) {
      data = [];
    } else {
      data = JSON.parse(localStorage.getItem(key));
    }

    data.unshift(value);
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getDataJsonFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const getDataStorage = (key) => localStorage.getItem(key);

export const removeDataStorage = (key) => localStorage.removeItem(key);
