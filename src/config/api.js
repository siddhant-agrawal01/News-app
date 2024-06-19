



const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const API_SEARCH_DOMAIN = process.env.REACT_APP_API_SEARCH_DOMAIN;
const API_KEY = process.env.REACT_APP_API_KEY;

export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;