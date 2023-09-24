
var apiConfig = {
    "env": process.env.REACT_APP_ENV,
    "api_key": process.env.REACT_APP_API_KEY,
    "api_base_url": process.env.REACT_APP_ENV === 'DEVELOPMENT' ? process.env.REACT_APP_API_DEV_BASE_URL : process.env.REACT_APP_API_PROD_BASE_URL,
}
// process.env.REACT_APP_API_DEV_BASE_URL

export default apiConfig;