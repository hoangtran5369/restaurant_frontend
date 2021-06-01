import { Typography } from "@material-ui/core";
import styled from "styled-components"

const FooterContainer = styled.div`
    height: 20vh;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(42, 65, 44);
    align-items: center
`

const HoursContainer = styled.div`
    height: 95%;
    flex-grow: 1;
    text-align: center;
    color: white;
`;
const ContactContainer = styled.div`
    height: 95%;
    flex-grow: 1;
    text-align: center;
    color: white;
`
const CopyrightContainer = styled.div`
    height: 95%;
    display: flex;
    flex-grow: 2;
    align-items: flex-end;    
    justify-content: center;
    color: white;
`

function Footer() {
    return (
        <FooterContainer>
            <ContactContainer>
            <Typography variant="h6" gutterBottom>
                    Contact us
                </Typography>
                <Typography variant="body1">
                    Pho 28
                </Typography>
                <Typography variant="body1">
                    (408)-123-4567
                </Typography>
                <Typography variant="body1">
                    1 Washington Sq, San Jose, CA 95122
                </Typography>
            </ContactContainer>

            <CopyrightContainer>
                <Typography variant="body1" gutterBottom>
                   Pho28 | Copyright 2021 All rights reserved
                </Typography>
            </CopyrightContainer>

            <HoursContainer>
                <Typography variant="h6" gutterBottom>
                    HOURS
                </Typography>
                <Typography variant="body1">
                    Closed: Monday & Wednesday
                </Typography>
                <Typography variant="body1">
                    Thursday: 9:00AM - 7:00PM
                </Typography>
                <Typography variant="body1">
                    Friday: 9:00AM - 7:00PM
                </Typography>
                <Typography variant="body1">
                    Saturday: 9:00AM - 7:00PM
                </Typography>
                <Typography variant="body1">
                    Sunday: 9:00AM - 7:00PM
                </Typography>
            </HoursContainer>
        </FooterContainer>
    );
}

export default Footer;