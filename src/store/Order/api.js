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
    const resp = await api.get(`/order/${id}`);

    return resp.data;
}

export const getCustomerOrders = async (id) => {
    const resp = await api.get('/order');
    console.log(resp);
    console.log(id);
    if (resp.status !== 200) {
        return []
    } else {
        return resp.data.filter(order => order.customer.id === id);
    }
}



export default {postOrder, getMerchant, getOrder }
