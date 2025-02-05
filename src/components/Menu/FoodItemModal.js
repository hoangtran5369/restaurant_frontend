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
  Typography,
  FormLabel,
  Divider,
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const MainContainer = styled.div`
  display: flex;
  padding: 2rem;
  height: 100%;
`;

const LeftContainer = styled.div`
  width: 70%;
`;

const RightContainer = styled.div`
  width: 30%;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid rgb(205, 205, 205);
  border-radius: 25px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const GalleryList = styled(GridList)`
  margin: 10px;
  max-height: 580px;
`;
const QuantityPicker = styled(TextField)`
  width: 4rem;
`;

const OrderButton = styled(Button)`
  margin-left: 1rem !important;
`;

const PreviewContainer = styled.div`
  display: block;
  padding-bottom: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
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
        <LeftContainer>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
          >
            <Grid item xs={2}>
              <GalleryList cellHeight="auto" cols={1}>
                <GridListTile>
                  <PreviewContainer>
                    <PreviewImage
                      src="https://i.imgur.com/yGeOUMB.jpg"
                      alt=""
                    />
                  </PreviewContainer>
                </GridListTile>
              </GalleryList>
            </Grid>
            <Grid item xs={9}>
              <ImageContainer></ImageContainer>
            </Grid>
          </Grid>
        </LeftContainer>
        <RightContainer>
          <Typography variant="h4">{item && item.name}</Typography>
          <Typography variant="h5" gutterBottom>
            ${item && item.price}
          </Typography>
          <Typography variant="body1">{item && item.description}</Typography>
          <Box marginY="20px">
            <FormControl component="fieldset">
              <FormLabel component="legend">Item options</FormLabel>
              {options.map((option) => (
                <div>
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label={option}
                  />{" "}
                </div>
              ))}

              <TextField
                id="outlined-multiline-static"
                label="Special instructions"
                multiline
                rows={2}
                variant="outlined"
              />
            </FormControl>
          </Box>

          <Divider />

          <Box display="flex" alignContent="stretch" paddingTop="20px">
            <QuantityPicker
              label="Count"
              value={quantity}
              InputLabelProps={{
                shrink: true,
              }}
              type="number"
              defaultValue={1}
              variant="outlined"
              onChange={(event) => updateQuantity(event.target.value)}
            />
            <OrderButton
              variant="contained"
              onClick={handleOrder}
              color="primary"
            >
              Add to cart
            </OrderButton>
          </Box>
        </RightContainer>
      </MainContainer>
    </MyModal>
  );
}

export default FoodItemModal;
