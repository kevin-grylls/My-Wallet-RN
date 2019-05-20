import URI from "../config/ENV";

const BASE_URI = URI.DJANGO_SERVER;

const BASE_HEADER = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json"
};

export const signup = (userId: string, password: string) => {
  const options: RequestInit = {
    method: "POST",
    mode: "cors",
    headers: BASE_HEADER,
    body: JSON.stringify({
      userId: userId,
      password: String(password)
    })
  };
  return fetch(BASE_URI + URI.SIGNUP, options);
};

export const getAccounts = () => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
    headers: BASE_HEADER
  };
  return fetch(BASE_URI + URI.ACCOUNTS, options);
};
