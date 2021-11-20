
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getMerchant } from "store/Merchant/reducer";
import { fetchMenu } from "store/FoodMenu/reducer";



// Component for loading restaurant resources from backend
function RestaurantProvider(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getMerchant());
      dispatch(fetchMenu());

    }, []);
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
  }

  export default RestaurantProvider;