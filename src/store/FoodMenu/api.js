import axios from 'axios';

export const fetchCategories = async () => {
    const resp = await axios.get("http://192.168.0.119:8080/v0/category");
    return resp.data;
}

export const fetchFoodMenuItems = async () => {
    const resp = await axios.get("http://192.168.0.119:8080/v0/menu-item");
    return resp.data;
}

export default { fetchCategories, fetchFoodMenuItems };