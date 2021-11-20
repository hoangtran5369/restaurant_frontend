import api from 'store/api';

export const getMerchant = async () => {  
    const resp = await api.get('/merchant');
    return resp.data
   
}

export default {getMerchant}