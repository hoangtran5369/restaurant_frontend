import axios from 'axios';

const base_url = process.env.REACT_APP_API_URL

export const fetchCategories = async () => {
    const resp = await axios.get(`${base_url}/category`);
    return resp.data;
}

export const fetchFoodMenuItems = async () => {
    const resp = await axios.get(`${base_url}/menu-item`);
    return resp.data;
}

export default { fetchCategories, fetchFoodMenuItems };