import {
  Box,
  List,
  Grid,
  GridList,
  GridListTile,
  Input,
  FormControl,
  Modal,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { itemIsDisplayed, getDisplayedItem } from "store/FoodMenu/selector";
import { hideItem } from "store/FoodMenu/reducer";
import React, { useState } from "react";
import { addOrder } from "store/Order/reducer";

const MyModal = styled(Modal)`
  margin: auto;
  width: 70vw;
  min-width: 600px;
  background-color: white;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const MainContainer = styled.div`
  background-color: blue;
  display: flex;
 
`;

const LeftContainer = styled.div`
  background-color: red;
  width: 70%;
   
`;

const RightContainer = styled.div`
  
  width: 30%;
  background-color: yellow;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: green;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
const ImageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  background-color: blue;
`;
const GalleryList = styled(GridList)`
  max-height: 580px;
`;
const QuantityPicker = styled(TextField)`
  width: 4rem;
`;

const OrderButton = styled(Button)`
  margin: 0 1rem;
`;

function FoodItemModal() {
  const modalOpen = useSelector(itemIsDisplayed);
  const item = useSelector(getDisplayedItem);
  const dispatch = useDispatch();
  const [quantity, updateQuantity] = useState(1);
  const handleOrder = () => {
    dispatch(addOrder({ item, quantity }));
    dispatch(hideItem());
  };
  const options = ["Khong gia", "Khong hanh", "Khong Thit"];

  return (
    <MyModal
      BackdropProps={{ invisible: true }}
      open={modalOpen}
      onClose={() => dispatch(hideItem())}
    >
      <MainContainer>
        {/* <h3>{JSON.stringify(currDisplayedItem)}</h3> */}

        <LeftContainer>
          {/* <Box display="flex" height="500px">
                    <ImageListContainer>
                    </ImageListContainer>
                    <ImageContainer>
                    </ImageContainer>
                    </Box> */}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"             
          >
            <Grid item xs={2}>
              <GalleryList cellHeight={100} cols={1}>
                <GridListTile>
                  <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                </GridListTile>
                <GridListTile>
                  <img src="https://i.imgur.com/yGeOUMB.jpg" alt="" />
                </GridListTile>
                {/* <GridListTile>
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
                                </GridListTile> */}
              </GalleryList>
            </Grid>
            <Grid item xs={9}>
              <ImageContainer></ImageContainer>
            </Grid>
          </Grid>
          
        </LeftContainer>
        <RightContainer>
          <h2> Pho bo </h2>
          <h2> Price: </h2>
          <h2> Description: </h2>
          <h2> Option: </h2>

          {options.map((option) => (
            <div>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label={option}
              />{" "}
            </div>
          ))}

          <TextField
            label="Special instruction:"
            id="outlined-margin-none"
            defaultValue="Default Value"
            helperText="150 characters maximum."
            variant="outlined"
          />
          <Box display="flex" alignContent="stretch">
            <QuantityPicker
              label="Count"
              value={quantity}
              InputLabelProps={{
                shrink: true,
              }}
              type="number"
              defaultValue={1}
              variant="outlined"
              size="small"
              onChange={(event) => updateQuantity(event.target.value)}
            />
            <OrderButton variant="contained" onClick={handleOrder} color="primary"  >
              Add to card
            </OrderButton>
          </Box>
         
           
        </RightContainer>
      </MainContainer>
    </MyModal>
  );
}

export default FoodItemModal;
