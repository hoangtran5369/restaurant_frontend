import api from 'store/api';

export const getMerchant = async () => {  
    const resp = await api.get('/merchant');
    return resp.data
   
}


export const postOrder = async (orderData) => {
    const resp = await api.post('/order', orderData);
    return resp.data;
}

export const getOrder = async (id) => {
    console.log("ID: ", id)
    const resp = await api.get(`/order/${id}`);

    console.log("API: ", resp)
    return resp.data;
}


export default {postOrder, getMerchant, getOrder }
