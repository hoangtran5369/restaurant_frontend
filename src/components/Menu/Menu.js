import Navbar from 'components/Navbar';
import { Box, Typography, List, GridList, GridListTile, Input, Select, MenuItem, InputLabel, FormControl, Button, ListItem, ListItemText, ListItemSecondaryAction, ListItemAvatar } from '@material-ui/core';
import styled from "styled-components";
import FoodMenuItem from 'components/Menu/MenuItem';
import { useSelector } from 'react-redux';
import { getFoodMenuItems } from 'store/FoodMenu/selector';
import Cart from 'components/Menu/Cart';

const CategoryList = styled(GridList)`
    height: 75vh;
    padding: 1rem;
`

const MenuListContainer = styled.div`
    flex-grow: 1;
    overflow: scroll;
    margin-top: 1rem;
    padding: 0 1rem;
`
const SearchBar = styled(Input)`
    border-radius: 1.5rem;
    flex-basis: 1rem;
    border: 2px solid grey;
    padding: 0 0.5rem;
`

const CartContainer = styled.div`
    border: 2px solid grey;
    border-radius: 1rem;

    height: 75vh;
    flex-basis: 300px;

`

const DeliverySelector = styled(FormControl)`
    width: 100%;
`




function Menu() {
    const foodMenuItems = useSelector(getFoodMenuItems)

    return (
        <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
            <Box display="flex" flexDirection="row" marginX="10vw" flexGrow={1} marginY="5vh" alignItems="center" padding="1rem">

                <Box flexBasis="400px">
                    <CategoryList cellHeight={180}>
                        <GridListTile>
                            <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                        </GridListTile>
                        <GridListTile>
                            <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                        </GridListTile>
                        <GridListTile>
                            <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                        </GridListTile>
                        <GridListTile>
                            <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                        </GridListTile>
                        <GridListTile>
                            <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                        </GridListTile>
                        <GridListTile>
                            <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                        </GridListTile>
                        <GridListTile>
                            <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                        </GridListTile>

                    </CategoryList>
                </Box>

                <Box flexGrow={1} marginX="10px" height="75vh" display="flex" flexDirection="column">
                    <SearchBar label="Search" variant="filled" fullWidth disableUnderline />
                    <MenuListContainer>
                        <List>
                            {foodMenuItems.map(item => <FoodMenuItem item={item} />)}
                        </List>

                    </MenuListContainer>
                </Box>

                <CartContainer>
                    <Cart />
                </CartContainer>
            </Box>
        </Box>
    );
}

export default Menu;