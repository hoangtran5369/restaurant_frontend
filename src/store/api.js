import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
  });

export const FoodMenuUrl = {
    getCategories: '/category',
    getMenuItems: '/menu-item'
}

export default api