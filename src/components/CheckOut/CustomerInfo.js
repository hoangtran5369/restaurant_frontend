import {
  Box,
  Button,
  Divider,
  TextField,

} from "@material-ui/core";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import OrderInfo from "components/CheckOut/OrderInfo";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerInfo } from "store/Order/selector";
import { setCustomerInfo } from "store/Order/reducer";


const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const InfoTextField = styled(TextField)`
  margin-bottom: 10px;
`

const FormContainer = styled.div`
  width: 50%;
  padding-right: 30px;
`;


const SubmitButton = styled(Button)`
  padding: 10px;
`

function CustomerInfo({ onFinished }) {
  const customer = useSelector(getCustomerInfo);
  const { register, handleSubmit, control } = useForm({
    defaultValues: customer
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setCustomerInfo(data));
    onFinished();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyContainer>
          <FormContainer>
            <Controller
              control={control}
              name="firstname"
              render={({ field: { onChange, onBlur, value, ref } }) => {
                return (
                  <InfoTextField
                    fullWidth
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label="First name"
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="surname"
              render={({ field: { onChange, onBlur, value, ref } }) => {
                return (
                  <InfoTextField
                    fullWidth
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label="Surname"

                  />
                )
              }}
            />


            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, value, ref } }) => {
                return (
                  <PhoneInput
                    country={'us'}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => {
                return (
                  <InfoTextField
                    fullWidth
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label="email"
                  />
                )
              }}
            />

          </FormContainer>

          <OrderInfo>

          </OrderInfo>
        </MyContainer>

        <Divider variant="middle" />
        <SubmitButton onClick={handleSubmit(onSubmit)} color="primary" fullWidth variant="contained"> Next   </SubmitButton>
      </form>
    </Box>
  );
}

export default CustomerInfo;
