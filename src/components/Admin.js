import Navbar from './Navbar';
import { Box, Button, Card, CardContent, CardHeader, Grid, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import Footer from './Footer';
import { Link } from 'react-router-dom';



const OrdersTab = () => (
    <Grid item xs={3} component={Card}>
        <CardHeader title="Orders" />
        <CardContent>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="See all orders" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Awaiting deliveries" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Completed orders" />
                </ListItem>
            </List>
        </CardContent>
    </Grid>
)

const SalesTab = () => (
    <Grid item xs={3} component={Card}>
        <CardHeader title="Sales" />
        <CardContent>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="View sales data" />
                </ListItem>
            </List>
        </CardContent>
    </Grid>
)

const MenuTab = () => (
    <Grid item xs={3} component={Card}>
        <CardHeader title="Menu" />
        <CardContent>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="Create new menu item" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Manage menu" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
        </CardContent>
    </Grid>
)

const ToolsTab = () => (
    <Grid item xs={3} component={Card}>
        <CardHeader title="Selling tools" />
        <CardContent>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="Promotion offers" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Payment management" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Explore reports" />
                </ListItem>
            </List>
        </CardContent>
    </Grid>
)

const StoreTab = () => (
    <Grid item xs={3} component={Card}>
        <CardHeader title="Store" />
        <CardContent>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="Manage store" />
                </ListItem>
                <ListItem>
                    <ListItemText primary=" Change store outlook" />
                </ListItem>
            </List>
        </CardContent>
    </Grid>
)

const CustomerTab = () => (
    <Grid item xs={3} component={Card}>
        <CardHeader title="Customer Services" />
        <CardContent>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="See loyal customers" />
                </ListItem>
                <ListItem>
                    <ListItemText primary=" Awaiting delivery" />
                </ListItem>
                <ListItem>
                    <ListItemText primary=" Contact customer" />
                </ListItem>
            </List>
        </CardContent>
    </Grid>
)


function Home() {
    return (
        <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
            <Box padding="10px" flexGrow={1}>
                <Typography variant="h5" component="h2" gutterBottom>Admin page</Typography>

                <Grid component={Box} p={3} container direction="row" justify="space-around" spacing={3}>

                    <OrdersTab />

                    <SalesTab />

                    <MenuTab />
                </Grid>

                <Grid  component={Box} p={3} container direction="row" justify="space-around" spacing={3}>

                    <ToolsTab />

                    <StoreTab />

                    <CustomerTab />

                </Grid>
            </Box>

            <Footer />
        </Box>
    );
}

export default Home;