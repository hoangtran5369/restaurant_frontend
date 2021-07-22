import api, {FoodMenuUrl} from 'store/api';


export const fetchCategories = async () => {
    const resp = await api.get(FoodMenuUrl.getCategories);
    return resp.data;
}

export const fetchFoodMenuItems = async () => {
    const resp = await api.get(FoodMenuUrl.getMenuItems);
    return resp.data;
}

export const fetchMenu = async () => {
    const resp = await api.get(FoodMenuUrl.getMenu);
    return resp.data;
}

const FoodMenuApi = { fetchCategories, fetchFoodMenuItems, fetchMenu };
export default FoodMenuApi;