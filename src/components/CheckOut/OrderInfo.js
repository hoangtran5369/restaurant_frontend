import {
    Box,
    Button,
    Divider,
    TextField,
    FormControlLabel,
    Checkbox,
    Typography,
  } from "@material-ui/core";
  import styled from "styled-components";
  import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
  import { useSelector } from 'react-redux';
  import { getOrderItems, getOrderItemInfo } from 'store/Order/selector';
  import Order from "components/Menu/Order";
   import { PriceDisplay } from "components/Menu/Cart";
  


   
  
  const MyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
    margin-top: 15px;
    margin-bottom: 30px;
  `;
  
  const InfoTextField = styled(TextField)`
    margin-bottom: 10px;
  `
  
  const FormContainer = styled.div`
    width: 50%;
    padding-right: 30px;
  `;
  const OrderContainer = styled.div`
    width: 50%;
    align-items: stretch;
    padding-left: 30px;
  `;
  const CheckBoxLabel = styled(props => <FormControlLabel {...props} classes={{label: 'checkbox-label'}}/>)`
    margin-top: 20px;
  
    & > .checkbox-label {
      font-size: 0.8rem;
    }
  `;
  
  const SubmitButton = styled(Button)`
    padding: 10px;
  `
  const OrderList = styled(List)`
    height: 300px;
    overflow: scroll;
    `
  function OrderInfo({ onFinished }) {
    const orderItems = useSelector(getOrderItemInfo)
    return (
  
        <OrderContainer>
            <p>
                ORDER SUMMARY
                <OrderList >
                <Order editable={false} />
                </OrderList>
            </p>
            <Divider></Divider>
            <PriceDisplay />
        </OrderContainer>
        
    );
  }
  
  export default OrderInfo;
  