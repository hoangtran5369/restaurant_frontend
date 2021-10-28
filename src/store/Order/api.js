import api from 'store/api';


export const postOrder = async (orderData) => {

    const resp = await api.post('/order', orderData);
    console.log(resp)
    return resp.data;
}


export default {postOrder}