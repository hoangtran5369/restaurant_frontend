import {
    Box,
    Card,
    CardContent,
    Tabs,
    Tab,
    Typography,
     
  } from "@material-ui/core";
  import styled from "styled-components";
  import Navbar from "components/Navbar";
  import CustomerInfo from "components/CheckOut/CustomerInfo";
  import Delivery from "components/CheckOut/Delivery";
  import Payments from "components/CheckOut/Payment";
  import ReviewSubmit from "components/CheckOut/ReviewSubmit";
  import { useState } from "react";
  
  
  const StyledCard = styled(Card)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  
  `
  
  const StyledTabs = styled(props => {
    return <Tabs {...props} classes={{indicator: 'indicator'}}></Tabs>
  })`
    background-color: rgb(245, 245, 245);
    box-shadow: 0.3em 0.3em 0.5em rgba(0,0,0,0.2);
     && .indicator {
      background-color: #1F6FF7;
    }
  `
  
  const StyledTab = styled(Tab)`
    font-weight: bold;
  `
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  function CheckOut() {
    const steps = ["1. Your infomation", "2. Delivery options", "3. Payments", "4. Review & Submit order"];
  
  
  
    const [currentStep, setCurrentStep] = useState(0);
  
    return (
      <Box minHeight="100vh" flexDirection="column" display="flex">
        <Navbar />
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="space-around"
          color="text.primary"
          paddingTop="5vh"
        >
          <Box minWidth="630px" maxWidth="35vw">
            <Box marginBottom="20px">
              <Typography variant="h3">Check out</Typography>
            </Box>
            <StyledCard >
              
              <StyledTabs
                value={currentStep}
                onChange={(e, newStep) => {setCurrentStep(newStep)}}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                {steps.map(step => <StyledTab label={step} />)}
              </StyledTabs>
              <CardContent>
              <TabPanel value={currentStep} index={0}>
                    <CustomerInfo onFinished={()=> setCurrentStep(1)}/>
              </TabPanel>
              <TabPanel value={currentStep} index={1}>
                    <Delivery onFinished={()=>setCurrentStep(2)}/>
              </TabPanel>
              <TabPanel value={currentStep} index={2}>
                    <Payments onFinished={()=>setCurrentStep(3)} />
              </TabPanel>
              <TabPanel value={currentStep} index={3}>
                    <ReviewSubmit />
              </TabPanel>
               
              </CardContent>
            </StyledCard>
          </Box>
        </Box>
  
      </Box>
    );
  }
  
  export default CheckOut;
  