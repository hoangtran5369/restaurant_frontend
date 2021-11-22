import api from 'store/api';


export const getCustomerOrders = async (id) => {
    const resp = await api.get('/order');
    if (resp.status !== 200) {
        return []
    } else {
        return resp.data.filter(order => order.customer.id === id);
    }
}

export default {getCustomerOrders}