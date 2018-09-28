const KEY_IS_LOGGED_IN = "isLoggedIn";

export const saveLoginStatus = () => {
  localStorage.setItem(KEY_IS_LOGGED_IN, true);
};

export const getLocalStorageLoggedInStatus = () => {
  const status = localStorage.getItem(KEY_IS_LOGGED_IN);
  if (!status) return false;
  const bool = status === "true" ? true : false; // converting from string to boolean
  return bool;
};
