import axios from 'axios';
import api, {FoodMenuUrl} from 'store/api';

const base_url = process.env.REACT_APP_API_URL

export const fetchCategories = async () => {
    const resp = await api.get(FoodMenuUrl.getCategories);
    return resp.data;
}

export const fetchFoodMenuItems = async () => {
    const resp = await api.get(FoodMenuUrl.getMenuItems);
    return resp.data;
}

export default { fetchCategories, fetchFoodMenuItems };