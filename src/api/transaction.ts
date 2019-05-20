import URI from "../config/ENV";

const BASE_URL = URI.DJANGO_SERVER;

const BASE_HEADER = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json"
};

export const getCoinbase = () => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
    headers: BASE_HEADER
  };
  return fetch(BASE_URL + URI.COINBASE, options);
};

export const getTransactionAll = () => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
    headers: BASE_HEADER
  };
  return fetch(BASE_URL + URI.TRANSACTION_ALL, options);
};
