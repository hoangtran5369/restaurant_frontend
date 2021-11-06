import api from 'store/api';

export const getMerchant = async () => {  
    const resp = await api.get('/merchant');
    return resp.data
   
}


export const postOrder = async (orderData) => {
    const resp = await api.post('/order', orderData);
    return resp.data;
}

export default {postOrder, getMerchant }