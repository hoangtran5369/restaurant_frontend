import {
  Box,
  Button,
  ListSubheader,
  GridListTileBar,
  GridList,
  GridListTile,
} from "@material-ui/core";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Promotions() {
  const promosList = [
    { lable: "promos #1", value: 1 },
    { lable: "promos #2", value: 2 },
    { lable: "promos #3", value: 3 },
    { lable: "promos #4", value: 4 },
  ];
  return (
    <Box minHeight="100vh" flexDirection="column" display="flex">
      <Navbar />
      
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        color="text.primary"
      > 

      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Pho 28 Promotions</ListSubheader>
        </GridListTile>
         
           

           
        
      </GridList>

      </Box>
      <Footer />
    </Box>
  );
}

export default Promotions;
