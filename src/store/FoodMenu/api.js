import axios from 'axios';

export const fetchCategories = async () => {
    const resp = await axios.get("http://127.0.0.1:5000/v0/category");
    const categories = resp.data;
    console.log(categories);
    return categories;
}

export default { fetchCategories };