import {
  Box,
  ListSubheader,
  GridList,
  GridListTile,
} from "@material-ui/core";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Promotions() {

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
