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
  import { getOrderItems } from 'store/Order/selector';

   
  
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
    const orderItems = useSelector(getOrderItems)
    return (

  
        <OrderContainer>
            <p>
                ORDER SUMMARY
                <OrderList dense>
                    {orderItems.map(order => (
                    <ListItem>
                        <ListItemText primary={`${order.name} x ${order.quantity}`} />
                        <ListItemSecondaryAction> {`$${(order.price * order.quantity)}`}</ListItemSecondaryAction>
                    </ListItem>
                    ))}
                </OrderList>
            </p>
            <Divider></Divider>
            <List dense>
                <ListItem>
                        <ListItemText primary="Subtotal"></ListItemText>
                        <ListItemSecondaryAction> US$7.50</ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                        <ListItemText primary="Tip"></ListItemText>
                        <ListItemSecondaryAction> US$0.00</ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                        <ListItemText primary="In-store pickup"></ListItemText>
                        <ListItemSecondaryAction> US$0.00</ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                        <ListItemText primary="Taxes (US)"></ListItemText>
                        <ListItemSecondaryAction> US$0.00</ListItemSecondaryAction>
                </ListItem>

                <Divider></Divider>
                <ListItem>
                        <ListItemText primary="Order Total"></ListItemText>
                        <ListItemSecondaryAction> US$7.50</ListItemSecondaryAction>
                </ListItem>
            </List>
        </OrderContainer>
        
    );
  }
  
  export default OrderInfo;
  