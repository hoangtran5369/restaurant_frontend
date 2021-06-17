import { Box, Typography, TextField, List, ListItem, GridList, GridListTile, Input, Button } from '@material-ui/core';
import styled from "styled-components";
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from 'store/Order/reducer';

const MenuItemContainer = styled(ListItem)`
    height: 200px;
    display: flex;
    align-items: stretch;
    border: 1px solid grey;
    border-radius: 0.5rem;
    box-shadow: inset 0 0 5px grey;
`

const MenuItemImage = styled.img`
    height: 160px;
    width: 160px;
    object-fit: cover;
    border: 2mm ridge lightgrey;
    border-radius: 0.5rem;
`

const QuantityPicker = styled(TextField)`
    width: 4rem;
`

const OrderButton = styled(Button)`
    margin: 0 1rem;
`


function MenuItem(props) {
    const {item} = props;
    const [quantity, updateQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleOrder = () => {
        dispatch(addOrder({item, quantity}))
    }

    return (

        <MenuItemContainer>
            <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="space-between" padding="1rem">
                <Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5">{item.name}</Typography>
                        <Typography variant="h6">${item.price}</Typography>
                    </Box>
                    <Typography variant="body2">{item.description}</Typography>
                </Box>

                <Box display="flex" alignContent="stretch">
                    <QuantityPicker
                        label="Count"
                        value={quantity}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="number"
                        variant="outlined"
                        size="small"
                        onChange={event => updateQuantity(event.target.value)}
                    />

                    <OrderButton variant="contained" onClick={handleOrder}>Order</OrderButton>
                </Box>
            </Box>
            <Box>
                <MenuItemImage src={item.image} alt="" />
            </Box>
        </MenuItemContainer>

    );
}

export default MenuItem;