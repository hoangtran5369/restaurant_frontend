
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMerchant } from "store/Merchant/reducer";
import { fetchMenu } from "store/FoodMenu/reducer";
import { resetOrder } from "store/Order/reducer";
import { orderNeedsReset } from "store/Order/selector";


// Component for loading restaurant resources from backend
function RestaurantProvider(props) {
    const dispatch = useDispatch();
    const needReset = useSelector(orderNeedsReset);
    useEffect(() => {
      dispatch(getMerchant());
      dispatch(fetchMenu());
      if(needReset) {
          dispatch(resetOrder());
      }
    }, []);
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
  }

  export default RestaurantProvider;