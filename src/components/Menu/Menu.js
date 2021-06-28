import Navbar from 'components/Navbar';
import {
    Box,
    List,
    GridList,
    GridListTile,
    Input,
    FormControl,
    Modal
} from '@material-ui/core';
import styled from "styled-components";
import FoodMenuItem from 'components/Menu/MenuItem';
import FoodItemModal from 'components/Menu/FoodItemModal';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodMenuItems, itemIsDisplayed, getDisplayedItem } from 'store/FoodMenu/selector';
import { hideItem } from 'store/FoodMenu/reducer';
import Cart from 'components/Menu/Cart';
import React from 'react';

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





function Menu() {
    const foodMenuItems = useSelector(getFoodMenuItems)

    return (
        <React.Fragment>
            <FoodItemModal />
               
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
        </React.Fragment>

    );
}

export default Menu;