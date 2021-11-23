import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedItems } from "store/FoodMenu/selector";
import { merchantIsLoading, merchantSelector } from "store/Merchant/selector";
import { Link } from "react-router-dom";

const MenuItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TextBox = styled.div`
  flex-basis: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 600px;
`;
const ImageBox = styled.div`
  flex-grow: 1;
  display: flex;
  overflow: hidden;
`;
const ImgContainer = styled.div`
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 10%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1) 10%,
    transparent 100%
  );
  box-shadow: inset 135px -5px 82px 0px #ffffff;
  -webkit-box-shadow: inset 135px -5px 82px 0px #ffffff;
  margin-left: auto;
`;

const BannerImage = styled.img`
  max-height: 100vh;
`;

const RestaurantName = styled.h1`
  font-size: 60px;
  font-family: Copperplate, fantasy, monospace;
`;

const HoursDisplay = styled.h2`
  font-family: "Lucida Handwriting", cursive;
  margin: 10px;
`;

const MenuButton = styled.span`
  margin: 20px;
  background-color: rgb(42, 65, 44);
  padding: 15px 20px;
  border-radius: 10px;
  color: #ff3399;
  font-weight: 400;
  font-family: Copperplate, fantasy, monospace;
  font-size: 20px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: rgb(255, 195, 0);
    font-size: 150%;
  }
`;

function Home() {
  const merchant = useSelector(merchantSelector);
  const isLoading = useSelector(merchantIsLoading);
  return (
    <Box minHeight="100vh" flexDirection="column" display="flex">
      <Navbar />
      <Box padding="10px" flexGrow={1} display="flex" alignItems="stretch">
        <TextBox>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <RestaurantName>{merchant.name}</RestaurantName>
              <HoursDisplay>Hours</HoursDisplay>
              {merchant.hours.map((hour) => (
                <HoursDisplay>
                  {hour.day} : {moment(hour.start, "HH:mm:ss").format("LT")} -{" "}
                  {moment(hour.end, "HH:mm:ss").format("LT")}
                </HoursDisplay>
              ))}
              <Link to="/menu">
                <Button variant="outlined" component={MenuButton}>
                  View our menu
                </Button>
              </Link>
            </>
          )}
        </TextBox>
        <ImageBox>
          <ImgContainer>
            <BannerImage src="https://i.imgur.com/yGeOUMB.jpg" />
          </ImgContainer>
        </ImageBox>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
