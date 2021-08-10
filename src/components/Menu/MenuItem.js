import { Box, Typography, ListItem } from '@material-ui/core';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import {displayItem} from 'store/FoodMenu/reducer';
import {Storage} from 'aws-amplify';
import { useEffect, useState } from 'react';

const MenuItemContainer = styled(ListItem)`
    height: 200px;
    display: flex;
    align-items: stretch !important;
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

function AWSImage(props) {
    const {src} = props;
    const [imgUrl, setImgUrl] = useState("")
    useEffect(() => {
        console.log("SRC: ", src);
        Storage.get(src).then(url => setImgUrl(url))
    }, [src])

    return <MenuItemImage src={imgUrl} alt="" />
    
}

function MenuItem(props) {
    const {item} = props;
    const dispatch = useDispatch();

    const myProps = {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between",
        padding:"1rem",
    }

    return (

        <MenuItemContainer onClick={() => dispatch(displayItem(item))}>
            <Box 
            {...myProps}
            >
                <Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5">{item.name}</Typography>                     
                    </Box>
                    <Typography variant="body2">{item.description}</Typography>
                </Box>
                <Typography variant="h6">${item.price}</Typography>
                
            </Box>
            
            <Box>
                <AWSImage src={item.imageUrl} alt="" />
            </Box>
        </MenuItemContainer>

    );
}

export default MenuItem;